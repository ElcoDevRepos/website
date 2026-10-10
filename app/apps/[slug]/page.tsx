import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Arrow, Breadcrumbs, StoreButtons, Tag } from "@/components/ui";
import { APP_ENTRIES, appEntryBySlug, appPath } from "@/lib/apps";
import { breadcrumbLd } from "@/lib/ld";
import { SITE, type Project } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return APP_ENTRIES.map((e) => ({ slug: e.project.slug }));
}

const host = (url: string) => url.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, "");
/** The app's own site, when it isn't this page (apps that keep a domain, or a web app). */
const ownSite = (p: Project) => (p.links.site && !p.links.site.startsWith(`${SITE.url}/apps/`) ? p.links.site : undefined);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const e = appEntryBySlug((await params).slug);
  if (!e) return {};
  const { project: p, page } = e;
  if (page.landing)
    return {
      title: { absolute: page.landing.title },
      description: page.landing.meta,
      alternates: { canonical: appPath(p.slug) },
      openGraph: { title: page.landing.title, description: page.landing.meta, url: appPath(p.slug), images: [{ url: p.phones?.[0] ?? p.image }] },
    };
  const where = p.category === "Web game" ? "free in your browser" : p.platforms.filter((x) => x === "iOS" || x === "Android").join(" and ");
  return {
    title: `${p.name}: ${p.summary.replace(/\.$/, "")}`.slice(0, 70),
    description: `${p.summary} ${p.name} is ${where ? `${where}, ` : ""}made by Elco Dev.`,
    alternates: { canonical: appPath(p.slug) },
    openGraph: { title: p.name, description: p.summary, url: appPath(p.slug), images: [{ url: p.phones?.[0] ?? p.image }] },
  };
}

function appLd(p: Project) {
  const url = `${SITE.url}${appPath(p.slug)}`;
  const isWeb = p.category === "Web game";
  return {
    "@context": "https://schema.org",
    "@type": isWeb ? "WebApplication" : "MobileApplication",
    "@id": `${url}#app`,
    name: p.name,
    description: p.description,
    url,
    image: `${SITE.url}${p.icon ?? p.image}`,
    applicationCategory: isWeb ? "GameApplication" : "LifestyleApplication",
    operatingSystem: isWeb ? "Web" : p.platforms.filter((x) => x === "iOS" || x === "Android").join(", "),
    publisher: { "@id": `${SITE.url}/#organization` },
    author: { "@id": `${SITE.url}/#organization` },
    sameAs: [p.links.appStore, p.links.googlePlay, ownSite(p)].filter(Boolean),
    ...(p.links.appStore || p.links.googlePlay || isWeb ? { offers: { "@type": "Offer", price: 0, priceCurrency: "USD" } } : {}),
  };
}

