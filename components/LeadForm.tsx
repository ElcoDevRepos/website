"use client";

import { useState } from "react";
import { BUDGETS, TIMELINES } from "@/lib/lead";
import { trackConversion } from "@/lib/conversions";

type Status = "idle" | "sending" | "sent" | "error";

const FIELDS = "w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-base outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

/** Short async lead form for people who'd rather not book a call. Posts to /api/lead, which emails Austin. */
export function LeadForm({ page }: { page: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data: Record<string, string> = { ...(Object.fromEntries(new FormData(form)) as Record<string, string>), page };
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error || "That didn't send. Please email austin@elcodev.com.");
      trackConversion("lead_form_submit", { budget: data.budget ?? "", timeline: data.timeline ?? "" });
      setStatus("sent");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "That didn't send. Please email austin@elcodev.com.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-3xl bg-lime p-8">
        <p className="font-display text-2xl font-bold">Thanks, we got it.</p>
        <p className="mt-2 text-ink-soft">Austin will reply by email within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-3xl bg-white p-6 ring-1 ring-ink/10 sm:grid-cols-2 sm:p-8">
      <p className="font-display text-xl font-bold sm:col-span-2">Not ready for a call? Send a few details.</p>
      <label className="grid gap-1.5 text-sm font-medium">Your name *<input required name="name" maxLength={100} autoComplete="name" autoCapitalize="words" className={FIELDS} /></label>
      <label className="grid gap-1.5 text-sm font-medium">Email *<input required type="email" name="email" maxLength={200} autoComplete="email" className={FIELDS} /></label>
      <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">What are you building? *
        <textarea required name="building" rows={4} minLength={10} maxLength={3000} autoCapitalize="sentences" className={FIELDS} />
      </label>
      <label className="grid gap-1.5 text-sm font-medium">Budget *
        <select required name="budget" className={FIELDS} defaultValue="">
          <option value="" disabled>Select one</option>
          {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium">Timeline *
        <select required name="timeline" className={FIELDS} defaultValue="">
          <option value="" disabled>Select one</option>
          {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </label>
      {/* Honeypot for bots; hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Website<input tabIndex={-1} name="website" autoComplete="off" /></label>
      </div>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">{status === "sending" ? "Sending…" : "Send details"}</button>
        {status === "error" && <p role="alert" className="text-sm text-red-700">{error}</p>}
      </div>
    </form>
  );
}
