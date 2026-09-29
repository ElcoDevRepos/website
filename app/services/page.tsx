import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Arrow } from "@/components/ui";
import { breadcrumbLd, serviceLd } from "@/lib/ld";
import { SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services: Mobile Apps, Web Apps & SaaS, Websites",
  description: "Elco Dev builds iOS and Android apps, web apps and SaaS platforms, APIs and websites, and adds experienced developers to existing teams. Nashville, TN.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]), ...SERVICES.map(serviceLd)]} />
      <section className="wrap pb-10 pt-14 sm:pt-20">
        <p className="eyebrow">Services</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1.02] sm:text-6xl">
          Software for the way <span className="font-serif font-normal italic text-brand">your business works</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-muted">One small team from the first call to launch and beyond.</p>
      </section>
      <section className="wrap grid gap-5 pb-10 md:grid-cols-2">
        {SERVICES.map((s, i) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="group card flex flex-col p-8 transition-colors hover:border-ink/30">
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
      <CtaBand />
    </>
  );
}
