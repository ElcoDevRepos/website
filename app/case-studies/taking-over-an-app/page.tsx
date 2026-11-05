import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Arrow } from "@/components/ui";
import { breadcrumbLd } from "@/lib/ld";

/**
 * Takeover case study. Client facts are limited to what is already public on this site
 * (BookReverb: "We took over the existing codebase and now lead all of its development").
 * No client metrics, revenue, incidents or internal details appear here.
 */
export const metadata: Metadata = {
  title: "Case Study: Taking Over and Running an Existing App",
  description:
    "How Elco Dev takes over a web or mobile app another team (or an AI tool) built, then runs it month to month: a review first, plain findings, careful production changes and a care plan. BookReverb is a live example.",
  alternates: { canonical: "/case-studies/taking-over-an-app" },
};

const STEPS = [
  {
    title: "Review before we touch anything",
    body: "We start read-only: the code, the hosting, the database, the app-store and domain accounts, and who has access to what. Nothing changes in production while we learn how it works.",
  },
  {
    title: "Plain findings and a fixed quote",
    body: "You get a short write-up of what works, what's risky and what we'd fix first, in that order. Anything beyond the monthly plan is quoted in writing before we start.",
  },
  {
    title: "Careful production changes",
    body: "Changes go through review, are tested before release, and are written down so you can see what changed and why. Risky changes wait for your OK.",
  },
  {
    title: "Support that gets looked at",
    body: "Support emails and errors are triaged on a schedule during business hours (Mon–Fri, 9–5 Central), so problems are caught early instead of piling up.",
  },
  {
    title: "Keeping the running cost honest",
    body: "Inherited apps often pay for more hosting, scraping or third-party usage than they need. We look for the spend that isn't earning its keep and tell you before changing it.",
  },
];

export default function TakeoverCaseStudyPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Case studies", path: "/case-studies" },
            { name: "Taking over an existing app", path: "/case-studies/taking-over-an-app" },
          ]),
        ]}
      />
      <section className="wrap pb-10 pt-14 sm:pt-20">
        <p className="eyebrow">Case study</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1.02] sm:text-6xl">
          We take over your app <span className="font-serif font-normal italic text-brand">and keep it running</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-muted">
          Your developer moved on, or the app was built quickly with AI tools and now real customers depend on it. This is how we pick it up and run it month to month.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/care-plans" className="btn-primary">See care plans <Arrow /></Link>
          <Link href="/contact" className="btn-ghost">Book a free call</Link>
        </div>
      </section>

      <section className="wrap pb-16">
        <div className="card p-8">
          <p className="eyebrow">Live example</p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">BookReverb</h2>
          <p className="mt-4 max-w-3xl text-ink-muted">
            BookReverb is a reader marketplace for publishers: upload an advance copy once, readers opt in based on interest, and reading progress and optional review links are tracked in one dashboard. We took over the existing codebase and now lead all of its development.
          </p>
          <Link href="/work/bookreverb" className="mt-6 inline-flex items-center gap-2 font-semibold text-brand">More about BookReverb <Arrow /></Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="wrap">
          <h2 className="text-3xl font-bold sm:text-4xl">How a takeover works</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-2">
            {STEPS.map((s, i) => (
              <li key={s.title} className="card p-6">
                <span className="font-display text-sm font-bold text-brand">0{i + 1}</span>
                <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-ink-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap grid gap-10 py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">What it costs</h2>
          <p className="mt-4 text-lg text-ink-muted">
            Running an app afterwards fits our monthly care plans, from Care at $129 for websites and Care Plus at $349 for mobile and web apps to a product retainer from $1,500 for apps that are still growing. Month to month, with accounts kept in your name.
          </p>
          <Link href="/care-plans" className="btn-ghost mt-6">Compare care plans <Arrow /></Link>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-bold">Good fits</h3>
          <ul className="mt-4 space-y-2 text-ink-soft">
            {[
              "Web apps and SaaS products with paying users",
              "Mobile apps in the App Store and Google Play",
              "Apps first built with AI coding tools that now need a steady hand",
              "Projects whose original developer or agency is no longer available",
            ].map((x) => (
              <li key={x} className="flex gap-2.5"><span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-brand" />{x}</li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
