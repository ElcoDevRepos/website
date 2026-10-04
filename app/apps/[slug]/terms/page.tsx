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
    title: `${e.project.name} Terms of Use`,
    description: `The terms for using ${e.project.name}, an app by Elco Dev.`,
    alternates: { canonical: `${appPath(e.project.slug)}/terms` },
  };
}

export default async function TermsPage({ params }: Props) {
  const e = appEntryBySlug((await params).slug);
  if (!e?.page.legal) notFound();
  const { project: p, page } = e;
  const legal = page.legal!;
  const base = appPath(p.slug);
  const name = p.name;
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Apps", path: "/apps" }, { name, path: base }, { name: "Terms of Use", path: `${base}/terms` }])} />
      <AppLegalPage entry={e} kind="terms" title={`${name} Terms of Use`}>
        <p className="text-ink-muted">Last updated {legal.updated}</p>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">
          These terms cover your use of {name}, made by Elco Dev, LLC (&ldquo;we&rdquo;). By using the app you agree to them. If you got the app from the Apple App Store, Apple&apos;s{" "}
          <a className="text-brand underline-offset-4 hover:underline" href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Licensed Application End User License Agreement</a> also applies; if you got it from Google Play, the{" "}
          <a className="text-brand underline-offset-4 hover:underline" href="https://play.google.com/about/play-terms/">Google Play Terms of Service</a> also apply.
        </p>
        <Sections
          items={[
            {
              h: "Subscriptions and purchases",
              p: `${legal.purchases} Prices are shown in the app before you buy. Subscriptions renew automatically at the end of each period unless cancelled at least 24 hours before it ends; manage or cancel them in your App Store or Google Play account settings. Free trials convert to a paid subscription unless cancelled before they end. One-time purchases unlock their content for as long as the app is offered. Refunds are handled by Apple or Google under their policies.`,
            },
            { h: "Using the app", p: "Use the app lawfully and respectfully, and never put yourself or others at risk while using it. You keep ownership of everything you create in the app." },
            { h: "No warranty", p: "The app is provided \"as is\" without warranties of any kind. To the extent the law allows, we aren't liable for indirect or consequential damages arising from your use of the app." },
            { h: "Changes", p: "We may update these terms; the date above shows the latest version. Continuing to use the app after a change means you accept it." },
          ]}
        />
        <Contact email={legal.contact} />
      </AppLegalPage>
    </>
  );
}
