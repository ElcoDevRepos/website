import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ProjectCard } from "@/components/ProjectCard";
import { Arrow, SectionHead, StoreButtons, Tag } from "@/components/ui";
import { faqLd } from "@/lib/ld";
import { CLIENT_LOGOS, FAQS, OWN_APPS, PROCESS, PROJECTS, SERVICES, SITE, STATS, TESTIMONIALS } from "@/lib/site";

const FEATURED = ["taskmerit", "equidesk", "realtime-sports-api", "bookreverb", "peerless-development", "clientping"];

export default function Home() {
  const featured = FEATURED.map((s) => PROJECTS.find((p) => p.slug === s)!).filter(Boolean);
  return (
    <>
      <JsonLd data={faqLd(FAQS)} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-brand/10 blur-3xl" />
        <div className="wrap grid items-center gap-14 pb-20 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20">
          <div>
            <p className="eyebrow">
              <span className="h-2 w-2 rounded-full bg-lime ring-4 ring-lime/30" aria-hidden="true" />
              Nashville software studio · since {SITE.founded}
            </p>
            <h1 className="mt-6 text-5xl font-extrabold leading-[0.98] sm:text-6xl lg:text-7xl">
              We design, build and launch <span className="font-serif font-normal italic text-brand">web and mobile apps.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
              iOS and Android apps, SaaS platforms, APIs and websites for founders and growing businesses. We run apps of our own too, so the launch is part of the job.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">Book a free call <Arrow /></Link>
              <Link href="/work" className="btn-ghost">See our work</Link>
            </div>
            <Link href="#our-apps" className="mt-10 inline-flex max-w-full items-center gap-4 rounded-2xl border border-ink/10 bg-white p-3 pr-5 transition-shadow hover:shadow-md">
              <span className="flex shrink-0 items-center -space-x-2">
                {OWN_APPS.slice(0, 5).map((a) => (
                  <Image key={a.slug} src={a.icon!} alt="" width={40} height={40} className="h-10 w-10 rounded-xl border-2 border-white" />
                ))}
                {OWN_APPS.length > 5 && (
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-white bg-ink text-xs font-semibold text-white">+{OWN_APPS.length - 5}</span>
                )}
              </span>
              <span className="min-w-0 text-sm leading-snug">
                <strong className="block font-semibold">{OWN_APPS.length} apps of our own</strong>
                <span className="text-ink-muted">built and run by us, on iOS and Android</span>
              </span>
            </Link>
          </div>
          <div className="relative mx-auto h-[400px] w-full max-w-[340px] sm:h-[600px] sm:max-w-[460px]" aria-hidden="true">
            <PhoneFrame src="/apps/nicdrop-2.webp" alt="" sizes="(min-width: 640px) 212px, 156px" className="absolute left-0 top-12 w-[46%] -rotate-6" />
            <PhoneFrame src="/apps/starterset-1.webp" alt="" priority sizes="(min-width: 640px) 220px, 163px" className="absolute left-[27%] top-0 z-10 w-[48%]" />
            <PhoneFrame src="/apps/liturgical-living-1.webp" alt="" sizes="(min-width: 640px) 212px, 156px" className="absolute right-0 top-16 w-[46%] rotate-6" />
          </div>
        </div>
      </section>

      {/* Proof */}
      <section aria-label="Clients and numbers" className="border-y border-ink/10 bg-white">
        <div className="wrap py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="eyebrow shrink-0">Teams we&apos;ve built for</p>
            <ul className="flex flex-wrap items-center gap-x-12 gap-y-6">
              {CLIENT_LOGOS.map((c) => (
                <li key={c.name}>
                  <Image src={c.logo} alt={c.name} width={140} height={56} className="h-10 w-auto object-contain opacity-80 grayscale" />
                </li>
              ))}
            </ul>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-ink/10 pt-8 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="text-sm text-ink-muted">{s.label}</dt>
                <dd className="mt-1 font-display text-3xl font-bold">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Our apps */}
      <section id="our-apps" className="bg-ink py-24 text-white">
        <div className="wrap">
          <SectionHead
            dark
            eyebrow="Our own apps"
            title={<>We build apps. <span className="font-serif font-normal italic text-lime">We also run them.</span></>}
            lead="Store listings, subscriptions, analytics, ads and updates: we do it all for our own apps, so yours gets a team that knows what happens after launch."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {OWN_APPS.map((a) => (
              <article key={a.slug} className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/[0.06] ring-1 ring-white/10 transition hover:bg-white/[0.09]">
                <div className="relative flex h-72 items-start justify-center overflow-hidden bg-gradient-to-b from-white/[0.07] to-transparent pt-8">
                  <PhoneFrame src={a.phones![0]} alt={`${a.name} app screenshot`} className="w-44 border-[5px] transition-transform duration-500 group-hover:-translate-y-2" sizes="176px" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <Image src={a.icon!} alt="" width={44} height={44} className="h-11 w-11 rounded-xl" />
                    <div>
                      <h3 className="text-xl font-bold">
                        <Link href={`/work/${a.slug}`} className="after:absolute after:inset-0">{a.name}</Link>
                      </h3>
                      <p className="text-sm text-white/60">{a.platforms.join(" · ")}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/75">{a.summary}</p>
                  <div className="relative z-10 mt-auto flex flex-wrap items-center gap-2 pt-6">
                    <StoreButtons links={a.links} name={a.name} dark />
                    {a.note && <span className="text-sm text-white/60">{a.note}</span>}
                  </div>
                </div>
              </article>
            ))}
            <div className="flex flex-col justify-between rounded-3xl bg-lime p-8 text-ink">
              <p className="font-display text-3xl font-bold leading-tight">Your app could be next.</p>
              <div>
                <p className="mt-4 text-ink-soft">Tell us what you&apos;re building. We&apos;ll show you how we&apos;d take it from idea to the stores.</p>
                <Link href="/contact" className="btn-primary mt-6">Book a free call <Arrow /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="py-24">
        <div className="wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead eyebrow="Selected work" title="Platforms, APIs and websites" lead="SaaS for field-service and equestrian businesses, a live sports data API, marketplaces and lead-generating websites." />
            <Link href="/work" className="btn-ghost shrink-0">All {PROJECTS.length} projects <Arrow /></Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => <ProjectCard key={p.slug} p={p} />)}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-24">
        <div className="wrap">
          <SectionHead eyebrow="Services" title="What we build" lead="From a first MVP to a platform your business runs on, with the same small team from the first call to launch." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group card flex flex-col p-8 transition-colors hover:border-ink/30">
                <span className="font-display text-sm font-bold text-brand">0{i + 1}</span>
                <h3 className="mt-3 text-2xl font-bold">{s.name}</h3>
                <p className="mt-2 text-ink-muted">{s.short}</p>
                <ul className="mt-5 space-y-2 text-[15px] text-ink-soft">
                  {s.includes.slice(0, 3).map((x) => (
                    <li key={x} className="flex gap-2.5"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand" />{x}</li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">Learn more <Arrow /></span>
              </Link>
            ))}
          </div>
          <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-3xl bg-paper-deep p-8 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-bold">Need an MVP fast?</h3>
              <p className="mt-1 text-ink-muted">Product builds start at $7,000, delivered in about 14 days.</p>
            </div>
            <Link href="/mvp" className="btn-brand">See MVP pricing <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24">
        <div className="wrap">
          <SectionHead eyebrow="How we work" title="From first call to launch" />
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((s) => (
              <li key={s.step} className="card p-7">
                <span className="font-display text-4xl font-extrabold text-brand">{s.step}</span>
                <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-paper-deep py-24">
        <div className="wrap">
          <SectionHead eyebrow="Client reviews" title={<>What clients say about <span className="font-serif font-normal italic">working with us</span></>} />
          <div className="mt-12 gap-5 [column-fill:_balance] sm:columns-2 lg:columns-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.author} className="card mb-5 break-inside-avoid p-7">
                <blockquote className="leading-relaxed text-ink-soft">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold text-ink">{t.author}</span>
                  <span className="text-ink-muted"> · {t.company}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <SectionHead eyebrow="About Elco Dev" title="A family-owned studio in Nashville" />
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Elco Dev was founded in {SITE.founded} by {SITE.founder}. We&apos;re a small, family-owned team, so you work directly with the people building your product, not an account manager.
            </p>
            <p>
              Startups and established businesses get the same attention: clear quotes, regular progress updates and quick answers. We&apos;ve delivered more than 50 projects across healthcare, hospitality, field services, real estate, sports and consumer apps.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Family-owned", "Nashville, TN", "Since 2019", "iOS · Android · Web"].map((x) => <Tag key={x}>{x}</Tag>)}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead eyebrow="FAQ" title="Questions people ask before a project" lead={<>Something else? Email <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</>} />
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
