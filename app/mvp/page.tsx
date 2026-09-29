import type { Metadata } from "next";
import Link from "next/link";
import { Calendly } from "@/components/Calendly";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { Arrow } from "@/components/ui";
import { breadcrumbLd, faqLd } from "@/lib/ld";
import { MVP_TIERS, SITE, TESTIMONIALS } from "@/lib/site";

export const metadata: Metadata = {
  title: "MVP Development Pricing: Launch in About 14 Days",
  description: "MVP product builds from $7,000 and design-to-frontend from $3,500, delivered in about 14 days by Elco Dev, a Nashville software studio. Book a free consultation.",
  alternates: { canonical: "/mvp" },
};

const MVP_FAQS = [
  { q: "What do I need to bring?", a: "Just the idea. Sketches, a text description or a Figma file all work, and no technical knowledge is needed." },
  { q: "Is 14 days guaranteed?", a: "It's typical for a focused MVP. The timeline depends on scope, and we set an accurate one with you after the consultation." },
  { q: "What happens after the MVP?", a: "Many clients continue with a long-term partnership: new features, releases, performance and security work, and support." },
];

export default function MvpPage() {
  const quote = TESTIMONIALS.find((t) => t.company === "Daily Dashboard")!;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "MVP pricing", path: "/mvp" }]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "MVP development",
            provider: { "@id": `${SITE.url}/#organization` },
            offers: MVP_TIERS.filter((t) => t.price.startsWith("$")).map((t) => ({ "@type": "Offer", name: t.name, price: Number(t.price.replace(/[^0-9]/g, "")), priceCurrency: "USD", description: t.blurb })),
          },
          faqLd(MVP_FAQS),
        ]}
      />
      <section className="bg-ink text-white">
        <div className="wrap pb-20 pt-16 sm:pt-24">
          <p className="eyebrow text-white/60">MVP development</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1.02] sm:text-7xl">
            Your MVP, working, in about <span className="font-serif font-normal italic text-lime">14 days.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">From simple sketches to a product with sign-in, payments and integrations. Clear pricing up front, then a timeline set with you.</p>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {MVP_TIERS.map((t) => (
              <div key={t.name} className={`flex flex-col rounded-3xl p-8 ${t.featured ? "bg-lime text-ink" : "bg-white/[0.06] ring-1 ring-white/10"}`}>
                {t.featured && <span className="mb-4 w-fit rounded-full bg-ink px-3 py-1 text-xs font-bold text-lime">Most popular</span>}
                <h2 className="text-2xl font-bold">{t.name}</h2>
                <p className="mt-4 font-display text-5xl font-extrabold">{t.price}</p>
                <p className={`text-sm ${t.featured ? "text-ink-soft" : "text-white/60"}`}>{t.note}</p>
                <p className={`mt-5 ${t.featured ? "text-ink-soft" : "text-white/75"}`}>{t.blurb}</p>
                <ul className="mt-6 space-y-2.5 text-[15px]">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2.5"><span aria-hidden="true" className={`mt-2 h-1.5 w-1.5 flex-none rounded-full ${t.featured ? "bg-ink" : "bg-lime"}`} />{f}</li>
                  ))}
                </ul>
                <Link href="#book" className={`btn mt-8 ${t.featured ? "bg-ink text-white hover:bg-brand" : "bg-white text-ink hover:bg-lime"}`}>Book a consultation <Arrow /></Link>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/50">Timelines vary with scope. The consultation sets an accurate one for your project.</p>
        </div>
      </section>

      <section className="wrap grid gap-12 py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Questions</h2>
          <figure className="card mt-8 p-7">
            <blockquote className="leading-relaxed text-ink-soft">&ldquo;{quote.quote}&rdquo;</blockquote>
            <figcaption className="mt-4 text-sm"><strong>{quote.author}</strong> <span className="text-ink-muted">· {quote.company}</span></figcaption>
          </figure>
        </div>
        <Faq items={MVP_FAQS} />
      </section>

      <section id="book" className="bg-white py-20">
        <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Book your MVP consultation</h2>
            <p className="mt-4 text-lg text-ink-muted">A free 30-minute call. Bring the idea; we&apos;ll bring a plan, a timeline and a price.</p>
            <p className="mt-6 text-ink-soft">Prefer email? <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          </div>
          <Calendly />
        </div>
      </section>
    </>
  );
}
