import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Arrow } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { ProjectCard } from "@/components/ProjectCard";
import { CASE_STUDIES } from "@/lib/caseStudies";
import { breadcrumbLd } from "@/lib/ld";
import { PROJECTS, SITE, projectBySlug, type Project } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work: Apps, SaaS, APIs and Websites",
  description: "Projects built and run by Elco Dev: our own iOS and Android apps, SaaS platforms, a live sports data API, marketplaces, client websites, and apps we took over from other teams.",
  alternates: { canonical: "/work" },
};

const GROUPS: { title: string; lead: string; filter: (p: Project) => boolean }[] = [
  { title: "Our own apps and products", lead: "Built, launched and run by Elco Dev.", filter: (p) => p.kind === "own" },
  { title: "Platforms and SaaS", lead: "Software businesses run on.", filter: (p) => p.kind !== "own" && p.category === "Web app & SaaS" },
  { title: "Websites", lead: "Fast, search-ready sites that bring in leads.", filter: (p) => p.kind !== "own" && p.category === "Website" },
  { title: "Client mobile apps", lead: "iOS and Android apps built for clients.", filter: (p) => p.kind !== "own" && p.category === "Mobile app" },
];

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Work", path: "/work" }]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Work by Elco Dev",
            url: `${SITE.url}/work`,
            mainEntity: { "@type": "ItemList", itemListElement: PROJECTS.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE.url}/work/${p.slug}`, name: p.name })) },
          },
        ]}
      />
      <section className="wrap pb-6 pt-14 sm:pt-20">
        <p className="eyebrow">Our work</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1.02] sm:text-6xl">
          Apps, platforms and websites <span className="font-serif font-normal italic text-brand">we&apos;ve shipped</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-muted">
          {PROJECTS.length} projects, from our own apps in the App Store and Google Play to SaaS platforms, a developer API and client websites.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/case-studies" className="inline-flex items-center gap-2 font-semibold text-brand">Read our case studies <Arrow /></Link>
          <Link href="/case-studies/taking-over-an-app" className="inline-flex items-center gap-2 font-semibold text-brand">How we take over an existing app <Arrow /></Link>
        </div>
      </section>
      <section className="wrap pb-4">
        <h2 className="sr-only">Case studies</h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {CASE_STUDIES.slice(0, 5).map((c) => {
            const p = projectBySlug(c.slug);
            return p ? (
              <li key={c.slug} className="card relative p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">Case study · {p.name}</p>
                <h3 className="mt-2 font-bold leading-snug"><Link href={`/work/${p.slug}#case-study`} className="after:absolute after:inset-0">{c.headline}</Link></h3>
              </li>
            ) : null;
          })}
          <li className="card relative p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand">Case study · BookReverb</p>
            <h3 className="mt-2 font-bold leading-snug"><Link href="/case-studies/taking-over-an-app" className="after:absolute after:inset-0">Taking over an existing app and keeping it running</Link></h3>
          </li>
        </ul>
      </section>
      {GROUPS.map((g) => {
        const items = PROJECTS.filter(g.filter);
        if (!items.length) return null;
        return (
          <section key={g.title} className="wrap py-12">
            <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-4">
              <h2 className="text-2xl font-bold sm:text-3xl">{g.title}</h2>
              <p className="hidden text-ink-muted sm:block">{g.lead}</p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((p) => <ProjectCard key={p.slug} p={p} />)}
            </div>
          </section>
        );
      })}
      <section className="wrap pb-16">
        <div className="card flex flex-col gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Already have an app that needs looking after?</h2>
            <p className="mt-2 max-w-2xl text-ink-muted">Start with a one-week, read-only Production health check for a fixed $990, or put it on a monthly care plan.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/production-health-check" className="btn-primary">Health check <Arrow /></Link>
            <Link href="/care-plans" className="btn-ghost">Care plans</Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
