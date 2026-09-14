export function PageHero({ title, crumbs }: { title: string; crumbs: string }) {
  return (
    <section className="flex h-[180px] flex-col items-center justify-center gap-5 bg-[#f7f7f7] px-4 sm:h-[240px]">
      <h1 className="text-center text-[36px] font-bold leading-none text-black sm:text-[50px]">
        {title}
      </h1>
      <p className="text-center text-lg font-medium text-black/70">{crumbs}</p>
    </section>
  );
}
