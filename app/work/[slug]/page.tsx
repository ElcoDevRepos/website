import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ProjectCard } from "@/components/ProjectCard";
import { Arrow, Breadcrumbs, StoreButtons, Tag } from "@/components/ui";
import { breadcrumbLd, projectLd } from "@/lib/ld";
import { PROJECTS, SERVICES, projectBySlug } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = projectBySlug((await params).slug);
  if (!p) return {};
  return {
    title: { absolute: p.seoTitle },
    description: `${p.summary} ${p.kind === "own" ? "Designed, built and run by Elco Dev." : "Built by Elco Dev, a Nashville software studio."}`,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: { title: p.seoTitle, images: [{ url: p.image }] },
  };
}

const KIND = { own: "Built and run by Elco Dev", client: "Client project", build: "Product build" } as const;

export default async function ProjectPage({ params }: Props) {
  const p = projectBySlug((await params).slug);
  if (!p) notFound();
  const crumbs = [{ name: "Home", path: "/" }, { name: "Work", path: "/work" }, { name: p.name, path: `/work/${p.slug}` }];
  const related = PROJECTS.filter((x) => x.slug !== p.slug && x.category === p.category).slice(0, 3);
  const service = SERVICES.find((s) => s.work.includes(p.slug));
  const isApp = p.category === "Mobile app" && p.phones?.length;

  return (
    <>
      <JsonLd data={[projectLd(p), breadcrumbLd(crumbs)]} />
      <article>
        <header className="wrap pt-10 sm:pt-14">
          <Breadcrumbs items={crumbs} />
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex items-center gap-4">
                {p.icon && <Image src={p.icon} alt="" width={64} height={64} className="h-16 w-16 rounded-2xl shadow-sm" />}
                <p className="eyebrow">{KIND[p.kind]} · {p.year}</p>
              </div>
              <h1 className="mt-5 text-5xl font-extrabold leading-[1.02] sm:text-6xl">{p.name}</h1>
              <p className="mt-5 text-xl leading-relaxed text-ink-soft">{p.summary}</p>
              <div className="mt-7 flex flex-wrap items-center gap-2">
                <StoreButtons links={p.links} name={p.name} />
                {p.links.site && (
                  <a href={p.links.site} target="_blank" rel="noopener" className="btn-ghost !py-2 text-sm">
                    {p.links.site.replace(/^https:\/\/(www\.)?/, "")} <Arrow />
                  </a>
                )}
                {p.note && <span className="text-sm text-ink-muted">{p.note}</span>}
              </div>
            </div>
            {isApp ? (
              <div className="relative mx-auto flex h-[460px] w-full max-w-md items-start justify-center gap-4" aria-hidden="true">
                {p.phones!.slice(0, 2).map((src, i) => (
                  <PhoneFrame key={src} src={src} alt="" priority className={`w-[46%] ${i === 1 ? "mt-12" : ""}`} />
                ))}
              </div>
            ) : (
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-[0_30px_60px_-30px_rgba(11,15,26,0.35)]">
                <Image src={p.image} alt={`${p.name} screenshot`} fill priority sizes="(min-width: 1024px) 560px, 100vw" className="object-cover object-top" />
              </div>
            )}
          </div>
        </header>

        <div className="wrap grid gap-12 py-20 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <h2 className="text-3xl font-bold">Overview</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{p.description}</p>
            <h2 className="mt-12 text-3xl font-bold">What we built</h2>
            <ul className="mt-5 space-y-3">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-lg text-ink-soft">
                  <span aria-hidden="true" className="mt-2.5 h-2 w-2 flex-none rounded-full bg-brand" />
                  {h}
                </li>
              ))}
            </ul>
            {isApp && p.phones!.length > 2 && (
              <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-6">
                {p.phones!.map((src, i) => (
                  <PhoneFrame key={src} src={src} alt={`${p.name} screenshot ${i + 1}`} sizes="(min-width: 1024px) 220px, 30vw" className="border-[4px]" />
                ))}
              </div>
            )}
          </div>
          <aside className="h-fit space-y-8 rounded-3xl bg-white p-8 ring-1 ring-ink/10">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-muted">Platforms</h2>
              <div className="mt-3 flex flex-wrap gap-1.5">{p.platforms.map((x) => <Tag key={x} tone="brand">{x}</Tag>)}</div>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-muted">Technology</h2>
              <div className="mt-3 flex flex-wrap gap-1.5">{p.tech.map((x) => <Tag key={x}>{x}</Tag>)}</div>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-muted">Category</h2>
              <p className="mt-2">{p.category}</p>
            </div>
            {service && (
              <Link href={`/services/${service.slug}`} className="flex items-center justify-between rounded-2xl bg-paper-deep p-4 text-sm font-semibold hover:bg-brand-soft">
                {service.name} at Elco Dev <Arrow />
              </Link>
            )}
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section className="wrap pb-8">
          <h2 className="text-3xl font-bold">More {p.category === "Mobile app" ? "apps" : p.category === "Website" ? "websites" : "projects"}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => <ProjectCard key={r.slug} p={r} />)}
          </div>
        </section>
      )}
      <CtaBand title={p.kind === "own" ? "Want an app like this?" : "Want something like this?"} />
    </>
  );
}
