"use client";

import { useEffect } from "react";
import { trackConversion } from "@/lib/conversions";

/**
 * Lead conversions, via one global listener:
 * - calendly_booked: the Calendly embed posts `calendly.event_scheduled` when someone books.
 * - email_click / phone_click: any mailto: or tel: link.
 * - book_call_click: any "Book a free call" style CTA (links to /contact or the #book anchor).
 */
export function ConversionTracking() {
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (!/^https:\/\/([a-z0-9-]+\.)?calendly\.com$/.test(e.origin)) return;
      const ev = (e.data as { event?: string } | null)?.event;
      if (ev === "calendly.event_scheduled") trackConversion("calendly_booked");
    }
    function onClick(e: MouseEvent) {
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      const label = (a.textContent ?? "").trim().slice(0, 60);
      if (href.startsWith("mailto:")) trackConversion("email_click", { label });
      else if (href.startsWith("tel:")) trackConversion("phone_click", { label });
      else if (/book/i.test(label) && (/^\/contact\b/.test(href) || href.endsWith("#book") || href.includes("calendly.com"))) {
        trackConversion("book_call_click", { label, href });
      }
    }
    window.addEventListener("message", onMessage);
    document.addEventListener("click", onClick, { capture: true });
    return () => {
      window.removeEventListener("message", onMessage);
      document.removeEventListener("click", onClick, { capture: true });
    };
  }, []);
  return null;
}
