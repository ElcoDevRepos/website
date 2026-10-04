import Link from "next/link";
import { APP_PROJECTS, SERVICES, SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white/70">
      <div className="wrap grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-2xl font-bold text-white">Elco Dev</p>
          <p className="mt-3 text-sm leading-relaxed">
            A Nashville software studio building web and mobile apps since {SITE.founded}.
          </p>
          <address className="mt-5 space-y-1 text-sm not-italic">
            <a href={`mailto:${SITE.email}`} className="block hover:text-white">{SITE.email}</a>
            <a href={`tel:${SITE.phone}`} className="block hover:text-white">{SITE.phoneDisplay}</a>
            <span className="block">Nashville, Tennessee</span>
          </address>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-white">{s.name}</Link></li>
            ))}
            <li><Link href="/mvp" className="hover:text-white">MVP pricing</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Our apps</p>
          <ul className="mt-4 space-y-2 text-sm">
            {APP_PROJECTS.map((p) => (
              <li key={p.slug}><Link href={`/apps/${p.slug}`} className="hover:text-white">{p.name}</Link></li>
            ))}
            <li><Link href="/apps" className="hover:text-white">All apps</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/work" className="hover:text-white">All work</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/partners" className="hover:text-white">Partner program</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy policy</Link></li>
            <li><a href={SITE.linkedin} target="_blank" rel="noopener" className="hover:text-white">LinkedIn</a></li>
            <li><a href={SITE.github} target="_blank" rel="noopener" className="hover:text-white">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="wrap py-6 text-xs">© {year} {SITE.legalName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
