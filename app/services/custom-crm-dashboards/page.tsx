import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendly } from "@/components/Calendly";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { RoiEstimate } from "@/components/RoiEstimate";
import { Arrow, Breadcrumbs, SectionHead, Tag } from "@/components/ui";
import { breadcrumbLd, faqLd, serviceLd } from "@/lib/ld";
import { CRM_PAGE, MVP_TIERS, SITE, TESTIMONIALS, projectBySlug, serviceBySlug } from "@/lib/site";

/** The CRM / internal tools / KPI dashboards service has its own landing page; the other services share /services/[slug]. */
const s = serviceBySlug(CRM_PAGE.slug)!;
const path = `/services/${s.slug}`;

export const metadata: Metadata = {
  title: { absolute: s.title },
  description: s.metaDescription,
  alternates: { canonical: path },
  openGraph: { title: s.title, description: s.metaDescription, url: path },
};

export default function CrmPage() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: s.name, path }];
  const cases = CRM_PAGE.cases.map((c) => ({ ...c, p: projectBySlug(c.project)! }));
  const mvp = MVP_TIERS.find((t) => t.featured)!;
  const quote = TESTIMONIALS.find((t) => t.company === "Laurel Medical")!;
  return (
    <>
      <JsonLd data={[serviceLd(s), faqLd(s.faqs), breadcrumbLd(crumbs)]} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full bg-brand/10 blur-3xl" />
        <div className="wrap relative pb-16 pt-10 sm:pt-14">
          <Breadcrumbs items={crumbs} />
          <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="eyebrow">Custom CRMs · internal tools · KPI dashboards</p>
              <h1 className="mt-4 text-5xl font-extrabold leading-[1.02] sm:text-6xl">
                Software built around <span className="font-serif font-normal italic text-brand">how your business runs.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink-soft">{s.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#book" className="btn-primary">Book a free workflow call <Arrow /></Link>
                <Link href="#work" className="btn-ghost">See what we&apos;ve built</Link>
              </div>
            </div>
            <div className="card p-7">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-muted">A good fit if you</h2>
              <ul className="mt-4 space-y-3 text-ink-soft">
                {CRM_PAGE.fit.map((x) => (
                  <li key={x} className="flex gap-3"><span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-brand" />{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="border-y border-ink/10 bg-white py-20">
        <div className="wrap">
          <SectionHead eyebrow="Sound familiar?" title="Where the time and money leak out" lead="Most teams we talk to aren't short on software. They're short on one place that matches how the work actually gets done." />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CRM_PAGE.problems.map((x) => (
              <li key={x.title} className="rounded-3xl bg-paper p-7 ring-1 ring-ink/5">
                <h3 className="text-xl font-bold">{x.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{x.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What we build */}
      <section className="py-20">
        <div className="wrap">
          <SectionHead eyebrow="What we build" title={<>One system, <span className="font-serif font-normal italic">shaped to your workflow</span></>} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CRM_PAGE.builds.map((b, i) => (
              <div key={b.title} className="card p-7">
                <span className="font-display text-sm font-bold text-brand">0{i + 1}</span>
                <h3 className="mt-3 text-2xl font-bold">{b.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{b.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">{s.stack.map((t) => <Tag key={t} tone="brand">{t}</Tag>)}</div>
        </div>
      </section>

      {/* Client builds */}
      <section id="work" className="scroll-mt-24 bg-ink py-24 text-white">
        <div className="wrap">
          <SectionHead
            dark
            eyebrow="Client builds"
            title={<>Real operations, <span className="font-serif font-normal italic text-lime">running on our software</span></>}
            lead="What each system does and the manual work it was built to take over."
          />
          <div className="mt-14 space-y-6">
            {cases.map(({ p, ...c }) => (
              <article key={p.slug} className="grid overflow-hidden rounded-3xl bg-white/[0.06] ring-1 ring-white/10 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative aspect-[16/10] bg-white/5 lg:aspect-auto lg:min-h-[22rem]">
                  <Image src={p.image} alt={`${p.name} screenshot`} fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover object-top" />
                </div>
                <div className="p-7 sm:p-9">
                  <p className="text-sm text-white/60">{c.who}</p>
                  <h3 className="mt-1 text-3xl font-bold">{p.name}</h3>
                  <p className="mt-3 leading-relaxed text-white/75">{c.what}</p>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-lime">Work it takes over</h4>
                      <ul className="mt-3 space-y-2 text-[15px] text-white/80">
                        {c.replaces.map((x) => (
                          <li key={x} className="flex gap-2.5"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-lime" />{x}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-lime">What it makes visible</h4>
                      <ul className="mt-3 space-y-2 text-[15px] text-white/80">
                        {c.visible.map((x) => (
                          <li key={x} className="flex gap-2.5"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-lime" />{x}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {c.results && c.results.length > 0 && (
                    <dl className="mt-6 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
                      {c.results.map((r) => (
                        <div key={r.label}>
                          <dt className="text-sm text-white/60">{r.label}</dt>
                          <dd className="font-display text-2xl font-bold text-lime">{r.value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                  <div className="mt-7 flex flex-wrap items-center gap-2">
                    {p.tech.slice(0, 4).map((t) => <Tag key={t} tone="dark">{t}</Tag>)}
                    <Link href={`/work/${p.slug}`} className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-lime hover:text-white">
                      {p.name} project <Arrow />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <figure className="mt-10 max-w-3xl">
            <blockquote className="font-serif text-2xl italic leading-snug text-white/90">&ldquo;{quote.quote}&rdquo;</blockquote>
            <figcaption className="mt-4 text-sm text-white/60">{quote.author} · {quote.company}</figcaption>
          </figure>
        </div>
      </section>

      {/* ROI */}
      <section className="py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHead eyebrow="What it's worth" title="Put a number on the manual work" />
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-muted">
              <p>Custom software pays for itself when it gives people back hours, catches the jobs and invoices that slip, or shows a problem while there&apos;s still time to fix it.</p>
              <p>Plug in your own numbers. On the first call we&apos;ll work out where the hours really go, and we measure the same things again after launch, so you can see the before and after.</p>
            </div>
          </div>
          <RoiEstimate />
        </div>
      </section>

      {/* Process + pricing */}
      <section className="bg-white py-24">
        <div className="wrap">
          <SectionHead eyebrow="How it works" title="From your spreadsheet to a system your team uses" />
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {CRM_PAGE.process.map((x, i) => (
              <li key={x.title} className="rounded-3xl bg-paper p-7 ring-1 ring-ink/5">
                <span className="font-display text-4xl font-extrabold text-brand">0{i + 1}</span>
                <h3 className="mt-4 text-xl font-bold">{x.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{x.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-3xl bg-lime p-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold">Pricing</h3>
              <p className="mt-2 text-ink-soft">{CRM_PAGE.pricing(mvp.price)}</p>
            </div>
            <Link href="/mvp" className="btn-primary shrink-0">See MVP pricing <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="wrap grid gap-12 py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHead eyebrow="FAQ" title="Questions before a custom build" lead={<>Something else? Email <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</>} />
        <Faq items={s.faqs} />
      </section>

      {/* Book */}
      <section id="book" className="scroll-mt-24 bg-white py-20">
        <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Show us the spreadsheet</h2>
            <p className="mt-4 text-lg text-ink-muted">A free 30-minute call. Walk us through how the work moves today, and you&apos;ll leave with what we&apos;d build first, a timeline and a price range.</p>
            <p className="mt-6 text-ink-soft">Prefer email? <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          </div>
          <div className="space-y-8">
            <Calendly />
            <LeadForm page={path} />
          </div>
        </div>
      </section>
    </>
  );
}
