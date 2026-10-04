import Image from "next/image";
import Link from "next/link";
import type { AppEntry, Section } from "@/lib/apps";
import { appPath } from "@/lib/apps";
import { Breadcrumbs } from "./ui";

/** Shared shell for an app's privacy, support and terms pages. */
export function AppLegalPage({ entry, kind, title, children }: { entry: AppEntry; kind: "privacy" | "support" | "terms"; title: string; children: React.ReactNode }) {
  const { project: p } = entry;
  const base = appPath(p.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: p.name, path: base },
    { name: title.replace(`${p.name} `, ""), path: `${base}/${kind}` },
  ];
  const tabs = [
    { k: "privacy", label: "Privacy" },
    { k: "support", label: "Support" },
    { k: "terms", label: "Terms of Use" },
  ] as const;
  return (
    <article className="wrap max-w-3xl py-12 sm:py-16">
      <Breadcrumbs items={crumbs} />
      <div className="mt-8 flex items-center gap-4">
        {p.icon && <Image src={p.icon} alt="" width={56} height={56} className="h-14 w-14 rounded-2xl shadow-sm" />}
        <Link href={base} className="text-sm font-semibold text-ink-muted hover:text-ink">{p.name}</Link>
      </div>
      <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
      <nav aria-label={`${p.name} pages`} className="mt-6 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <Link
            key={t.k}
            href={`${base}/${t.k}`}
            aria-current={t.k === kind ? "page" : undefined}
            className={`rounded-full px-4 py-2 text-sm font-medium ${t.k === kind ? "bg-ink text-paper" : "bg-paper-deep text-ink-soft hover:bg-brand-soft"}`}
          >
            {t.label}
          </Link>
        ))}
      </nav>
      <div className="mt-10">{children}</div>
    </article>
  );
}

export function Sections({ items }: { items: Section[] }) {
  return (
    <>
      {items.map((s) => (
        <section key={s.h} className="mt-9">
          <h2 className="text-2xl font-bold">{s.h}</h2>
          {s.p && <p className="mt-3 leading-relaxed text-ink-soft">{s.p}</p>}
          {s.list && (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-soft">
              {s.list.map((x) => <li key={x}>{x}</li>)}
            </ul>
          )}
        </section>
      ))}
    </>
  );
}

export function Contact({ email }: { email: string }) {
  return (
    <section className="mt-9">
      <h2 className="text-2xl font-bold">Contact</h2>
      <p className="mt-3 text-ink-soft">
        <a className="font-semibold text-brand underline-offset-4 hover:underline" href={`mailto:${email}`}>{email}</a> · Elco Dev, LLC, Nashville, Tennessee
      </p>
    </section>
  );
}
