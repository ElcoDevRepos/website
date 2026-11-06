import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { Arrow, Breadcrumbs } from "@/components/ui";
import { INSIGHTS, WORKSHEET, insightBySlug, type Block } from "@/lib/insights";
import { breadcrumbLd, faqLd } from "@/lib/ld";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = insightBySlug((await params).slug);
  if (!a) return {};
  return {
    title: { absolute: a.seoTitle },
    description: a.description,
    alternates: { canonical: `/insights/${a.slug}` },
    openGraph: { type: "article", title: a.seoTitle, description: a.description, publishedTime: a.published, modifiedTime: a.updated },
  };
}

function render(b: Block, i: number) {
  if ("h2" in b) return <h2 key={i} className="mt-12 text-2xl font-bold sm:text-3xl">{b.h2}</h2>;
  if ("p" in b) return <p key={i} className="mt-5 text-lg leading-relaxed text-ink-soft">{b.p}</p>;
  if ("ul" in b)
    return (
      <ul key={i} className="mt-5 space-y-3">
        {b.ul.map((x) => (
          <li key={x} className="flex gap-3 text-lg leading-relaxed text-ink-soft">
            <span aria-hidden="true" className="mt-2.5 h-2 w-2 flex-none rounded-full bg-brand" />
            {x}
          </li>
        ))}
      </ul>
    );
  return (
    <div key={i} className="mt-6 overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
        <thead>
          <tr>{b.table.head.map((h) => <th key={h} scope="col" className="border-b-2 border-ink/20 py-2 pr-4 font-semibold">{h}</th>)}</tr>
        </thead>
        <tbody>
          {b.table.rows.map((r) => (
            <tr key={r[0]}>{r.map((c, j) => <td key={j} className={`border-b border-ink/10 py-3 pr-4 align-top ${j === 0 ? "font-semibold" : "text-ink-soft"}`}>{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function InsightPage({ params }: Props) {
  const a = insightBySlug((await params).slug);
  if (!a) notFound();
  const crumbs = [{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: a.title, path: `/insights/${a.slug}` }];
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            description: a.description,
            datePublished: a.published,
            dateModified: a.updated,
            mainEntityOfPage: `${SITE.url}/insights/${a.slug}`,
            author: { "@type": "Person", name: SITE.founder },
            publisher: { "@id": `${SITE.url}/#organization` },
            image: `${SITE.url}/og-image.png`,
          },
          ...(a.faq?.length ? [faqLd(a.faq)] : []),
        ]}
      />
      <article className="wrap max-w-3xl pb-10 pt-10 sm:pt-14">
        <Breadcrumbs items={crumbs} />
        <p className="eyebrow mt-10">Insights · {a.readMinutes} min read</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl">{a.title}</h1>
        <p className="mt-4 text-sm text-ink-muted">
          By {SITE.founder} · <time dateTime={a.updated}>{new Date(a.updated + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
        </p>
        {a.answer ? (
          <div className="mt-8 rounded-2xl border border-ink/10 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-ink-muted">Short answer</p>
            <p className="mt-2 text-lg leading-relaxed">{a.answer}</p>
          </div>
        ) : null}
        {a.body.map(render)}

        {a.faq?.length ? (
          <section className="mt-14">
            <h2 className="text-2xl font-bold sm:text-3xl">Questions</h2>
            <div className="mt-6"><Faq items={a.faq} /></div>
          </section>
        ) : null}

        {a.product ? (
          <aside className="mt-14 rounded-3xl bg-brand-soft p-7">
            <h2 className="text-xl font-bold">{a.product.name}</h2>
            <p className="mt-2 text-ink-soft">{a.product.blurb}</p>
            <a href={a.product.href} className="btn-primary mt-5">{a.product.cta} <Arrow /></a>
          </aside>
        ) : (
          <aside className="mt-14 rounded-3xl bg-brand-soft p-7">
            <h2 className="text-xl font-bold">Free: {WORKSHEET.title}</h2>
            <p className="mt-2 text-ink-soft">{WORKSHEET.blurb}</p>
            <a href={WORKSHEET.href} download className="btn-primary mt-5">Download the worksheet (PDF) <Arrow /></a>
          </aside>
        )}

        <nav aria-label="Related" className="mt-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-muted">Related</h2>
          <ul className="mt-3 space-y-2">
            {a.related.map((r) => (
              <li key={r.href}><Link href={r.href} className="font-semibold text-brand hover:underline">{r.label}</Link></li>
            ))}
          </ul>
        </nav>
      </article>
      <CtaBand title="Want a fixed quote for your project?" />
    </>
  );
}
