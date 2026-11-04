import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Faq } from "@/components/Faq";
import { LeadForm } from "@/components/LeadForm";
import { Arrow } from "@/components/ui";
import { breadcrumbLd, faqLd, serviceLd } from "@/lib/ld";
import { PROCESS, SERVICES, SPECIALTIES, TESTIMONIALS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services: Mobile Apps, Web Apps & SaaS, Custom CRMs, Websites",
  description: "Elco Dev builds iOS and Android apps, web apps and SaaS platforms, custom CRMs, internal tools and KPI dashboards, APIs and websites, and adds experienced developers to existing teams. Nashville, TN.",
  alternates: { canonical: "/services" },
};

/** Ranges come from real quotes Elco Dev sent over the past year; no client is named. */
const PRICING_FAQS = [
  { q: "How much does a project cost?", a: "Every project gets a fixed quote after a free call, but here are honest ranges from the quotes we've sent over the past year. Focused MVPs and design-to-code work start at $3,500 to $7,000. Small custom apps and websites have mostly landed between about $8,000 and $20,000. Larger custom systems (multi-milestone business apps, portals and integrations) have been quoted between about $50,000 and $60,000." },
  { q: "Fixed price or hourly?", a: "Fixed price per project or per milestone, agreed before work starts, so you know the number up front. Larger builds are split into milestones (for example 25% at each of four milestones) so you pay as working software is delivered. If scope changes, we quote the change in writing before doing it." },
  { q: "Can we start smaller?", a: "Yes, and we often recommend it. A paid discovery or a first milestone (one workflow done well) lets you see real software and a firm plan before committing to the whole build." },
  { q: "What does it cost after launch?", a: "Hosting starts at $40 a month for sites we host. Apps need yearly App Store and Google Play updates and the occasional fix, which we cover with a monthly support plan sized to the app. Hosting, store and third-party fees are billed at cost, in accounts you own." },
  { q: "Do you work with nonprofits and grant budgets?", a: "Yes. We can phase a project to match a grant period or a board approval, and quote each phase separately." },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]), ...SERVICES.map(serviceLd), faqLd(PRICING_FAQS)]} />
      <section className="wrap pb-10 pt-14 sm:pt-20">
        <p className="eyebrow">Services</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1.02] sm:text-6xl">
          Software for the way <span className="font-serif font-normal italic text-brand">your business works</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-muted">One small team from the first call to launch and beyond. More than 50 projects delivered since 2019, and a clear quote before any work starts.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">Book a free call <Arrow /></Link>
          <Link href="/mvp" className="btn-ghost">See MVP pricing</Link>
          <Link href="/case-studies" className="btn-ghost">Read case studies</Link>
        </div>
      </section>
      <section className="wrap grid gap-5 pb-10 md:grid-cols-2">
        {SERVICES.map((s, i) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className={`group card flex flex-col p-8 transition-colors hover:border-ink/30 ${i === SERVICES.length - 1 && SERVICES.length % 2 ? "md:col-span-2" : ""}`}>
            <span className="font-display text-sm font-bold text-brand">0{i + 1}</span>
            <h2 className="mt-3 text-3xl font-bold">{s.name}</h2>
            <p className="mt-3 text-lg text-ink-muted">{s.short}</p>
            <ul className="mt-6 space-y-2 text-ink-soft">
              {s.includes.slice(0, 4).map((x) => (
                <li key={x} className="flex gap-2.5"><span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-brand" />{x}</li>
              ))}
            </ul>
            <span className="mt-8 inline-flex items-center gap-2 font-semibold text-brand">Learn more <Arrow /></span>
          </Link>
        ))}
      </section>
      <section className="wrap pb-16">
        <h2 className="text-2xl font-bold sm:text-3xl">Specialties</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {SPECIALTIES.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card flex flex-col p-6 transition-colors hover:border-ink/30">
              <h3 className="text-xl font-bold">{s.name}</h3>
              <p className="mt-2 text-ink-muted">{s.short}</p>
              <span className="mt-4 inline-flex items-center gap-2 font-semibold text-brand">Learn more <Arrow /></span>
            </Link>
          ))}
        </div>
      </section>
      <section id="pricing" className="wrap grid gap-10 pb-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">How we price</h2>
          <p className="mt-4 text-lg text-ink-muted">Fixed quotes before any work starts, paid by milestone. These ranges come from the quotes we&apos;ve actually sent this past year.</p>
          <Link href="/mvp" className="btn-ghost mt-6">MVP pricing <Arrow /></Link>
          {(() => {
            const q = TESTIMONIALS.find((t) => t.company === "Penalty Verdict");
            return q ? (
              <figure className="card mt-8 p-6">
                <blockquote className="leading-relaxed text-ink-soft">&ldquo;{q.quote}&rdquo;</blockquote>
                <figcaption className="mt-3 text-sm"><strong>{q.author}</strong> <span className="text-ink-muted">· {q.company}</span></figcaption>
              </figure>
            ) : null;
          })()}
        </div>
        <Faq items={PRICING_FAQS} />
      </section>
      <section className="bg-white py-20">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">How it works</h2>
            <ol className="mt-8 space-y-5">
              {PROCESS.map((p) => (
                <li key={p.step} className="flex gap-4">
                  <span className="font-display font-bold text-brand">{p.step}</span>
                  <span><strong>{p.title}.</strong> <span className="text-ink-muted">{p.body}</span></span>
                </li>
              ))}
            </ol>
          </div>
          <LeadForm page="/services" />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
