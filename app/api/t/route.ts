import { NextRequest } from "next/server";
import { bumpStats, incrementsFor, isBotUA, subSiteIncrementsFor, subSiteOf } from "@/lib/webStats";

export const runtime = "nodejs";

/** POST /api/t: first-party site stats beacon (lib/webStats.ts). Always 204. */
export async function POST(request: NextRequest) {
  try {
    if (isBotUA(request.headers.get("user-agent") || "")) return new Response(null, { status: 204 });
    const b = (await request.json().catch(() => null)) as { k?: string; p?: string; s?: string; st?: string } | null;
    if (!b || typeof b.p !== "string") return new Response(null, { status: 204 });
    // Proxied app sites (Paddle Rack) count into their own hash: v = visit, s = store tap.
    const sub = subSiteOf(b.p);
    if (sub) {
      if (["v", "s"].includes(b.k || ""))
        await bumpStats(subSiteIncrementsFor(sub, { kind: b.k as "v" | "s", path: b.p.slice(0, 200), src: String(b.s || "").slice(0, 40), store: b.st }), sub);
      return new Response(null, { status: 204 });
    }
    if (!["v", "p"].includes(b.k || "")) return new Response(null, { status: 204 });
    await bumpStats(incrementsFor({ kind: b.k as "v" | "p", path: b.p.slice(0, 200), src: String(b.s || "").slice(0, 40) }));
  } catch (e) {
    console.error("[t] failed", (e as Error)?.message);
  }
  return new Response(null, { status: 204 });
}
