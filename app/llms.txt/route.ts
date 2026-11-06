import { appEntryBySlug } from "@/lib/apps";
import { CASE_STUDIES } from "@/lib/caseStudies";
import { INSIGHTS, WORKSHEET } from "@/lib/insights";
import { FAQS, MVP_TIERS, PROJECTS, SERVICES, SITE, SPECIALTIES } from "@/lib/site";

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
${SPECIALTIES.map((s) => `- [${s.name}](${SITE.url}/services/${s.slug}): ${s.short}`).join("\n")}
- [MVP development and pricing](${SITE.url}/mvp): ${MVP_TIERS.map((t) => `${t.name} ${t.price}${t.price.startsWith("$") ? " starting" : ""}`).join("; ")}. A focused MVP typically takes about 14 days.

## Apps and products built and run by Elco Dev

${own.map(line).join("\n")}

## Kits, downloads and add-ons you can buy today

- [Elco Console kit](${SITE.url}/apps/console): self-hosted Mac console that runs your own Claude Code agents as a scheduled team with one inbox for your decisions. $99 one-time; uses your own Claude plan; 14-day refund.
- [Printable planners and logs](${SITE.url}/apps/downloads): Advent Family Planner 2026 ($9), Lent Family Planner 2027 ($9), 30-Day Food, Symptom & Bristol Stool Journal ($7), Flare-Day Meal Planner ($6), Pickleball Open-Play & League Organizer Kit ($9). Instant PDF downloads.
- [Deskbridge](${SITE.url}/apps/deskbridge): Samsung DeX (and Pixel desktop mode) in a Mac window. $12 once, 7-day free trial. [Deskbridge Pro](${SITE.url}/apps/deskbridge/pro) adds one-click MP4 recording, $5/year.
- [Full-season sports schedule export](https://www.realtimesportsapi.com/schedule-export): every game for 13 leagues as CSV and JSON, rebuilt daily. $49 once.
- [SettleDate](https://settledate.dev): exchange holidays, trading hours and settlement dates API for 29 exchanges. Free key (5,000 calls/month).
- [Care plans](${SITE.url}/care-plans): monthly hosting, updates and support for websites and apps, from $40/month.
- [Production health check](${SITE.url}/services/production-health-check): a one-week, read-only review of an existing app's code, hosting and security, $990 fixed.

## Case studies

${CASE_STUDIES.map((c) => `- [${c.headline}](${SITE.url}/work/${c.slug}#case-study): ${c.teaser}`).join("\n")}

## Insights

${INSIGHTS.map((a) => `- [${a.title}](${SITE.url}/insights/${a.slug}): ${a.description}`).join("\n")}
- [${WORKSHEET.title} (free PDF)](${SITE.url}${WORKSHEET.href}): ${WORKSHEET.blurb}

## Client projects and partnerships

${others.map(line).join("\n")}

## FAQ

${FAQS.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Other pages

- [All apps](${SITE.url}/apps)
- [All work](${SITE.url}/work)
- [Case studies](${SITE.url}/case-studies)
- [Liturgical Living on the web](https://liturgicalliving.app/llms.txt): calendar, saints, novenas, prayers and apologetics
- [Paddle Rack pickleball tools](${SITE.url}/apps/paddlerack/llms.txt): free round robin generator, schedules and guides
- [Fairsky home and yard weather](${SITE.url}/apps/fairsky/llms.txt): live GO / WAIT / NO verdicts and 1991–2020 climate averages for home and yard jobs in 100 US metros
- [King James Bible (KJV) from Scripted](${SITE.url}/apps/scripted/bible/llms.txt): every book, chapter and verse of the KJV, free to read
- [Partner program](${SITE.url}/partners)
- [Privacy policy](${SITE.url}/privacy-policy)
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
