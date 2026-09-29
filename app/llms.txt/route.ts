import { FAQS, MVP_TIERS, PROJECTS, SERVICES, SITE } from "@/lib/site";

export const dynamic = "force-static";

/** llms.txt: a plain-text summary of the site for AI assistants (https://llmstxt.org). */
export function GET() {
  const own = PROJECTS.filter((p) => p.kind === "own");
  const others = PROJECTS.filter((p) => p.kind !== "own");
  const line = (p: (typeof PROJECTS)[number]) => `- [${p.name}](${SITE.url}/work/${p.slug}): ${p.summary} ${p.platforms.join(", ")}. ${p.tech.join(", ")}.${p.links.site ? ` Site: ${p.links.site}` : ""}`;
  const body = `# ${SITE.name}

> ${SITE.description}

Founded ${SITE.founded} by ${SITE.founder}. Family-owned. Based in Nashville, Tennessee, working with clients across the United States.
Contact: ${SITE.email}, ${SITE.phoneDisplay}. Free 30-minute consultation: ${SITE.url}/contact

## Services

${SERVICES.map((s) => `- [${s.name}](${SITE.url}/services/${s.slug}): ${s.short}`).join("\n")}
- [MVP development and pricing](${SITE.url}/mvp): ${MVP_TIERS.map((t) => `${t.name} ${t.price}${t.price.startsWith("$") ? " starting" : ""}`).join("; ")}. A focused MVP typically takes about 14 days.

## Apps and products built and run by Elco Dev

${own.map(line).join("\n")}

## Client and other projects

${others.map(line).join("\n")}

## FAQ

${FAQS.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Other pages

- [All work](${SITE.url}/work)
- [Partner program](${SITE.url}/partners)
- [Privacy policy](${SITE.url}/privacy-policy)
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
