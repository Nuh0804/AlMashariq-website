import { Link } from "react-router";
import type { Car } from "@/data/cars";
import gearIcon from "@/assets/icons/gear.svg";
import fuelIcon from "@/assets/icons/fuel.svg";
import { Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CarImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex h-[240px] w-full items-center justify-center overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-contain mix-blend-multiply invert brightness-[2.4] contrast-[0.45]"
      />
    </div>
  );
}

export function CarCard({ car }: { car: Car }) {
  return (
    <article className="flex w-full flex-col gap-10 rounded-[20px] bg-[#fafafa] p-6">
      <div className="flex flex-col gap-5">
        <CarImage src={car.image} alt={`${car.name} ${car.type}`} />
        <div className="flex flex-col gap-10">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-semibold capitalize">{car.name}</h3>
              <p className="text-base text-black/60">{car.type}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <p className="text-2xl font-semibold text-brand">${car.price}</p>
              <p className="text-sm text-black/60">per day</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 text-base text-black/60">
            <span className="flex items-center gap-2">
              <img
                src={gearIcon}
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
              {car.transmission}
            </span>
            <span className="flex items-center gap-2">
              <img
                src={fuelIcon}
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
              {car.fuel}
            </span>
            <span className="flex items-center gap-2">
              <Snowflake className="size-6" strokeWidth={1.5} />
              Air Conditioner
            </span>
          </div>
        </div>
      </div>
      <Button
        asChild
        className="h-[50px] w-full rounded-xl bg-brand text-base font-semibold text-white hover:bg-brand/90"
      >
        <Link to={`/details/${car.id}`}>View Details</Link>
      </Button>
    </article>
  );
}
