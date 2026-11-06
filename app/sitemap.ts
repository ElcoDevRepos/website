import type { MetadataRoute } from "next";
import { APP_ENTRIES, LEGAL_APPS } from "@/lib/apps";
import { INSIGHTS } from "@/lib/insights";
import { PROJECTS, SERVICES, SITE, SPECIALTIES } from "@/lib/site";

export const dynamic = "force-static";

/** The pages under /apps/paddlerack/…, /apps/fairsky/… and /apps/scripted/bible/… come from those apps' own sites and are
 *  listed in their own sitemaps, which robots.txt points to. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({ url: `${SITE.url}${path}`, lastModified: now, priority });
  return [
    page("/", 1),
    page("/work", 0.9),
    page("/case-studies", 0.8),
    page("/case-studies/taking-over-an-app", 0.7),
    page("/care-plans", 0.8),
    page("/insights", 0.7),
    ...INSIGHTS.map((a) => page(`/insights/${a.slug}`, 0.7)),
    page("/apps", 0.9),
    page("/apps/console", 0.6), // Elco Console kit, served by the Deskbridge project via rewrite
    page("/apps/social-kit", 0.6), // Agent Social Kit, served by the Deskbridge project via rewrite
    ...APP_ENTRIES.map((e) => page(`/apps/${e.project.slug}`, 0.8)),
    ...LEGAL_APPS.flatMap((e) => ["support", "privacy", "terms"].map((k) => page(`/apps/${e.project.slug}/${k}`, 0.3))),
    page("/services", 0.9),
    page("/mvp", 0.8),
    page("/contact", 0.8),
    ...SERVICES.map((s) => page(`/services/${s.slug}`, 0.8)),
    ...SPECIALTIES.map((s) => page(`/services/${s.slug}`, 0.7)),
    ...PROJECTS.map((p) => page(`/work/${p.slug}`, p.kind === "own" ? 0.7 : 0.6)),
    page("/partners", 0.5),
    page("/privacy-policy", 0.2),
  ];
}