export default async function AppPage({ params }: Props) {
  const e = appEntryBySlug((await params).slug);
  if (!e) notFound();
  const { project: p, page } = e;
  const base = appPath(p.slug);
  const crumbs = [{ name: "Home", path: "/" }, { name: "Apps", path: "/apps" }, { name: p.name, path: base }];
  const phones = p.phones ?? [];
  const site = ownSite(p);
  const hasStore = Boolean(p.links.appStore || p.links.googlePlay);
  const platforms = p.platforms.join(" · ");

  return (
    <>
      <JsonLd
        data={[
          appLd(p),
          breadcrumbLd(crumbs),
          ...(page.landing
            ? [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.landing.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }]
            : []),
        ]}
      />
      <article>
        <header className="wrap pt-10 sm:pt-14">
          <Breadcrumbs items={crumbs} />
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex items-center gap-4">
                {p.icon && <Image src={p.icon} alt="" width={72} height={72} priority className="h-[72px] w-[72px] rounded-[1.4rem] shadow-md" />}
                <p className="eyebrow">An Elco Dev app · {platforms}</p>
              </div>
              <h1 className="mt-5 text-5xl font-extrabold leading-[1.02] sm:text-6xl">{p.name}</h1>
              {page.landing ? (
                <>
                  <p className="mt-4 text-2xl font-semibold text-ink">{page.landing.hero.h1}</p>
                  <p className="mt-4 text-xl leading-relaxed text-ink-soft">{page.landing.hero.lead}</p>
                </>
              ) : (
                <p className="mt-5 text-xl leading-relaxed text-ink-soft">{p.summary}</p>
              )}
              <div className="mt-7 flex flex-wrap items-center gap-2">
                <StoreButtons links={p.links} name={p.name} />
                {page.external && (
                  <a href={page.external.url} className={hasStore ? "btn-ghost !py-2 text-sm" : "btn-primary !py-2.5 text-sm"}>
                    {page.external.label} <Arrow />
                  </a>
                )}
                {page.landing?.hero.secondaryCta ? (
                  <a href={`${base}${page.landing.hero.secondaryCta.path}`} className="btn-ghost !py-2 text-sm">
                    {page.landing.hero.secondaryCta.label} <Arrow />
                  </a>
                ) : (
                  page.content && (
                    <a href="#web" className="btn-ghost !py-2 text-sm">
                      {page.content.title} <Arrow />
                    </a>
                  )
                )}
              </div>
              {p.note && <p className="mt-3 text-sm text-ink-muted">{p.note}</p>}
              {page.landing?.hero.note && <p className="mt-1 text-sm text-ink-muted">{page.landing.hero.note}</p>}
            </div>
            {phones.length ? (
              <div className="relative mx-auto flex h-[460px] w-full max-w-md items-start justify-center gap-4" aria-hidden="true">
                {phones.slice(0, 2).map((src, i) => (
                  <PhoneFrame key={src} src={src} alt="" priority className={`w-[46%] ${i === 1 ? "mt-12" : ""}`} />
                ))}
              </div>
            ) : (
              <div className="relative aspect-[1200/630] overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-[0_30px_60px_-30px_rgba(11,15,26,0.35)]">
                <Image src={p.image} alt={`${p.name}`} fill priority sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
              </div>
            )}
          </div>
        </header>

        {page.content && (
          <section id="web" className="wrap scroll-mt-24 pt-20">
            <div className="max-w-3xl">
              <p className="eyebrow">Free on the web</p>
              <h2 className="mt-3 text-4xl font-bold leading-[1.05]">{page.content.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">{page.content.lead}</p>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.content.sections.map((s) => (
                <li key={s.path}>
                  {/* Plain <a>: these pages are served by the app's own site, not this Next.js app. */}
                  <a href={`${base}${s.path}`} className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-6 transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(11,15,26,0.35)]">
                    <span className="flex items-center justify-between gap-3 text-lg font-bold">
                      {s.label}
                      <span className="text-ink-muted transition-transform group-hover:translate-x-0.5"><Arrow /></span>
                    </span>
                    <span className="mt-2 text-[15px] leading-relaxed text-ink-muted">{s.blurb}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="wrap grid gap-12 py-20 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <h2 className="text-3xl font-bold">About {p.name}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{p.description}</p>
            <h2 className="mt-12 text-3xl font-bold">Features</h2>
            {page.landing ? (
              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                {page.landing.features.map((f) => (
                  <div key={f.h}>
                    <h3 className="text-lg font-bold">{f.h}</h3>
                    <p className="mt-2 leading-relaxed text-ink-soft">{f.p}</p>
                  </div>
                ))}
              </div>
            ) : (
            <ul className="mt-5 space-y-3">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-lg text-ink-soft">
                  <span aria-hidden="true" className="mt-2.5 h-2 w-2 flex-none rounded-full bg-brand" />
                  {h}
                </li>
              ))}
            </ul>
            )}
            {page.landing?.plans && (
              <>
                <h2 className="mt-12 text-3xl font-bold">Plans</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {page.landing.plans.map((pl) => (
                    <div key={pl.name} className="rounded-2xl bg-white p-5 ring-1 ring-ink/10">
                      <h3 className="font-bold">{pl.name}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{pl.text}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
            {phones.length > 2 && (
              <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-6">
                {phones.map((src, i) => (
                  <PhoneFrame key={src} src={src} alt={`${p.name} screenshot ${i + 1}`} sizes="(min-width: 1024px) 220px, 30vw" className="border-[4px]" />
                ))}
              </div>
            )}
            {page.landing && (
              <>
                <h2 className="mt-12 text-3xl font-bold">Questions</h2>
                <div className="mt-5 space-y-3">
                  {page.landing.faq.map((f) => (
                    <details key={f.q} className="rounded-2xl bg-white p-5 ring-1 ring-ink/10">
                      <summary className="cursor-pointer font-semibold">{f.q}</summary>
                      <p className="mt-3 leading-relaxed text-ink-soft">{f.a}</p>
                    </details>
                  ))}
                </div>
                {page.landing.disclaimer && <p className="mt-8 text-sm leading-relaxed text-ink-muted">{page.landing.disclaimer}</p>}
              </>
            )}
          </div>
          <aside className="h-fit space-y-8 rounded-3xl bg-white p-8 ring-1 ring-ink/10">
            <div id="get" className="scroll-mt-24">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-muted">{p.category === "Web game" ? "Play" : "Get the app"}</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                <StoreButtons links={p.links} name={p.name} />
                {page.external && !hasStore && (
                  <a href={page.external.url} className="btn-primary !py-2 text-sm">{page.external.label} <Arrow /></a>
                )}
              </div>
              {p.note && <p className="mt-3 text-sm text-ink-muted">{p.note}</p>}
              {site && hasStore && (
                <a href={site} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">{host(site)} <Arrow /></a>
              )}
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-muted">Platforms</h2>
              <div className="mt-3 flex flex-wrap gap-1.5">{p.platforms.map((x) => <Tag key={x} tone="brand">{x}</Tag>)}</div>
            </div>
            {page.legal && (
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-muted">Help and policies</h2>
                <ul className="mt-3 space-y-2 text-[15px]">
                  <li><Link href={`${base}/support`} className="font-medium hover:text-brand">Support</Link></li>
                  <li><Link href={`${base}/privacy`} className="font-medium hover:text-brand">Privacy policy</Link></li>
                  <li><Link href={`${base}/terms`} className="font-medium hover:text-brand">Terms of use</Link></li>
                </ul>
              </div>
            )}
            <Link href={`/work/${p.slug}`} className="flex items-center justify-between rounded-2xl bg-paper-deep p-4 text-sm font-semibold hover:bg-brand-soft">
              How we built it <Arrow />
            </Link>
          </aside>
        </div>
      </article>
      <CtaBand title="Want an app like this?" body="Elco Dev builds and launches iOS, Android and web apps for clients, the same way we run our own. Book a free 30-minute call." />
    </>
  );
}
