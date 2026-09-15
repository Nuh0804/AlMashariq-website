import { Link } from "react-router";
import arrowRight from "@/assets/icons/arrow-right.svg";
import { CarCard } from "@/components/cars/CarCard";
import { Reveal } from "@/components/motion/Reveal";
import { featuredCars } from "@/data/cars";

export function CarCatalog({
  heading = "Choose the car that suits you",
  showViewAll = true,
  cardClassName,
}: {
  heading?: string;
  showViewAll?: boolean;
  cardClassName?: string;
}) {
  return (
    <section className="page-wrap flex flex-col gap-12 py-16 lg:py-24">
      <Reveal>
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-section max-w-[631px]">{heading}</h2>
          {showViewAll ? (
            <Link
              to="/vehicles"
              className="flex shrink-0 items-center gap-2 text-xl font-bold"
            >
              View All
              <img
                src={arrowRight}
                alt=""
                width={24}
                height={24}
                className="size-6 dark:invert"
              />
            </Link>
          ) : null}
        </div>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredCars.map((car, index) => (
          <Reveal key={car.id} delay={Math.min(index * 70, 280)}>
            <CarCard car={car} className={cardClassName} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
