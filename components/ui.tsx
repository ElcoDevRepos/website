import Link from "next/link";
import type { Links } from "@/lib/site";

export function Tag({ children, tone = "plain" }: { children: React.ReactNode; tone?: "plain" | "brand" | "dark" }) {
  const cls = tone === "brand" ? "bg-brand-soft text-brand-dark" : tone === "dark" ? "bg-white/10 text-white/80" : "bg-paper-deep text-ink-soft";
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${cls}`}>{children}</span>;
}

const APPLE = (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
    <path d="M16.37 12.64c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.51 1.25-2.58-.03-.01-2.4-.92-2.38-3.69zM14.1 5.9c.63-.77 1.06-1.83.94-2.9-.91.04-2.01.61-2.66 1.37-.58.67-1.09 1.76-.95 2.8 1.01.08 2.04-.51 2.67-1.27z" />
  </svg>
);
const PLAY = (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
    <path d="M3.6 2.3c-.3.3-.4.7-.4 1.2v17c0 .5.1.9.4 1.2l9.3-9.7-9.3-9.7zm10.4 10.8 2.6 2.7-11.1 6.4 8.5-9.1zm0-2.2L5.5 1.8l11.1 6.4-2.6 2.7zm3.8-1.6 3 1.7c.9.5.9 1.4 0 1.9l-3 1.7-2.9-2.6 2.9-2.7z" />
  </svg>
);

export function StoreButtons({ links, name, dark = false }: { links: Links; name: string; dark?: boolean }) {
  const cls = dark ? "bg-white text-ink hover:bg-lime" : "bg-ink text-white hover:bg-brand";
  return (
    <>
      {links.appStore && (
        <a href={links.appStore} target="_blank" rel="noopener" aria-label={`${name} on the App Store`} className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${cls}`}>
          {APPLE} App Store
        </a>
      )}
      {links.googlePlay && (
        <a href={links.googlePlay} target="_blank" rel="noopener" aria-label={`${name} on Google Play`} className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${cls}`}>
          {PLAY} Google Play
        </a>
      )}
    </>
  );
}

export function SectionHead({ eyebrow, title, lead, align = "left", dark = false }: { eyebrow?: string; title: React.ReactNode; lead?: React.ReactNode; align?: "left" | "center"; dark?: boolean }) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && <p className={`eyebrow ${dark ? "text-white/60" : ""}`}>{eyebrow}</p>}
      <h2 className={`mt-3 text-4xl font-bold leading-[1.05] sm:text-5xl ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {lead && <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/70" : "text-ink-muted"}`}>{lead}</p>}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === items.length - 1 ? <span aria-current="page" className="text-ink">{it.name}</span> : <Link href={it.path} className="hover:text-ink">{it.name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export const Arrow = () => (
  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M4 10h12m-5-5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
