import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Arrow } from "@/components/ui";
import { CASE_STUDIES } from "@/lib/caseStudies";
import { breadcrumbLd } from "@/lib/ld";
import { SITE, projectBySlug } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies: How We Build and Run Apps, APIs and Products",
  description:
    "Case studies from products Elco Dev builds and runs itself: a health app on the App Store since 2017, native iOS and Android apps, a subscription app launch, a paid Mac app and a live sports data API.",
  alternates: { canonical: "/case-studies" },
};

const CLIENT_WORK = [
  { slug: "bookreverb", name: "BookReverb", line: "A reader marketplace for publishers. We took over the existing codebase and now lead all of its development." },
  { slug: "laurel-crm", name: "LaurelCRM", line: "A custom CRM for Laurel Medical, built from the ground up in 2023 and extended as new needs come in." },
  { slug: "equidesk", name: "EquiDesk", line: "Operations software for equestrian barns: horses, boarders, lessons, billing and messaging in one app." },
];

export default function CaseStudiesPage() {
  const items = CASE_STUDIES.map((c) => ({ c, p: projectBySlug(c.slug)! })).filter((x) => x.p);
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Case studies", path: "/case-studies" }]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Elco Dev case studies",
            url: `${SITE.url}/case-studies`,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: items.map(({ c, p }, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE.url}/work/${p.slug}#case-study`, name: `${p.name}: ${c.headline}` })),
            },
          },
        ]}
      />
      <section className="wrap pb-6 pt-14 sm:pt-20">
        <p className="eyebrow">Case studies</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1.02] sm:text-6xl">
          Products we build <span className="font-serif font-normal italic text-brand">and run ourselves</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-muted">
          We keep our own apps and APIs in the stores and in production, so the lessons are real: what makes people stay, what gets through app review, and what it takes to run billing and updates every day. Every number below is public or from our own products.
        </p>
      </section>
      <section className="wrap space-y-6 py-12">
        {items.map(({ c, p }) => (
          <article key={c.slug} className="group card relative grid gap-6 overflow-hidden p-6 transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(11,15,26,0.35)] sm:grid-cols-[auto_1fr] sm:p-8">
            {p.icon ? (
              <Image src={p.icon} alt="" width={72} height={72} className="h-[72px] w-[72px] rounded-2xl shadow-sm" />
            ) : (
              <span aria-hidden="true" className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-brand-soft font-display text-2xl font-bold text-brand">{p.name[0]}</span>
            )}
            <div>
              <p className="text-sm text-ink-muted">{p.name} · {p.category}</p>
              <h2 className="mt-1 text-2xl font-bold leading-snug">
                <Link href={`/work/${p.slug}#case-study`} className="after:absolute after:inset-0">{c.headline}</Link>
              </h2>
              <p className="mt-3 text-ink-muted">{c.teaser}</p>
              <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                {c.facts.slice(0, 3).map((f) => (
                  <div key={f.label} className="flex flex-col-reverse">
                    <dt className="text-xs text-ink-muted">{f.label}</dt>
                    <dd className="font-display text-xl font-extrabold">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <span className="mt-5 inline-flex items-center gap-2 font-semibold text-brand">Read the case study <Arrow /></span>
            </div>
          </article>
        ))}
      </section>
      <section aria-labelledby="client-work" className="border-t border-ink/10 bg-white py-16">
        <div className="wrap">
          <h2 id="client-work" className="text-3xl font-bold sm:text-4xl">Client products we build and look after</h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">The same habits carry over to client work, including products we inherited from other teams. <Link href="/case-studies/taking-over-an-app" className="underline">See how a takeover works</Link>.</p>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {CLIENT_WORK.map((w) => (
              <li key={w.slug} className="card relative p-6">
                <h3 className="text-xl font-bold"><Link href={`/work/${w.slug}`} className="after:absolute after:inset-0">{w.name}</Link></h3>
                <p className="mt-2 text-ink-muted">{w.line}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6"><Link href="/work" className="font-semibold text-brand underline-offset-4 hover:underline">See all our work</Link></p>
        </div>
      </section>
      <CtaBand title="Want this kind of care on your product?" />
    </>
  );
}
