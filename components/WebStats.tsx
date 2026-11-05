"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { KEY_SECTIONS, sectionOf, sourceBucket } from "@/lib/webStats";

/** Session source for first-party stats (also sent with lead-form submissions). */
export function sessionSource(): string {
  try {
    let s = sessionStorage.getItem("elco_src");
    if (s === null) {
      s = sourceBucket(document.referrer || "", new URLSearchParams(location.search).get("utm_source"), location.hostname) || "direct";
      sessionStorage.setItem("elco_src", s);
    }
    return s;
  } catch {
    return "direct";
  }
}

function beacon(body: Record<string, string>) {
  try {
    const json = JSON.stringify({ p: location.pathname, s: sessionSource(), ...body });
    if (navigator.sendBeacon) navigator.sendBeacon("/api/t", new Blob([json], { type: "application/json" }));
    else fetch("/api/t", { method: "POST", body: json, headers: { "Content-Type": "application/json" }, keepalive: true }).catch(() => {});
  } catch { /* never break a page */ }
}

/** One beacon at session start, one per key-section view after that (lib/webStats.ts). */
export function WebStats() {
  const pathname = usePathname();
  useEffect(() => {
    try {
      const fresh = sessionStorage.getItem("elco_src") === null;
      sessionSource();
      if (fresh) beacon({ k: "v" });
      else if (KEY_SECTIONS.has(sectionOf(pathname || "/"))) beacon({ k: "p" });
    } catch { /* private mode */ }
  }, [pathname]);
  return null;
}
