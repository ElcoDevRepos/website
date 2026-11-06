import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, Instrument_Serif } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Tracking } from "@/components/Tracking";
import { WebStats } from "@/components/WebStats";
import { organizationLd, websiteLd } from "@/lib/ld";
import { SITE } from "@/lib/site";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap", weight: ["700", "800"] });
// Only used for a few accent words, so it isn't preloaded: the fallback serif stands in for a moment.
const serif = Instrument_Serif({ subsets: ["latin"], variable: "--font-serif", display: "swap", weight: "400", style: "italic", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Elco Dev | Mobile App & Web Development in Nashville",
    template: "%s | Elco Dev",
  },
  description:
    "Mobile app and web development from a Nashville studio: fixed quotes before work starts, MVPs in about 14 days from $7,000, and apps of our own live on the App Store and Google Play.",
  applicationName: SITE.name,
  authors: [{ name: SITE.founder }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
    url: "/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Elco Dev builds web and mobile apps" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

export const viewport: Viewport = { themeColor: "#FAF9F6", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${serif.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
          Skip to content
        </a>
        <JsonLd data={[organizationLd(), websiteLd()]} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Tracking />
        <WebStats />
      </body>
    </html>
  );
}
