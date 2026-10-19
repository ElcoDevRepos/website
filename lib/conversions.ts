import { track } from "@vercel/analytics";

type Props = Record<string, string | number | boolean | null>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Sends one conversion event to GA4 (gtag) and Vercel Analytics. Never throws. */
export function trackConversion(name: string, props: Props = {}) {
  const params = { ...props, page_path: typeof window === "undefined" ? "" : window.location.pathname };
  try {
    window.gtag?.("event", name, params);
  } catch {}
  try {
    track(name, params);
  } catch {}
}
