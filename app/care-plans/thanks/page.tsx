import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

/** Where the Care / Care Plus Stripe Payment Links send buyers after checkout (Nov 2026). */
export const metadata: Metadata = {
  title: "Thanks: your care plan is set up",
  description: "Your Elco Dev care plan is active. We'll be in touch within one business day.",
  alternates: { canonical: "/care-plans/thanks" },
  robots: { index: false, follow: false },
};

export default function CarePlanThanks() {
  return (
    <section className="bg-ink text-white">
      <div className="wrap py-24 sm:py-32">
        <p className="eyebrow text-white/60">Care plans</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-extrabold leading-[1.05] sm:text-6xl">
          Thank you. <span className="font-serif font-normal italic text-lime">You&apos;re on a plan.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/75">
          We&apos;ll be in touch within one business day (Monday to Friday, 9 to 5 Central) to get access to your site or app and set up monitoring. Stripe has emailed you a receipt, and you can cancel any time.
        </p>
        <p className="mt-8 text-white/70">
          Anything we should know first? Email <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
        <p className="mt-10">
          <Link href="/care-plans" className="underline text-white/70">Back to care plans</Link>
        </p>
      </div>
    </section>
  );
}
