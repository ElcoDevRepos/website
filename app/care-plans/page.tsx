import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { Arrow } from "@/components/ui";
import { breadcrumbLd, faqLd } from "@/lib/ld";
import { SITE } from "@/lib/site";

/** Care plans: prices approved by Austin on Nov 4 2026. Extra work is quoted first, not billed hourly. */
export const metadata: Metadata = {
  title: "Care Plans: Website and App Maintenance, Monthly",
  description:
    "Monthly care plans from Elco Dev: hosting, security and dependency updates, uptime monitoring, yearly App Store and Google Play SDK updates, and included hours for changes. Month to month, cancel any time.",
  alternates: { canonical: "/care-plans" },
};

const TIERS = [
  {
    name: "Hosting",
    price: 40,
    for: "Sites that just need to stay up",
    blurb: "Fast, secure hosting with nothing else to think about.",
    features: ["Hosting and SSL", "Daily backups", "Domain and DNS help"],
  },
  {
    name: "Care",
    price: 129,
    for: "Marketing websites",
    blurb: "Your site kept current, safe and up to date, with time each month for small changes.",
    features: [
      "Everything in Hosting",
      "Monthly CMS, plugin and dependency updates, tested before they go live",
      "Malware scanning and uptime monitoring",
      "1 hour a month of small changes: text, photos, new pages",
      "Replies within 2 business days",
    ],
    featured: true,
  },
  {
    name: "Care Plus",
    price: 349,
    for: "Mobile apps and web apps",
    blurb: "For apps in the App Store and Google Play, where the stores change the rules every year.",
    features: [
      "Everything in Care",
      "Yearly Android target-API and iOS SDK updates, with store resubmission",
      "3 hours a month of fixes and improvements",
      "Bug fixes included",
      "Next-business-day replies and a regular check-in",
    ],
  },
  {
    name: "Product retainer",
    price: 1500,
    from: true,
    for: "Products that are still growing",
    blurb: "A steady block of development time every month, planned with you.",
    features: [
      "Everything in Care Plus",
      "About 15 hours a month of planned feature work",
      "Same-day replies for urgent issues",
      "Monthly planning call and release notes",
    ],
  },
];

const FAQS = [
  { q: "Is there a contract?", a: "No. Plans are month to month. Upgrade, downgrade or cancel any time, and the change applies from your next billing date." },
  { q: "What counts as a small change?", a: "Anything that fits in the included hours: updating text or photos, adding a page from an existing layout, fixing a broken link or form, small style tweaks. Larger work gets a quote first, and nothing is billed without your OK." },
  { q: "Do unused hours roll over?", a: "No. Included hours reset each month, which keeps the price low and the schedule predictable." },
  { q: "Why do apps need a care plan?", a: "Apple and Google raise their minimum SDK and target-API levels every year. Apps that miss the deadline stop getting updates or disappear from search in the store. Care Plus handles those updates and the resubmission for you." },
  { q: "Can you take over a site or app someone else built?", a: "Usually, yes. We start with a short review of the code and hosting, tell you what we found, and then move it onto a plan." },
  { q: "When are you available?", a: "Monday to Friday, 9am to 5pm Central. Uptime monitoring runs around the clock, but none of the plans include 24/7 or weekend on-call response. If you need that, ask and we'll tell you honestly whether we can cover it and what it costs." },
  { q: "What isn't included?", a: "New features beyond the included hours (quoted first), content writing, customer support for your users, and third-party costs such as hosting upgrades, paid plugins, app store fees or API usage, which are billed to your own accounts at cost." },
  { q: "Who does the work?", a: "Austin Hunter, Elco Dev's owner and lead developer, is your contact and is responsible for the work on your plan. A backup developer who knows our client systems covers when Austin is away, so fixes don't wait on one person." },
  { q: "How do I pay?", a: "By card or bank transfer through a monthly Stripe invoice that lists the service period. We can add a PO number or supplier ID if your accounts team needs one." },
];

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

export default function CarePlansPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Care plans", path: "/care-plans" }]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Website and app care plans",
            provider: { "@id": `${SITE.url}/#organization` },
            offers: TIERS.map((t) => ({
              "@type": "Offer",
              name: t.name,
              description: t.blurb,
              priceSpecification: { "@type": "UnitPriceSpecification", price: t.price, priceCurrency: "USD", unitText: "MONTH", ...(t.from ? { minPrice: t.price } : {}) },
            })),
          },
          faqLd(FAQS),
        ]}
      />
      <section className="bg-ink text-white">
        <div className="wrap pb-20 pt-16 sm:pt-24">
          <p className="eyebrow text-white/60">Care plans</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1.02] sm:text-7xl">
            Launch is day one. <span className="font-serif font-normal italic text-lime">We look after the rest.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Sites need updates and apps need yearly store changes, or they quietly break. A care plan covers that work for a flat monthly price. Month to month, cancel any time.
          </p>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {TIERS.map((t) => (
              <div key={t.name} className={`flex flex-col rounded-3xl p-7 ${t.featured ? "bg-lime text-ink" : "bg-white/[0.06] ring-1 ring-white/10"}`}>
                {t.featured && <span className="mb-4 w-fit rounded-full bg-ink px-3 py-1 text-xs font-bold text-lime">Most popular</span>}
                <h2 className="text-2xl font-bold">{t.name}</h2>
                <p className={`mt-1 text-sm ${t.featured ? "text-ink-soft" : "text-white/60"}`}>{t.for}</p>
                <p className="mt-5 font-display text-5xl font-extrabold">
                  {t.from && <span className="mr-1 align-middle text-base font-semibold">from</span>}
                  {usd(t.price)}
                  <span className={`text-base font-semibold ${t.featured ? "text-ink-soft" : "text-white/60"}`}>/mo</span>
                </p>
                <p className={`mt-5 ${t.featured ? "text-ink-soft" : "text-white/75"}`}>{t.blurb}</p>
                <ul className="mt-6 space-y-2.5 text-[15px]">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2.5"><span aria-hidden="true" className={`mt-2 h-1.5 w-1.5 flex-none rounded-full ${t.featured ? "bg-ink" : "bg-lime"}`} />{f}</li>
                  ))}
                </ul>
                <Link href="#start" className={`btn mt-8 ${t.featured ? "bg-ink text-white hover:bg-brand" : "bg-white text-ink hover:bg-lime"}`}>Get started <Arrow /></Link>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/50">Work beyond the included hours is quoted first and never billed without your OK.</p>
        </div>
      </section>

      <section className="wrap grid gap-12 py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Questions</h2>
          <p className="mt-4 text-lg text-ink-muted">
            We run our own apps in the App Store and Google Play every day, so store deadlines and dependency updates are routine for us. <Link href="/case-studies" className="underline">See our case studies</Link>.
          </p>
        </div>
        <Faq items={FAQS} />
      </section>

      <section id="start" className="bg-white py-20">
        <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Put your site or app on a plan</h2>
            <p className="mt-4 text-lg text-ink-muted">Tell us what you have and where it&apos;s hosted. We&apos;ll suggest the right plan and move it over with no downtime.</p>
            <p className="mt-6 text-ink-soft">Prefer email? <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          </div>
          <LeadForm page="/care-plans" />
        </div>
      </section>
      <CtaBand title="Building something new?" />
    </>
  );
}
