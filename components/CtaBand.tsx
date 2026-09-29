import Link from "next/link";
import { SITE } from "@/lib/site";
import { Arrow } from "./ui";

export function CtaBand({ title = "Have an app or platform in mind?", body = "Book a free 30-minute call. You'll leave with a clear idea of scope, timeline and cost." }: { title?: string; body?: string }) {
  return (
    <section className="wrap py-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-brand px-8 py-14 text-white sm:px-14">
        <div aria-hidden="true" className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-lime/30 blur-3xl" />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">{title}</h2>
            <p className="mt-4 text-lg text-white/80">{body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-light">Book a free call <Arrow /></Link>
            <a href={`mailto:${SITE.email}`} className="btn border border-white/40 text-white hover:bg-white/10">Email us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
