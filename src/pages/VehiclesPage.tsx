import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { Car, CarFront, Truck, Bus } from "lucide-react";
import { BrandLogos } from "@/components/brand/BrandLogos";
import { CarCard } from "@/components/cars/CarCard";
import { cars } from "@/data/cars";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "All vehicles", icon: null },
  { label: "Sedan", icon: CarFront },
  { label: "Cabriolet", icon: Car },
  { label: "Pickup", icon: Truck },
  { label: "SUV", icon: Car },
  { label: "Minivan", icon: Bus },
] as const;

export function VehiclesPage() {
  const [params, setParams] = useSearchParams();
  const active = params.get("type") ?? "All vehicles";

  const visibleCars = useMemo(() => {
    if (active === "All vehicles") return cars;
    return cars.filter((car) => car.type === active);
  }, [active]);

  return (
    <>
      <section className="page-wrap py-[60px]">
        <h1 className="text-center text-[36px] font-bold leading-none sm:text-[50px]">
          Select a vehicle group
        </h1>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.label}
                type="button"
                onClick={() => {
                  if (tab.label === "All vehicles") setParams({});
                  else setParams({ type: tab.label });
                }}
                className={cn(
                  "flex h-[50px] min-w-[140px] items-center justify-center gap-2 rounded-xl px-5 text-base font-semibold",
                  active === tab.label
                    ? "bg-brand text-white"
                    : "bg-[#f5f5f5] text-black hover:bg-[#ececec]",
                )}
              >
                {Icon ? <Icon className="size-7" strokeWidth={1.5} /> : null}
                {tab.label}
              </button>
            );
          })}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
      <BrandLogos />
    </>
  );
}
