import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { Car, CarFront, Truck, Bus, Zap, Crown } from "lucide-react";
import { BrandLogos } from "@/components/brand/BrandLogos";
import { CarCard } from "@/components/cars/CarCard";
import { FilterPills } from "@/components/motion/FilterPills";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { cars } from "@/data/cars";

const tabs = [
  { id: "all", label: "All" },
  { id: "SUV", label: "SUV", icon: <Car className="size-6" strokeWidth={1.5} /> },
  {
    id: "luxury",
    label: "Luxury",
    icon: <Crown className="size-6" strokeWidth={1.5} />,
  },
  {
    id: "electric",
    label: "Electric",
    icon: <Zap className="size-6" strokeWidth={1.5} />,
  },
  {
    id: "Sedan",
    label: "Sedan",
    icon: <CarFront className="size-6" strokeWidth={1.5} />,
  },
  {
    id: "Cabriolet",
    label: "Cabriolet",
    icon: <Car className="size-6" strokeWidth={1.5} />,
  },
  {
    id: "Pickup",
    label: "Pickup",
    icon: <Truck className="size-6" strokeWidth={1.5} />,
  },
  {
    id: "Minivan",
    label: "Minivan",
    icon: <Bus className="size-6" strokeWidth={1.5} />,
  },
];

export function VehiclesPage() {
  const [params, setParams] = useSearchParams();
  const active = params.get("type") ?? "all";

  const visibleCars = useMemo(() => {
    if (active === "all") return cars;
    if (active === "luxury") return cars.filter((car) => car.luxury);
    if (active === "electric") return cars.filter((car) => car.electric);
    return cars.filter((car) => car.type === active);
  }, [active]);

  return (
    <>
      <section className="page-wrap py-16 lg:py-24">
        <Reveal>
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-display text-center">Select a vehicle group</h1>
            <Button
              type="button"
              className="h-10 rounded-xl bg-brand-orange px-7 font-inter text-base font-semibold text-white hover:bg-brand-orange/90"
              onClick={() => {
                document
                  .getElementById("fleet-filters")
                  ?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              Filter Vehicles
            </Button>
          </div>
        </Reveal>
        <Reveal className="mt-10" delay={80}>
          <div id="fleet-filters">
            <FilterPills
              items={tabs}
              value={active}
              onChange={(id) => {
                if (id === "all") setParams({});
                else setParams({ type: id });
              }}
            />
          </div>
        </Reveal>
        <div
          id="fleet-grid"
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {visibleCars.map((car, index) => (
            <Reveal key={car.id} delay={Math.min(index * 60, 240)}>
              <CarCard car={car} />
            </Reveal>
          ))}
        </div>
      </section>
      <BrandLogos />
    </>
  );
}
