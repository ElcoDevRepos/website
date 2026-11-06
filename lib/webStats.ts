/**
 * First-party, cookie-free site stats (Nov 2026), same schema as the Crohn's and RSA sites:
 * Upstash Redis HASH web:elcodev:{YYYY-MM-DD} (see app/api/t/route.ts and app/api/lead/route.ts), integer counters only.
 *   visits, src.<bucket>, land.<section>          one beacon per browser session
 *   pv.<section>, srcpv.<bucket>__<section>       key-section views (services, care plans, case studies, ...)
 *   lead.<section>, leadsrc.<bucket>               successful lead-form submissions
 * No IP, no user id, no per-visit rows.
 */
export const KEY_SECTIONS = new Set(["home", "services", "care-plans", "case-studies", "work", "mvp", "contact", "partners", "insights", "apps"]);

export function safeKey(s: string, max = 32): string {
  return (s || "").toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "").slice(0, max) || "none";
}

const SOURCES: [RegExp, string][] = [
  [/(^|\.)google\./, "google"], [/(^|\.)bing\.com$/, "bing"], [/duckduckgo\.com$/, "duckduckgo"], [/(^|\.)yahoo\./, "yahoo"],
  [/chatgpt\.com$|openai\.com$/, "chatgpt"], [/perplexity\.ai$/, "perplexity"], [/claude\.ai$/, "claude"], [/facebook\.com$|fb\.com$/, "facebook"],
  [/instagram\.com$/, "instagram"], [/reddit\.com$/, "reddit"], [/linkedin\.com$|lnkd\.in$/, "linkedin"], [/clutch\.co$/, "clutch"],
  [/(^|\.)x\.com$|twitter\.com$|t\.co$/, "x"], [/github\.com$/, "github"], [/mail\.google\.com$|outlook\./, "email"],
];

/** 'threads' / 'bluesky' from a utm_source value or a referrer host, else ''. */
export function socialOf(utm: string, host = ""): string {
  if (/threads/.test(utm) || /(^|\.)threads\.(net|com)$/.test(host)) return "threads";
  if (/bluesky|bsky/.test(utm) || /(^|\.)bsky\.(app|social)$/.test(host)) return "bluesky";
  return "";
}

export function sourceBucket(referrer: string, utmSource: string | null | undefined, ownHost: string): string {
  const utm = (utmSource || "").toLowerCase().trim();
  // Nov 6 2026: Threads/Bluesky posts (utm_source=threads|bluesky) and their referrers share one key.
  const social = socialOf(utm);
  if (social) return social;
  if (utm) return utm.includes("chatgpt") || utm.includes("openai") ? "chatgpt" : "utm-" + safeKey(utm, 24);
  if (!referrer) return "direct";
  let host = "";
  try { host = new URL(referrer).hostname.toLowerCase().replace(/^www\./, ""); } catch { return "other"; }
  if (!host) return "direct";
  if (host === ownHost.replace(/^www\./, "")) return "";
  const socialHost = socialOf("", host);
  if (socialHost) return socialHost;
  for (const [re, name] of SOURCES) if (re.test(host)) return name;
  return "other";
}

export function sectionOf(path: string): string {
  return safeKey((path || "/").split("?")[0].split("/").filter(Boolean)[0] || "home", 24);
}

const BOT = /bot|crawl|spider|slurp|preview|fetch|monitor|curl|wget|python|node-fetch|headless|lighthouse|vercel|facebookexternalhit|embedly|axios|go-http/i;
export const isBotUA = (ua: string) => !ua || BOT.test(ua);

export function incrementsFor(b: { kind: "v" | "p"; path: string; src: string }): Record<string, number> {
  const section = sectionOf(b.path);
  const src = b.src ? safeKey(b.src) : "direct";
  const inc: Record<string, number> = {};
  if (b.kind === "v") { inc.visits = 1; inc[`src.${src}`] = 1; inc[`land.${section}`] = 1; }
  if (KEY_SECTIONS.has(section)) { inc[`pv.${section}`] = 1; inc[`srcpv.${src}__${section}`] = 1; }
  return inc;
}

/** Writes counters to today's hash. Never throws; a stats failure must not break a request. */
export async function bumpStats(inc: Record<string, number>): Promise<void> {
  const url = process.env.KV_REST_API_URL, token = process.env.KV_REST_API_TOKEN;
  const fields = Object.keys(inc);
  if (!url || !token || !fields.length) return;
  const key = `web:elcodev:${new Date().toISOString().slice(0, 10)}`;
  const commands = [...fields.map((f) => ["HINCRBY", key, f, String(inc[f])]), ["EXPIRE", key, String(400 * 86400)]];
  try {
    await fetch(`${url}/pipeline`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(commands),
      signal: AbortSignal.timeout(1500),
    });
  } catch (e) {
    console.error("[stats] write failed", (e as Error)?.message);
  }
}
