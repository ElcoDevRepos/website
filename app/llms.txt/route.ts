import { appEntryBySlug } from "@/lib/apps";
import { FAQS, MVP_TIERS, PROJECTS, SERVICES, SITE } from "@/lib/site";

export const dynamic = "force-static";

/** llms.txt: a plain-text summary of the site for AI assistants (https://llmstxt.org). */
export function GET() {
  const own = PROJECTS.filter((p) => p.kind === "own");
  const others = PROJECTS.filter((p) => p.kind !== "own");
  const role = { own: "", client: " (client project)", partner: " (Elco Dev leads technology as CTO partner)" } as const;
  const line = (p: (typeof PROJECTS)[number]) => {
    const app = appEntryBySlug(p.slug);
    const url = app ? `${SITE.url}/apps/${p.slug}` : `${SITE.url}/work/${p.slug}`;
    const site = p.links.site && p.links.site !== url ? ` Site: ${p.links.site}` : "";
    const legal = app?.page.legal ? ` Support: ${url}/support. Privacy: ${url}/privacy.` : "";
    return `- [${p.name}](${url})${role[p.kind]}: ${p.summary} ${p.platforms.join(", ")}. ${p.tech.join(", ")}.${site}${legal}`;
  };
  const body = `# ${SITE.name}

> ${SITE.description}

Founded ${SITE.founded} by ${SITE.founder}. Family-owned. Based in Nashville, Tennessee, working with clients across the United States.
Contact: ${SITE.email}, ${SITE.phoneDisplay}. Free 30-minute consultation: ${SITE.url}/contact

## Services

${SERVICES.map((s) => `- [${s.name}](${SITE.url}/services/${s.slug}): ${s.short}`).join("\n")}
- [MVP development and pricing](${SITE.url}/mvp): ${MVP_TIERS.map((t) => `${t.name} ${t.price}${t.price.startsWith("$") ? " starting" : ""}`).join("; ")}. A focused MVP typically takes about 14 days.

## Apps and products built and run by Elco Dev

${own.map(line).join("\n")}

## Client projects and partnerships

${others.map(line).join("\n")}

## FAQ

${FAQS.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Other pages

- [All apps](${SITE.url}/apps)
- [All work](${SITE.url}/work)
- [Liturgical Living on the web](${SITE.url}/apps/liturgical-living/llms.txt): calendar, saints, novenas, prayers and apologetics
- [Paddle Rack pickleball tools](${SITE.url}/apps/paddlerack/llms.txt): free round robin generator, schedules and guides
- [King James Bible (KJV) from Scripted](${SITE.url}/apps/scripted/bible/llms.txt): every book, chapter and verse of the KJV, free to read
- [Partner program](${SITE.url}/partners)
- [Privacy policy](${SITE.url}/privacy-policy)
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
