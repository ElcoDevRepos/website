import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

/** Everyone may crawl, including AI assistants (GPTBot, ClaudeBot, PerplexityBot, Google-Extended): being cited by them is the point. */
export default function robots(): MetadataRoute.Robots {
  // The app companion sites served under /apps/… publish their own sitemaps (absolute www.elcodev.com URLs).
  const sitemap = ["/sitemap.xml", "/apps/paddlerack/sitemap.xml", "/apps/fairsky/sitemap.xml", "/apps/scripted/bible/sitemap.xml", "/apps/jagdklar/sitemap.xml", "/apps/deskbridge/sitemap.xml"].map((p) => `${SITE.url}${p}`);
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap, host: SITE.url };
}
