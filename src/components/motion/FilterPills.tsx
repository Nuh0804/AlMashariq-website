import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type FilterPill = {
  id: string;
  label: string;
  icon?: ReactNode;
};

export function FilterPills({
  items,
  value,
  onChange,
}: {
  items: FilterPill[];
  value: string;
  onChange: (id: string) => void;
}) {
  const listRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const root = listRef.current;
    if (!root) return;

    const update = () => {
      const active = root.querySelector<HTMLElement>('[data-active="true"]');
      if (!active) return;
      setIndicator({
        left: active.offsetLeft,
        top: active.offsetTop,
        width: active.offsetWidth,
        height: active.offsetHeight,
      });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(root);
    return () => observer.disconnect();
  }, [value, items]);

  return (
    <div
      ref={listRef}
      className="relative flex w-full flex-wrap items-center justify-center gap-2 rounded-[28px] bg-white/55 p-1.5 sm:gap-3 dark:bg-card/80"
      role="tablist"
      aria-label="Fleet filters"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute rounded-full bg-brand shadow-[0_10px_24px_rgb(31_78_56/28%)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={{
          left: indicator.left,
          top: indicator.top,
          width: indicator.width,
          height: indicator.height,
        }}
      />
      {items.map((item) => {
        const active = item.id === value;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active}
            data-active={active}
            onClick={() => onChange(item.id)}
            className={cn(
              "relative z-10 flex h-[50px] min-w-[108px] items-center justify-center gap-2 rounded-full px-4 text-base font-semibold transition-colors duration-300 sm:min-w-[120px] sm:px-5",
              active ? "text-white" : "text-foreground hover:text-foreground/70",
            )}
          >
            {item.icon}
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
