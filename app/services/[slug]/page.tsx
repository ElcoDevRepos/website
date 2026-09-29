import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { ProjectCard } from "@/components/ProjectCard";
import { Arrow, Breadcrumbs, Tag } from "@/components/ui";
import { breadcrumbLd, faqLd, serviceLd } from "@/lib/ld";
import { PROCESS, SERVICES, projectBySlug, serviceBySlug } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = serviceBySlug((await params).slug);
  if (!s) return {};
  return { title: { absolute: s.title }, description: s.metaDescription, alternates: { canonical: `/services/${s.slug}` } };
}

export default async function ServicePage({ params }: Props) {
  const s = serviceBySlug((await params).slug);
  if (!s) notFound();
  const crumbs = [{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: s.name, path: `/services/${s.slug}` }];
  const work = s.work.map(projectBySlug).filter((p): p is NonNullable<typeof p> => !!p);
  return (
    <>
      <JsonLd data={[serviceLd(s), faqLd(s.faqs), breadcrumbLd(crumbs)]} />
      <section className="wrap pb-12 pt-10 sm:pt-14">
        <Breadcrumbs items={crumbs} />
        <p className="eyebrow mt-10">Services</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1.02] sm:text-6xl">{s.name}</h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-ink-soft">{s.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">Book a free call <Arrow /></Link>
          <Link href="/mvp" className="btn-ghost">MVP pricing</Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="wrap grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">What&apos;s included</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {s.includes.map((x) => (
                <li key={x} className="rounded-2xl bg-paper p-5 leading-relaxed text-ink-soft ring-1 ring-ink/5">{x}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Tools we use</h2>
            <div className="mt-8 flex flex-wrap gap-2">{s.stack.map((t) => <Tag key={t} tone="brand">{t}</Tag>)}</div>
            <h2 className="mt-12 text-2xl font-bold">How it works</h2>
            <ol className="mt-5 space-y-4">
              {PROCESS.map((p) => (
                <li key={p.step} className="flex gap-4">
                  <span className="font-display font-bold text-brand">{p.step}</span>
                  <span><strong>{p.title}.</strong> <span className="text-ink-muted">{p.body}</span></span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {work.length > 0 && (
        <section className="wrap py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Related work</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {work.map((p) => <ProjectCard key={p.slug} p={p} />)}
          </div>
        </section>
      )}

      <section className="wrap grid gap-12 pb-8 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="text-3xl font-bold sm:text-4xl">Common questions</h2>
        <Faq items={s.faqs} />
      </section>
      <CtaBand />
    </>
  );
}
