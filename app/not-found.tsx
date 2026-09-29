import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap py-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-5xl font-extrabold">That page doesn&apos;t exist</h1>
      <p className="mt-4 text-lg text-ink-muted">It may have moved when we rebuilt the site.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="btn-primary">Home</Link>
        <Link href="/work" className="btn-ghost">See our work</Link>
      </div>
    </section>
  );
}
