import { Link } from "react-router";
import arrowRight from "@/assets/icons/arrow-right.svg";
import { CarCard } from "@/components/cars/CarCard";
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
    <section className="page-wrap flex flex-col gap-10 py-[60px]">
      <div className="flex items-end justify-between gap-4">
        <h2 className="max-w-[631px] text-[36px] font-bold leading-none sm:text-[50px]">
          {heading}
        </h2>
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
              className="size-6"
            />
          </Link>
        ) : null}
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredCars.map((car) => (
          <CarCard key={car.id} car={car} className={cardClassName} />
        ))}
      </div>
    </section>
  );
}
