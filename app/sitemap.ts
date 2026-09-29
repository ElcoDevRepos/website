import type { MetadataRoute } from "next";
import { PROJECTS, SERVICES, SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({ url: `${SITE.url}${path}`, lastModified: now, priority });
  return [
    page("/", 1),
    page("/work", 0.9),
    page("/services", 0.9),
    page("/mvp", 0.8),
    page("/contact", 0.8),
    ...SERVICES.map((s) => page(`/services/${s.slug}`, 0.8)),
    ...PROJECTS.map((p) => page(`/work/${p.slug}`, p.kind === "own" ? 0.7 : 0.6)),
    page("/partners", 0.5),
    page("/privacy-policy", 0.2),
  ];
}
