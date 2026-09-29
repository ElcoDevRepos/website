import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

/** Everyone may crawl, including AI assistants (GPTBot, ClaudeBot, PerplexityBot, Google-Extended): being cited by them is the point. */
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${SITE.url}/sitemap.xml`, host: SITE.url };
}
