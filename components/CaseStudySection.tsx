import type { CaseStudy } from "@/lib/caseStudies";

/** The long-form case study shown on /work/<slug> for projects that have one. */
export function CaseStudySection({ c }: { c: CaseStudy }) {
  return (
    <section id="case-study" aria-labelledby="case-study-title" className="bg-white py-20">
      <div className="wrap">
        <p className="eyebrow">Case study</p>
        <h2 id="case-study-title" className="mt-3 max-w-4xl text-4xl font-bold leading-[1.08] sm:text-5xl">{c.headline}</h2>

        <dl className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {c.facts.map((f) => (
            <div key={f.label} className="rounded-2xl bg-paper-deep p-5">
              <dt className="text-sm text-ink-muted">{f.label}</dt>
              <dd className="mt-1 font-display text-3xl font-extrabold text-ink">{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <h3 className="text-2xl font-bold">The challenge</h3>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{c.challenge}</p>

            <h3 className="mt-12 text-2xl font-bold">What we did</h3>
            <ol className="mt-6 space-y-7">
              {c.approach.map((a, i) => (
                <li key={a.title} className="flex gap-4">
                  <span aria-hidden="true" className="font-display text-lg font-bold text-brand">0{i + 1}</span>
                  <div>
                    <h4 className="text-lg font-semibold">{a.title}</h4>
                    <p className="mt-1.5 leading-relaxed text-ink-soft">{a.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <aside className="h-fit space-y-8">
            <div className="rounded-3xl bg-paper-deep p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-muted">Where it stands</h3>
              <ul className="mt-4 space-y-3">
                {c.outcome.map((o) => (
                  <li key={o} className="flex gap-3 text-ink-soft">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 flex-none rounded-full bg-brand" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-ink p-8 text-white">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">What this means for you</h3>
              <p className="mt-3 leading-relaxed text-white/85">{c.forClients}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
