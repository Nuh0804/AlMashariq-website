export function PageHero({ title, crumbs }: { title: string; crumbs: string }) {
  return (
    <section className="page-wrap pt-4">
      <div className="relative isolate overflow-hidden rounded-[40px] bg-brand px-6 py-16 text-center text-white sm:py-20">
        <div className="hex-mesh pointer-events-none absolute inset-0 opacity-60" />
        <h1 className="hero-enter text-display relative">{title}</h1>
        <p className="hero-enter relative mt-5 text-lg font-medium text-white/70 [animation-delay:120ms]">
          {crumbs}
        </p>
      </div>
    </section>
  );
}
