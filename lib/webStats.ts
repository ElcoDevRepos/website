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
  [/gemini\.google\.com$/, "gemini"], [/copilot\.microsoft\.com$/, "copilot"], // before google (Nov 6, Max)
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

/** "apps-console", "services-production-health-check", ... for product pages; "" otherwise. */
export function productOf(path: string): string {
  const parts = (path || "/").split("?")[0].split("/").filter(Boolean);
  if ((parts[0] === "apps" || parts[0] === "services") && parts[1]) return safeKey(`${parts[0]}-${parts[1]}`, 40);
  return "";
}

export function incrementsFor(b: { kind: "v" | "p"; path: string; src: string }): Record<string, number> {
  const section = sectionOf(b.path);
  const src = b.src ? safeKey(b.src) : "direct";
  const inc: Record<string, number> = {};
  if (b.kind === "v") { inc.visits = 1; inc[`src.${src}`] = 1; inc[`land.${section}`] = 1; }
  if (KEY_SECTIONS.has(section)) { inc[`pv.${section}`] = 1; inc[`srcpv.${src}__${section}`] = 1; }
  // Per-product views (Nov 6, Max): /apps/<slug> and /services/<slug> also count as e.g. apps-console, alongside "apps".
  const product = productOf(b.path);
  if (product) {
    if (b.kind === "v") inc[`land.${product}`] = 1;
    inc[`pv.${product}`] = 1;
    inc[`srcpv.${src}__${product}`] = 1;
  }
  return inc;
}

/**
 * Proxied app sites that have no counter store of their own post to this /api/t (same origin under elcodev.com).
 * Their counters go to their own hash web:<site>:{date}, so elcodev's visits stay elcodev's (Nov 6 2026).
 */
export const SUB_SITES: Record<string, string> = { paddlerack: "/apps/paddlerack" };

/** "paddlerack" for /apps/paddlerack/..., else "". */
export function subSiteOf(path: string): string {
  const p = (path || "").split("?")[0];
  for (const [site, prefix] of Object.entries(SUB_SITES)) if (p === prefix || p.startsWith(prefix + "/")) return site;
  return "";
}

/** Counters for a sub-site beacon: v = session start, s = store tap (st ios|android). Sections are relative to the app path. */
export function subSiteIncrementsFor(site: string, b: { kind: "v" | "s"; path: string; src: string; store?: string }): Record<string, number> {
  const section = sectionOf((b.path || "/").slice(SUB_SITES[site].length) || "/");
  const src = b.src ? safeKey(b.src) : "direct";
  const inc: Record<string, number> = {};
  if (b.kind === "v") { inc.visits = 1; inc[`src.${src}`] = 1; inc[`land.${section}`] = 1; }
  if (b.kind === "s" && (b.store === "ios" || b.store === "android")) {
    inc[`store.${b.store}`] = 1; inc[`storesrc.${src}__${b.store}`] = 1; inc[`storeland.${section}__${b.store}`] = 1;
  }
  return inc;
}

/** Writes counters to today's hash (web:elcodev:{date}, or web:<site>:{date} for a sub-site). Never throws. */
export async function bumpStats(inc: Record<string, number>, site = "elcodev"): Promise<void> {
  const url = process.env.KV_REST_API_URL, token = process.env.KV_REST_API_TOKEN;
  const fields = Object.keys(inc);
  if (!url || !token || !fields.length) return;
  const key = `web:${site}:${new Date().toISOString().slice(0, 10)}`;
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
