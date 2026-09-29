"use client";

import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";

/** Calendly booking, loaded only when it scrolls into view (it's heavy and would slow every page otherwise). */
export function Calendly() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((e) => { if (e[0]?.isIntersecting) { setShow(true); io.disconnect(); } }, { rootMargin: "400px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const src = `${SITE.calendly}?embed_type=Inline&hide_gdpr_banner=1&embed_domain=www.elcodev.com`;
  return (
    <div ref={ref} className="h-[700px] w-full overflow-hidden rounded-3xl border border-ink/10 bg-white">
      {show ? (
        <iframe src={src} title="Book a free 30-minute consultation with Elco Dev" className="h-full w-full" loading="lazy" />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
          <p className="text-ink-muted">Loading the calendar…</p>
          <a href={SITE.calendly} target="_blank" rel="noopener" className="btn-ghost">Open the booking page</a>
        </div>
      )}
    </div>
  );
}
