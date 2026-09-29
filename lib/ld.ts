import { FAQS, PROJECTS, SITE, type Project, type Service } from "./site";

/** Structured data (schema.org JSON-LD). Search engines and AI assistants read these to understand the business. */

const ORG_ID = `${SITE.url}/#organization`;
const abs = (path: string) => (path.startsWith("http") ? path : `${SITE.url}${path}`);

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: abs("/logo-black.png"),
    image: abs("/og-image.png"),
    description: SITE.description,
    foundingDate: SITE.founded,
    founder: { "@type": "Person", name: SITE.founder, jobTitle: "Founder and lead developer" },
    email: SITE.email,
    telephone: SITE.phone,
    priceRange: "$$",
    address: { "@type": "PostalAddress", addressLocality: SITE.city, addressRegion: SITE.region, addressCountry: SITE.country },
    geo: { "@type": "GeoCoordinates", latitude: 36.1627, longitude: -86.7816 },
    areaServed: [{ "@type": "City", name: "Nashville" }, { "@type": "State", name: "Tennessee" }, { "@type": "Country", name: "United States" }],
    sameAs: [SITE.linkedin, SITE.github],
    knowsAbout: ["Mobile app development", "iOS development", "Android development", "React Native", "Next.js", "SaaS development", "API development", "Website development", "App Store optimization", "In-app subscriptions"],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile app development", url: abs("/services/mobile-app-development") } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web app and SaaS development", url: abs("/services/web-app-development") } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website development", url: abs("/services/websites") } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "MVP development" }, priceSpecification: { "@type": "PriceSpecification", minPrice: 7000, priceCurrency: "USD" }, url: abs("/mvp") },
    ],
    owns: PROJECTS.filter((p) => p.kind === "own").map((p) => ({ "@id": `${SITE.url}/work/${p.slug}#app` })),
  };
}

export function websiteLd() {
  return { "@context": "https://schema.org", "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { "@id": ORG_ID }, inLanguage: "en-US" };
}

export function faqLd(faqs: { q: string; a: string }[] = FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.path) })),
  };
}

export function projectLd(p: Project) {
  const url = `${SITE.url}/work/${p.slug}`;
  const creator = p.kind === "own" ? { "@id": ORG_ID } : { "@type": "Organization", name: SITE.name, url: SITE.url };
  if (p.category === "Mobile app") {
    const os = p.platforms.filter((x) => x === "iOS" || x === "Android").join(", ");
    return {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      "@id": `${url}#app`,
      name: p.name,
      description: p.description,
      applicationCategory: "LifestyleApplication",
      operatingSystem: os || "iOS, Android",
      url: p.links.site ?? url,
      image: abs(p.image),
      ...(p.kind === "own" ? { publisher: { "@id": ORG_ID }, author: { "@id": ORG_ID } } : { creator }),
      sameAs: [p.links.appStore, p.links.googlePlay, p.links.site].filter(Boolean),
      ...(p.kind === "own" ? { offers: { "@type": "Offer", price: 0, priceCurrency: "USD" } } : {}),
    };
  }
  return {
    "@context": "https://schema.org",
    "@type": p.category === "Website" ? "WebSite" : "SoftwareApplication",
    "@id": `${url}#app`,
    name: p.name,
    description: p.description,
    url: p.links.site ?? url,
    image: abs(p.image),
    ...(p.category !== "Website" ? { applicationCategory: "BusinessApplication", operatingSystem: "Web" } : {}),
    ...(p.kind === "own" ? { publisher: { "@id": ORG_ID } } : { creator }),
  };
}

export function serviceLd(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.intro,
    url: `${SITE.url}/services/${s.slug}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "United States" },
  };
}
