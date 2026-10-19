/** Shared lead-form options and validation (used by the form and by /api/lead). */
export const BUDGETS = ["Under $5k", "$5k to $15k", "$15k to $50k", "$50k+", "Not sure yet"] as const;
export const TIMELINES = ["As soon as possible", "1 to 3 months", "3 to 6 months", "Just exploring"] as const;

export type Lead = { name: string; email: string; building: string; budget: string; timeline: string; page: string };

const EMAIL = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/;

export function validateLead(raw: unknown): { ok: true; lead: Lead } | { ok: false; error: string } {
  if (!raw || typeof raw !== "object") return { ok: false, error: "Invalid request." };
  const r = raw as Record<string, unknown>;
  const str = (k: string, max: number) => (typeof r[k] === "string" ? (r[k] as string).trim().slice(0, max) : "");
  const lead: Lead = {
    name: str("name", 100),
    email: str("email", 200),
    building: str("building", 3000),
    budget: str("budget", 40),
    timeline: str("timeline", 40),
    page: str("page", 100),
  };
  if (!lead.name) return { ok: false, error: "Please add your name." };
  if (!EMAIL.test(lead.email)) return { ok: false, error: "Please add a valid email address." };
  if (lead.building.length < 10) return { ok: false, error: "Tell us a little about what you're building." };
  if (!(BUDGETS as readonly string[]).includes(lead.budget)) return { ok: false, error: "Please pick a budget range." };
  if (!(TIMELINES as readonly string[]).includes(lead.timeline)) return { ok: false, error: "Please pick a timeline." };
  return { ok: true, lead };
}
