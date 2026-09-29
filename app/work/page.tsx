import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { ProjectCard } from "@/components/ProjectCard";
import { breadcrumbLd } from "@/lib/ld";
import { PROJECTS, SITE, type Project } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work: Apps, SaaS, APIs and Websites",
  description: "Projects built by Elco Dev: our own iOS and Android apps, SaaS platforms, a live sports data API, marketplaces and client websites.",
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
      <CtaBand />
    </>
  );
}
