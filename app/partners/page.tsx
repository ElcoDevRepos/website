import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PartnerForm } from "@/components/PartnerForm";
import { breadcrumbLd, faqLd } from "@/lib/ld";

export const metadata: Metadata = {
  title: "Partner Program: Referral, White-Label and Integration",
  description: "Partner with Elco Dev: earn 10% of collected fees (15% on projects over $50k) on referred clients' first projects, resell our development under your brand, or build integrations together.",
  alternates: { canonical: "/partners" },
};

const PROGRAMS = [
  { title: "Referral partner", body: "Earn 10% of collected fees on the first project for each client you refer who needs software built, or 15% if that project is over $50k.", points: ["No upfront cost", "Paid within 15 days of each client payment", "Credit for 12 months from your intro email", "Open to US citizens only"] },
  { title: "Reseller partner", body: "Sell our development services under your brand while we handle the technical delivery.", points: ["White-label delivery", "Wholesale pricing", "A direct line to the lead developer"] },
  { title: "Integration partner", body: "Offer custom integrations and APIs for your software platform, built and maintained by us.", points: ["Custom API development", "Ongoing maintenance"] },
  { title: "Strategic alliance", body: "A long-term partnership to serve clients with complementary services.", points: ["Joint marketing", "Shared case studies"] },
];

const REFERRAL_STEPS = [
  { title: "Introduce us by email", body: "Send a short intro with the client and us both on the email. That email starts your 12-month credit window." },
  { title: "We scope and quote", body: "We talk to the client, agree the scope and send a fixed quote before any work starts. You stay in the loop as much as you like." },
  { title: "You get paid as they pay", body: "When the client pays us, we pay your commission within 15 days, in USD. We need a W-9 before the first payment." },
];

const EARNINGS = [
  { project: "$8,000 website or small app", rate: "10%", commission: "$800" },
  { project: "$20,000 custom app", rate: "10%", commission: "$2,000" },
  { project: "$60,000 business system", rate: "15% (over $50k)", commission: "$9,000" },
];

const FAQS = [
  { q: "Who can become an Elco Dev partner?", a: "Agencies, software companies, design firms, consultants and well-connected individuals whose clients or contacts need software built. Referral partners must be US citizens." },
  { q: "Can I be a referral partner outside the US?", a: "Referral partners must be US citizens. The clients you refer can be anywhere, including Europe." },
  { q: "How much do referral partners earn?", a: "10% of the fees we collect on a referred client's first project, or 15% if that project is over $50,000 (the 15% applies to the whole project). Commissions are paid in USD within 15 days of each client payment, a paid commission is never clawed back, and we need a W-9 before the first payment." },
  { q: "How do you know a referral came from me?", a: "Introduce the client to us by email (a cc intro is perfect). If they sign a first project with us within 12 months of that email, the referral is yours. The agreement is non-exclusive, and either side can end it with 30 days' notice." },
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
        <p className="mt-4 max-w-2xl text-ink-soft">
          What your clients get: fixed quotes before work starts, MVPs from $7,000, and <Link href="/care-plans" className="underline decoration-brand/40 underline-offset-4 hover:text-ink">care plans from $129/month</Link> after launch. <Link href="/case-studies" className="underline decoration-brand/40 underline-offset-4 hover:text-ink">See the case studies</Link> you can share with them.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#apply" className="btn-primary">Apply to partner</a>
          <a href="#how-referrals-work" className="btn-ghost">How referrals work</a>
        </div>
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
      <section id="how-referrals-work" className="wrap pb-20">
        <h2 className="text-3xl font-bold sm:text-4xl">How referrals work</h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {REFERRAL_STEPS.map((step, i) => (
            <li key={step.title} className="card p-7">
              <p className="text-sm font-semibold text-brand">Step {i + 1}</p>
              <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{step.body}</p>
            </li>
          ))}
        </ol>
        <h3 className="mt-14 text-2xl font-bold">What a referral can earn</h3>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full max-w-3xl text-left text-sm">
            <thead><tr className="border-b border-ink/10 text-ink-soft"><th className="py-3 pr-6 font-semibold">Referred client&apos;s first project</th><th className="py-3 pr-6 font-semibold">Rate</th><th className="py-3 font-semibold">Your commission</th></tr></thead>
            <tbody>
              {EARNINGS.map((r) => (
                <tr key={r.project} className="border-b border-ink/10"><td className="py-3 pr-6">{r.project}</td><td className="py-3 pr-6">{r.rate}</td><td className="py-3 font-semibold">{r.commission}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 max-w-2xl text-sm text-ink-soft">Examples only. Commission is paid on fees we actually collect, within 15 days of each client payment.</p>
      </section>
      <section id="apply" className="bg-white py-20">
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
