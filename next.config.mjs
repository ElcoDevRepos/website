/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  poweredByHeader: false,
  async redirects() {
    // Old URLs from earlier versions of the site.
    return [
      { source: "/our-team", destination: "/", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/our-services", destination: "/services", permanent: true },
      { source: "/service-details", destination: "/services", permanent: true },
      { source: "/portfolio", destination: "/work", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: false },
      { source: "/pricing", destination: "/mvp", permanent: true },
      // Liturgical Living's iOS paywall falls back to this address when its Info.plist has no privacy URL.
      { source: "/liturgical-living/privacy", destination: "/apps/liturgical-living/privacy", permanent: true },
    ];
  },
  async rewrites() {
    // Apps with a large web companion keep building and deploying it in their own Vercel project; it is served
    // here under /apps/<slug>/… . `fallback` runs after every page and dynamic route, so the app pages in
    // app/apps (landing, privacy, support, terms) always win. Keep origins in step with lib/apps.ts.
    // /api/* is never proxied: the Liturgical Living apps call it on liturgicalliving.app only.
    return {
      fallback: [
        { source: "/apps/liturgical-living/:path((?!api(?:/|$)).+)", destination: "https://living-liturgically.vercel.app/:path" },
        { source: "/apps/paddlerack/:path+", destination: "https://elcodev-paddlerack.vercel.app/:path+" },
      ],
    };
  },
};
export default nextConfig;
