import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppLegalPage, Contact, Sections } from "@/components/AppLegal";
import { JsonLd } from "@/components/JsonLd";
import { LEGAL_APPS, appEntryBySlug, appPath } from "@/lib/apps";
import { breadcrumbLd } from "@/lib/ld";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return LEGAL_APPS.map((e) => ({ slug: e.project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const e = appEntryBySlug((await params).slug);
  if (!e?.page.legal) return {};
  return {
    title: `${e.project.name} Support`,
    description: `Help with ${e.project.name}: contact, restoring purchases, subscriptions and refunds.`,
    alternates: { canonical: `${appPath(e.project.slug)}/support` },
  };
}

export default async function SupportPage({ params }: Props) {
  const e = appEntryBySlug((await params).slug);
  if (!e?.page.legal) notFound();
  const { project: p, page } = e;
  const legal = page.legal!;
  const base = appPath(p.slug);
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Apps", path: "/apps" }, { name: p.name, path: base }, { name: "Support", path: `${base}/support` }])} />
      <AppLegalPage entry={e} kind="support" title={`${p.name} Support`}>
        <a href={`mailto:${legal.contact}?subject=${encodeURIComponent(p.name)}`} className="btn-primary">Email {legal.contact}</a>
        <Sections items={legal.support} />
        <section className="mt-9">
          <h2 className="text-2xl font-bold">Privacy</h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            See the <Link className="font-semibold text-brand underline-offset-4 hover:underline" href={`${base}/privacy`}>{p.name} privacy policy</Link> for what the app stores and where.
          </p>
        </section>
        <Contact email={legal.contact} />
      </AppLegalPage>
    </>
  );
}
