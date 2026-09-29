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
    ];
  },
};
export default nextConfig;
