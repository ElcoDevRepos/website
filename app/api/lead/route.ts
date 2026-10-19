import { NextResponse } from "next/server";
import { validateLead } from "@/lib/lead";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";

// Best-effort per-IP limit (per server instance): 5 submissions per 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  // Honeypot: real people never fill the hidden "website" field. Pretend success.
  if (body && typeof body === "object" && typeof (body as Record<string, unknown>).website === "string" && (body as Record<string, string>).website.trim()) {
    return NextResponse.json({ ok: true });
  }
  const v = validateLead(body);
  if (!v.ok) return NextResponse.json({ error: v.error }, { status: 400 });
  if (limited(ip)) return NextResponse.json({ error: "Too many submissions. Please email austin@elcodev.com." }, { status: 429 });
  // Validates the full path without sending anything (used for deploy checks).
  if (new URL(req.url).searchParams.get("dryRun") === "1") return NextResponse.json({ ok: true, dryRun: true });

  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ error: "Email isn't configured. Please email austin@elcodev.com." }, { status: 503 });

  const { lead } = v;
  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Budget", lead.budget],
    ["Timeline", lead.timeline],
    ["Page", lead.page || "(unknown)"],
  ];
  const text = [...rows.map(([k, val]) => `${k}: ${val}`), "", "What they're building:", lead.building].join("\n");
  const html =
    `<table cellpadding="4">${rows.map(([k, val]) => `<tr><td><b>${esc(k)}</b></td><td>${esc(val)}</td></tr>`).join("")}</table>` +
    `<p><b>What they're building</b></p><p style="white-space:pre-wrap">${esc(lead.building)}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Elco Dev website <leads@mail.elcodev.com>",
      to: [SITE.email],
      reply_to: lead.email,
      subject: `New lead: ${lead.name} (${lead.budget}, ${lead.timeline})`,
      text,
      html,
    }),
  });
  if (!res.ok) {
    console.error("lead email failed", res.status);
    return NextResponse.json({ error: "That didn't send. Please email austin@elcodev.com." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
