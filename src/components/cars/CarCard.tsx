import { Link } from "react-router";
import type { Car } from "@/data/cars";
import gearIcon from "@/assets/icons/gear.svg";
import fuelIcon from "@/assets/icons/fuel.svg";
import { Snowflake, Users, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CarImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex h-[240px] w-full items-center justify-center overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-contain mix-blend-multiply invert brightness-[2.4] contrast-[0.45] transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100 dark:mix-blend-normal dark:invert-0 dark:brightness-110 dark:contrast-100"
      />
    </div>
  );
}

function Badge({
  children,
  tone,
}: {
  children: string;
  tone: "electric" | "auto" | "instant";
}) {
  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase",
        tone === "electric" &&
          "bg-emerald-700 text-white dark:bg-emerald-400 dark:text-emerald-950",
        tone === "auto" && "bg-brand text-white dark:bg-primary",
        tone === "instant" && "bg-brand-orange text-white",
      )}
    >
      {children}
    </span>
  );
}

export function CarCard({
  car,
  className,
}: {
  car: Car;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex w-full flex-col gap-10 rounded-2xl border border-border/70 bg-card p-6 shadow-[0_12px_32px_rgb(18_18_18/6%)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgb(18_18_18/12%)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:shadow-[0_12px_32px_rgb(0_0_0/35%)]",
        className,
      )}
    >
      <div className="flex flex-col gap-5">
        <CarImage src={car.image} alt={`${car.name} ${car.type}`} />
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            {car.electric ? <Badge tone="electric">Electric</Badge> : null}
            {car.transmission === "Automat" ||
            car.transmission === "Automatic" ? (
              <Badge tone="auto">Automatic</Badge>
            ) : null}
            {car.instantBook ? <Badge tone="instant">Instant Book</Badge> : null}
          </div>
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="font-heading text-2xl font-bold capitalize">
                {car.name}
              </h3>
              <p className="text-base text-muted-foreground">{car.type}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <p className="text-2xl font-semibold text-brand dark:text-emerald-300">
                ${car.price}
              </p>
              <p className="text-sm text-muted-foreground">per day</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 text-base text-muted-foreground">
            <span className="flex items-center gap-2">
              <img
                src={gearIcon}
                alt=""
                width={24}
                height={24}
                className="size-6 dark:invert"
              />
              {car.transmission}
            </span>
            <span className="flex items-center gap-2">
              <img
                src={fuelIcon}
                alt=""
                width={24}
                height={24}
                className="size-6 dark:invert"
              />
              {car.fuel}
            </span>
            <span className="flex items-center gap-2">
              <Snowflake className="size-6" strokeWidth={1.5} />
              Air Conditioner
            </span>
          </div>
          <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 motion-reduce:grid-rows-[1fr] motion-reduce:opacity-100">
            <div className="overflow-hidden">
              <div className="flex items-center justify-between gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <img
                    src={gearIcon}
                    alt=""
                    width={18}
                    height={18}
                    className="size-[18px] dark:invert"
                  />
                  {car.transmission === "Automat" ? "Automatic" : "Manual"}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="size-[18px]" strokeWidth={1.6} />
                  {car.seats} seats
                </span>
                <span className="flex items-center gap-2">
                  <Gauge className="size-[18px]" strokeWidth={1.6} />
                  {car.rangeKm} km
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        asChild
        className="h-[50px] w-full rounded-xl bg-brand text-base font-semibold text-white hover:bg-brand/90"
      >
        <Link to={`/details/${car.id}`}>Book now</Link>
      </Button>
    </article>
  );
}
