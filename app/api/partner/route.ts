import { NextResponse } from "next/server";
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

const EMAIL = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/;
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** Partner applications from PartnerForm, emailed to Austin through Resend (replaced EmailJS, whose Gmail link expired). */
export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  let r: Record<string, unknown>;
  try {
    r = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!r || typeof r !== "object") return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  const str = (k: string, max: number) => (typeof r[k] === "string" ? (r[k] as string).trim().slice(0, max) : "");
  // Honeypot: real people never fill the hidden "fax" field. Pretend success.
  if (str("fax", 100)) return NextResponse.json({ ok: true });

  const name = str("contact_name", 100);
  const email = str("email", 200);
  if (!name) return NextResponse.json({ error: "Please add your name." }, { status: 400 });
  if (!EMAIL.test(email)) return NextResponse.json({ error: "Please add a valid email address." }, { status: 400 });
  if (limited(ip)) return NextResponse.json({ error: "Too many submissions. Please email austin@elcodev.com." }, { status: 429 });
  if (new URL(req.url).searchParams.get("dryRun") === "1") return NextResponse.json({ ok: true, dryRun: true });

  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ error: "Email isn't configured. Please email austin@elcodev.com." }, { status: 503 });

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", str("phone", 40) || "Not provided"],
    ["Company", str("company_name", 150) || "Not provided"],
    ["Website", str("website", 300) || "Not provided"],
    ["Partnership type", str("partnership_type", 40) || "Not specified"],
    ["Company type", str("company_type", 40) || "Not specified"],
    ["Client base", str("client_base", 40) || "Not specified"],
  ];
  const message = str("message", 3000) || "No additional information provided";
  const text = [...rows.map(([k, val]) => `${k}: ${val}`), "", "About their business:", message].join("\n");
  const html =
    `<table cellpadding="4">${rows.map(([k, val]) => `<tr><td><b>${esc(k)}</b></td><td>${esc(val)}</td></tr>`).join("")}</table>` +
    `<p><b>About their business</b></p><p style="white-space:pre-wrap">${esc(message)}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Elco Dev website <leads@mail.elcodev.com>",
      to: [SITE.email],
      reply_to: email,
      subject: `Partner application: ${name}${str("company_name", 150) ? ` (${str("company_name", 150)})` : ""}`,
      text,
      html,
    }),
  });
  if (!res.ok) {
    console.error("partner email failed", res.status);
    return NextResponse.json({ error: "That didn't send. Please email austin@elcodev.com." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
