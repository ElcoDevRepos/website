import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", description: "How Elco Dev, LLC collects, uses and protects information on elcodev.com.", alternates: { canonical: "/privacy-policy" } };

const SECTIONS: { h: string; p?: string; list?: string[] }[] = [
  { h: "1. Information we collect", p: "Personal data you choose to give us, such as your name, email address and phone number when you use our contact or booking forms, and usage data about your visit, such as IP address, browser, operating system, access times and pages viewed." },
  { h: "2. How we use your information", list: ["Improving and personalizing your experience on the Website.", "Communicating with you, including responding to inquiries or sending updates.", "Monitoring and analyzing usage and trends to improve the Website.", "Keeping the Website secure."] },
  { h: "3. Disclosure of your information", list: ["With third-party service providers that help us operate the Website and our business, such as scheduling (Calendly), email and analytics (Google Analytics, Vercel Analytics, Factors.ai, LinkedIn).", "If required by law or in response to valid legal requests by public authorities.", "To protect and defend our rights or property."] },
  { h: "4. Third-party services", p: "The Website links to third-party websites and services, including the App Store and Google Play. We are not responsible for their privacy practices; please review their policies." },
  { h: "5. Security", p: "We use administrative, technical and physical measures to protect your information. No system is impenetrable, and we cannot guarantee absolute security." },
  { h: "6. Children's privacy", p: "The Website does not knowingly collect information from children under 13. If we learn we have, we will delete it." },
  { h: "7. Your rights and choices", list: ["Access, update or delete your personal information.", "Withdraw your consent to data processing.", "Opt out of communications."] },
  { h: "8. Changes to this policy", p: "We may update this Privacy Policy. Changes take effect when posted here." },
];

export default function PrivacyPage() {
  return (
    <article className="wrap max-w-3xl py-14 sm:py-20">
      <h1 className="text-5xl font-extrabold">Privacy Policy</h1>
      <p className="mt-3 text-ink-muted">Effective January 4, 2025</p>
      <p className="mt-8 text-lg leading-relaxed text-ink-soft">
        {SITE.legalName} (&ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This policy explains how we collect, use, disclose and safeguard information when you visit {SITE.url.replace("https://", "")} (the &ldquo;Website&rdquo;).
      </p>
      {SECTIONS.map((s) => (
        <section key={s.h} className="mt-10">
          <h2 className="text-2xl font-bold">{s.h}</h2>
          {s.p && <p className="mt-3 leading-relaxed text-ink-soft">{s.p}</p>}
          {s.list && <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-soft">{s.list.map((x) => <li key={x}>{x}</li>)}</ul>}
        </section>
      ))}
      <section className="mt-10">
        <h2 className="text-2xl font-bold">9. Contact us</h2>
        <p className="mt-3 text-ink-soft">To exercise your rights or ask about this policy, email <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>. {SITE.legalName}, Nashville, Tennessee.</p>
      </section>
    </article>
  );
}
