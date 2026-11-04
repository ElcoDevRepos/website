import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Arrow } from "@/components/ui";
import { INSIGHTS, WORKSHEET } from "@/lib/insights";
import { breadcrumbLd } from "@/lib/ld";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights: App Costs, Maintenance and Hiring a Developer",
  description: "Plain-English guides from Elco Dev on what custom apps cost, what maintenance involves, and how nonprofits and businesses can choose a developer. Plus a free app planning worksheet.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }]),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Elco Dev insights",
            url: `${SITE.url}/insights`,
            blogPost: INSIGHTS.map((a) => ({ "@type": "BlogPosting", headline: a.title, url: `${SITE.url}/insights/${a.slug}`, datePublished: a.published })),
          },
        ]}
      />
      <section className="wrap pb-6 pt-14 sm:pt-20">
        <p className="eyebrow">Insights</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1.02] sm:text-6xl">
          Straight answers about <span className="font-serif font-normal italic text-brand">building software</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-muted">Written from what we&apos;ve actually quoted, built and maintained. No fluff, no client names.</p>
      </section>
      <section className="wrap grid gap-6 py-10 md:grid-cols-3">
        {INSIGHTS.map((a) => (
          <article key={a.slug} className="group card relative flex flex-col p-7">
            <p className="text-sm text-ink-muted">{a.readMinutes} min read</p>
            <h2 className="mt-2 text-xl font-bold leading-snug">
              <Link href={`/insights/${a.slug}`} className="after:absolute after:inset-0">{a.title}</Link>
            </h2>
            <p className="mt-3 text-ink-muted">{a.description}</p>
            <span className="mt-auto inline-flex items-center gap-2 pt-5 font-semibold text-brand">Read <Arrow /></span>
          </article>
        ))}
      </section>
      <section className="wrap pb-10">
        <div className="rounded-3xl bg-brand-soft p-8">
          <h2 className="text-2xl font-bold">Free: {WORKSHEET.title}</h2>
          <p className="mt-2 max-w-2xl text-ink-soft">{WORKSHEET.blurb}</p>
          <a href={WORKSHEET.href} download className="btn-primary mt-5">Download the worksheet (PDF) <Arrow /></a>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
