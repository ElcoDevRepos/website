import type { Metadata } from "next";
import { Calendly } from "@/components/Calendly";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/ld";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact: Book a Free Consultation",
  description: "Book a free 30-minute consultation with Elco Dev about your app, platform or website, or email austin@elcodev.com. Nashville, TN.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]), { "@context": "https://schema.org", "@type": "ContactPage", url: `${SITE.url}/contact`, about: { "@id": `${SITE.url}/#organization` } }]} />
      <section className="wrap grid gap-12 py-14 sm:py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 text-5xl font-extrabold leading-[1.02] sm:text-6xl">
            Let&apos;s talk about <span className="font-serif font-normal italic text-brand">your project</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Book a free 30-minute consultation. You&apos;ll get an honest take on scope, the right technology, a timeline and a budget estimate, with no pressure.
          </p>
          <ul className="mt-8 space-y-3 text-ink-soft">
            {["Project scope assessment", "Technology recommendations", "Timeline and budget estimate", "A plan for launch"].map((x) => (
              <li key={x} className="flex gap-3"><span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-brand" />{x}</li>
            ))}
          </ul>
          <address className="mt-10 space-y-2 not-italic">
            <a href={`mailto:${SITE.email}`} className="block text-lg font-semibold hover:text-brand">{SITE.email}</a>
            <a href={`tel:${SITE.phone}`} className="block text-lg font-semibold hover:text-brand">{SITE.phoneDisplay}</a>
            <span className="block text-ink-muted">Nashville, Tennessee · Monday to Friday, 9am to 5pm Central</span>
          </address>
        </div>
        <Calendly />
      </section>
    </>
  );
}
