export function PageHero({ title, crumbs }: { title: string; crumbs: string }) {
  return (
    <section className="flex h-[180px] flex-col items-center justify-center gap-5 px-4 sm:h-[240px]">
      <h1 className="text-display text-center text-foreground">{title}</h1>
      <p className="text-center text-lg font-medium text-muted-foreground">
        {crumbs}
      </p>
    </section>
  );
}
