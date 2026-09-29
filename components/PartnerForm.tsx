"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const FIELDS = "w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-base outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

/** Partner applications, sent through EmailJS (same service and template as before). */
export function PartnerForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");
    const message = [
      "Partnership Application Details:",
      "-----------------------------",
      `Contact Name: ${d.contact_name}`,
      `Email: ${d.email}`,
      `Phone: ${d.phone || "Not provided"}`,
      `Company Name: ${d.company_name || "Not provided"}`,
      `Website: ${d.website || "Not provided"}`,
      `Partnership Type: ${d.partnership_type || "Not specified"}`,
      `Company Type: ${d.company_type || "Not specified"}`,
      `Primary Client Base: ${d.client_base || "Not specified"}`,
      "",
      "Additional Information:",
      d.message || "No additional information provided",
    ].join("\n");
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send("service_f7c31el", "template_e61tqnr", { to_name: "Elco Dev", from_name: d.contact_name, from_email: d.email, message }, "grOQweJjHjltztoaG");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-3xl bg-lime p-8">
        <p className="font-display text-2xl font-bold">Thanks, we got it.</p>
        <p className="mt-2 text-ink-soft">We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
      <label className="grid gap-1.5 text-sm font-medium">Your name *<input required name="contact_name" autoComplete="name" autoCapitalize="words" className={FIELDS} /></label>
      <label className="grid gap-1.5 text-sm font-medium">Email *<input required type="email" name="email" autoComplete="email" className={FIELDS} /></label>
      <label className="grid gap-1.5 text-sm font-medium">Phone<input type="tel" name="phone" autoComplete="tel" className={FIELDS} /></label>
      <label className="grid gap-1.5 text-sm font-medium">Company<input name="company_name" autoComplete="organization" autoCapitalize="words" className={FIELDS} /></label>
      <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">Website<input type="url" name="website" inputMode="url" placeholder="https://" className={FIELDS} /></label>
      <label className="grid gap-1.5 text-sm font-medium">Partnership type
        <select name="partnership_type" className={FIELDS} defaultValue="">
          <option value="">Select one</option>
          <option value="referral">Referral partner</option>
          <option value="reseller">Reseller (white label)</option>
          <option value="integration">Integration partner</option>
          <option value="strategic">Strategic alliance</option>
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium">Company type
        <select name="company_type" className={FIELDS} defaultValue="">
          <option value="">Select one</option>
          <option value="agency">Digital agency</option>
          <option value="consulting">Consulting firm</option>
          <option value="software">Software company</option>
          <option value="it_services">IT services</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">Primary client base
        <select name="client_base" className={FIELDS} defaultValue="">
          <option value="">Select one</option>
          <option value="startups">Startups</option>
          <option value="small_business">Small business</option>
          <option value="mid_market">Mid-market</option>
          <option value="enterprise">Enterprise</option>
          <option value="mixed">Mixed</option>
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">Tell us about your business and goals
        <textarea name="message" rows={5} autoCapitalize="sentences" className={FIELDS} />
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">{status === "sending" ? "Sending…" : "Apply to partner"}</button>
        {status === "error" && <p role="alert" className="text-sm text-red-700">That didn&apos;t send. Please email austin@elcodev.com instead.</p>}
      </div>
    </form>
  );
}
