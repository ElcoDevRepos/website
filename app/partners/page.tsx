import type { Metadata } from "next";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PartnerForm } from "@/components/PartnerForm";
import { breadcrumbLd, faqLd } from "@/lib/ld";

export const metadata: Metadata = {
  title: "Partner Program: Referral, White-Label and Integration",
  description: "Partner with Elco Dev: earn 10–20% commission on referred projects, resell our development under your brand, or build integrations together.",
  alternates: { canonical: "/partners" },
};

const PROGRAMS = [
  { title: "Referral partner", body: "Earn a 10–20% commission on the first project for clients you refer who need software built.", points: ["No upfront cost", "Simple referral tracking"] },
  { title: "Reseller partner", body: "Sell our development services under your brand while we handle the technical delivery.", points: ["White-label delivery", "Wholesale pricing", "Dedicated support"] },
  { title: "Integration partner", body: "Offer custom integrations and APIs for your software platform, built and maintained by us.", points: ["Custom API development", "Ongoing maintenance"] },
  { title: "Strategic alliance", body: "A long-term partnership to serve clients with complementary services.", points: ["Joint marketing", "Shared case studies"] },
];

const FAQS = [
  { q: "Who can become an Elco Dev partner?", a: "Established businesses in tech, consulting and adjacent fields: software companies, agencies, design firms and consultants whose clients need software built." },
  { q: "How much do referral partners earn?", a: "Referral partners earn a 10–20% commission on the first project for each client they refer." },
  { q: "Can you work under our brand?", a: "Yes. Reseller partners sell our development under their own brand while we handle delivery." },
];

export default function PartnersPage() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([{ name: "Home", path: "/" }, { name: "Partners", path: "/partners" }]), faqLd(FAQS)]} />
      <section className="wrap pb-12 pt-14 sm:pt-20">
        <p className="eyebrow">Partner program</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1.02] sm:text-6xl">
          Grow with a development team <span className="font-serif font-normal italic text-brand">behind you</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-muted">For agencies, software companies and consultants whose clients need apps, platforms or websites built.</p>
      </section>
      <section className="wrap grid gap-5 pb-20 md:grid-cols-2 lg:grid-cols-4">
        {PROGRAMS.map((p) => (
          <div key={p.title} className="card p-7">
            <h2 className="text-xl font-bold">{p.title}</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">{p.body}</p>
            <ul className="mt-5 space-y-2 text-sm text-ink-soft">
              {p.points.map((x) => <li key={x} className="flex gap-2"><span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand" />{x}</li>)}
            </ul>
          </div>
        ))}
      </section>
      <section className="bg-white py-20">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Apply to partner</h2>
            <p className="mt-4 text-lg text-ink-muted">Tell us about your business and we&apos;ll follow up.</p>
            <div className="mt-10"><Faq items={FAQS} /></div>
          </div>
          <PartnerForm />
        </div>
      </section>
    </>
  );
}
