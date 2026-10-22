"use client";

import { useState } from "react";

const FIELDS = "w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-base outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";
const WEEKS = 48;

/** Visitor-supplied estimate of time spent on manual work. The defaults are an example, not a client result. */
export function RoiEstimate() {
  const [people, setPeople] = useState(5);
  const [hours, setHours] = useState(4);
  const [rate, setRate] = useState(35);
  const n = (v: string) => Math.max(0, Number(v) || 0);
  const yearHours = people * hours * WEEKS;
  const yearCost = yearHours * rate;
  const usd = (v: number) => v.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="grid gap-6 rounded-3xl bg-white p-6 ring-1 ring-ink/10 sm:p-8 lg:grid-cols-[1fr_0.9fr]">
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        <label className="grid gap-1.5 text-sm font-medium">
          People doing the manual work
          <input type="number" inputMode="numeric" min={0} max={500} value={people} onChange={(e) => setPeople(n(e.target.value))} className={FIELDS} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Hours each, per week
          <input type="number" inputMode="decimal" min={0} max={60} step={0.5} value={hours} onChange={(e) => setHours(n(e.target.value))} className={FIELDS} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Loaded hourly cost ($)
          <input type="number" inputMode="numeric" min={0} max={1000} value={rate} onChange={(e) => setRate(n(e.target.value))} className={FIELDS} />
        </label>
      </div>
      <div className="flex flex-col justify-between rounded-2xl bg-ink p-6 text-white" aria-live="polite">
        <div>
          <p className="text-sm text-white/60">Time spent on it each year</p>
          <p className="mt-1 font-display text-4xl font-extrabold">{yearHours.toLocaleString("en-US")} hrs</p>
          <p className="mt-5 text-sm text-white/60">What that time costs each year</p>
          <p className="mt-1 font-display text-4xl font-extrabold text-lime">{usd(yearCost)}</p>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-white/60">
          {people} × {hours} hrs × {WEEKS} working weeks × {usd(rate)}. An estimate from your own numbers, not a client result. A tool that removes half of that work is worth {usd(yearCost / 2)} a year.
        </p>
      </div>
    </div>
  );
}
