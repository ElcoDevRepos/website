import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Arrow } from "@/components/ui";
import { APP_ENTRIES, appPath } from "@/lib/apps";
import { breadcrumbLd } from "@/lib/ld";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Apps: iPhone, Android and Web Apps by Elco Dev",
  description: "The apps Elco Dev builds and runs itself: Liturgical Living, Paddle Rack, NicDrop, Spotted, Homeshelf, Scripted, Crohn's Food Tracker and more, with store links, support and privacy for each.",
  alternates: { canonical: "/apps" },
};

const storeLabel = (l: { appStore?: string; googlePlay?: string }) =>
  [l.appStore && "App Store", l.googlePlay && "Google Play"].filter(Boolean).join(" · ");

export default function AppsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Apps", path: "/apps" }]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Apps by Elco Dev",
            url: `${SITE.url}/apps`,
            mainEntity: { "@type": "ItemList", itemListElement: APP_ENTRIES.map((e, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE.url}${appPath(e.project.slug)}`, name: e.project.name })) },
          },
        ]}
      />
      <section className="wrap pb-6 pt-14 sm:pt-20">
        <p className="eyebrow">Our apps</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1.02] sm:text-6xl">
          Apps we build <span className="font-serif font-normal italic text-brand">and run ourselves</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-muted">
          {APP_ENTRIES.length} apps of our own in the App Store, Google Play and the browser. Each page has the store links, support and privacy policy for that app.
        </p>
      </section>
      <section className="wrap py-10">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {APP_ENTRIES.map(({ project: p }) => (
            <li key={p.slug}>
              <article className="group card relative flex h-full flex-col overflow-hidden transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(11,15,26,0.35)]">
                <div className="relative flex aspect-[16/10] items-start justify-center overflow-hidden bg-gradient-to-b from-brand-soft to-paper-deep pt-6">
                  {p.phones?.length ? (
                    <PhoneFrame src={p.phones[0]} alt="" sizes="160px" className="w-[42%] border-[4px] transition-transform duration-500 group-hover:-translate-y-1" />
                  ) : (
                    <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    {p.icon && <Image src={p.icon} alt="" width={44} height={44} className="h-11 w-11 rounded-xl shadow-sm" />}
                    <h2 className="text-xl font-bold">
                      <Link href={appPath(p.slug)} className="after:absolute after:inset-0">{p.name}</Link>
                    </h2>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{p.summary}</p>
                  <p className="mt-auto flex items-center justify-between gap-3 pt-5 text-xs font-medium text-ink-soft">
                    <span>{p.category === "Web game" ? "Free in the browser" : storeLabel(p.links) || p.note}</span>
                    <span className="text-ink-muted"><Arrow /></span>
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand title="Want an app of your own?" />
    </>
  );
}
