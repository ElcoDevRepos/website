import { NextRequest } from "next/server";
import { bumpStats, incrementsFor, isBotUA } from "@/lib/webStats";

export const runtime = "nodejs";

/** POST /api/t: first-party site stats beacon (lib/webStats.ts). Always 204. */
export async function POST(request: NextRequest) {
  try {
    if (isBotUA(request.headers.get("user-agent") || "")) return new Response(null, { status: 204 });
    const b = (await request.json().catch(() => null)) as { k?: string; p?: string; s?: string } | null;
    if (!b || !["v", "p"].includes(b.k || "") || typeof b.p !== "string") return new Response(null, { status: 204 });
    await bumpStats(incrementsFor({ kind: b.k as "v" | "p", path: b.p.slice(0, 200), src: String(b.s || "").slice(0, 40) }));
  } catch (e) {
    console.error("[t] failed", (e as Error)?.message);
  }
  return new Response(null, { status: 204 });
}
