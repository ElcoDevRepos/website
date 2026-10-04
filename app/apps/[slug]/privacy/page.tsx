import type { Metadata } from "next";
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
    title: `${e.project.name} Privacy Policy`,
    description: `How ${e.project.name}, an app by Elco Dev, handles your data.`,
    alternates: { canonical: `${appPath(e.project.slug)}/privacy` },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const e = appEntryBySlug((await params).slug);
  if (!e?.page.legal) notFound();
  const { project: p, page } = e;
  const legal = page.legal!;
  const base = appPath(p.slug);
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Apps", path: "/apps" }, { name: p.name, path: base }, { name: "Privacy", path: `${base}/privacy` }])} />
      <AppLegalPage entry={e} kind="privacy" title={`${p.name} Privacy Policy`}>
        <p className="text-ink-muted">Last updated {legal.updated}</p>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">{legal.privacyIntro}</p>
        <Sections items={legal.privacy} />
        <Contact email={legal.contact} />
      </AppLegalPage>
    </>
  );
}
