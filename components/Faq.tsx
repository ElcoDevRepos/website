/** FAQ as native <details>: works without JavaScript and is fully readable by crawlers. */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold [&::-webkit-details-marker]:hidden">
            <h3 className="font-sans text-lg font-semibold tracking-normal">{f.q}</h3>
            <span aria-hidden="true" className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full border border-ink/20 text-sm transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 max-w-3xl leading-relaxed text-ink-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
