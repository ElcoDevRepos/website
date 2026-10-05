import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

/** Everyone may crawl, including AI assistants (GPTBot, ClaudeBot, PerplexityBot, Google-Extended): being cited by them is the point. */
export default function robots(): MetadataRoute.Robots {
  // The app companion sites served under /apps/… publish their own sitemaps (absolute www.elcodev.com URLs).
  const sitemap = ["/sitemap.xml", "/apps/liturgical-living/sitemap.xml", "/apps/paddlerack/sitemap.xml", "/apps/scripted/bible/sitemap.xml"].map((p) => `${SITE.url}${p}`);
  return { rules: [{ userAgent: "*", allow: "/", disallow: "/apps/liturgical-living/api/" }], sitemap, host: SITE.url };
}
