import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/site";
import { PhoneFrame } from "./PhoneFrame";
import { Tag } from "./ui";

const KIND: Record<Project["kind"], string> = { own: "Our product", client: "Client project", build: "Product build" };

export function ProjectCard({ p, headingLevel = "h3" }: { p: Project; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <article className="group card relative flex flex-col overflow-hidden transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(11,15,26,0.35)]">
      {p.phones?.length ? (
        // Apps show a phone, not a website screenshot.
        <div className="relative flex aspect-[16/10] items-start justify-center overflow-hidden bg-gradient-to-b from-brand-soft to-paper-deep pt-6">
          <PhoneFrame src={p.phones[0]} alt={`${p.name} app screenshot`} sizes="160px" className="w-[42%] border-[4px] transition-transform duration-500 group-hover:-translate-y-1" />
        </div>
      ) : (
        <div className="relative aspect-[16/10] overflow-hidden bg-paper-deep">
          <Image src={p.image} alt={`${p.name} screenshot`} fill sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3 text-xs text-ink-muted">
          <span>{KIND[p.kind]} · {p.category}</span>
          <span>{p.year}</span>
        </div>
        <H className="mt-2 text-xl font-bold">
          <Link href={`/work/${p.slug}`} className="after:absolute after:inset-0">{p.name}</Link>
        </H>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{p.summary}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {p.tech.slice(0, 4).map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
      </div>
    </article>
  );
}
