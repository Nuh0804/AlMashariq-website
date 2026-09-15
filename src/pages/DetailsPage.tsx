import { Link, useParams } from "react-router";
import { DoorOpen, Fuel, Gauge, Snowflake, Users } from "lucide-react";
import checkCircle from "@/assets/icons/check-circle.svg";
import gearIcon from "@/assets/icons/gear.svg";
import thumb1 from "@/assets/images/details-thumb-1.png";
import thumb2 from "@/assets/images/details-thumb-2.png";
import thumb3 from "@/assets/images/details-thumb-3.png";
import { CarImage } from "@/components/cars/CarCard";
import { CarCatalog } from "@/components/home/CarCatalog";
import { Button } from "@/components/ui/button";
import { cars, getCarById } from "@/data/cars";

const defaultCar = cars.find((car) => car.id === "bmw-coupe") ?? cars[0];

const equipment = [
  ["ABS", "Air Bags", "Cruise Control"],
  ["ABS", "Air Bags", "Air Conditioner"],
];

export function DetailsPage() {
  const { id } = useParams();
  const car = (id ? getCarById(id) : defaultCar) ?? defaultCar;

  const specs = [
    {
      label: "Gear Box",
      value: car.transmission,
      icon: (
        <img src={gearIcon} alt="" width={24} height={24} className="size-6" />
      ),
    },
    {
      label: "Fuel",
      value: car.fuel === "PB 95" ? "Petrol" : car.fuel,
      icon: <Fuel className="size-6" strokeWidth={1.5} />,
    },
    {
      label: "Doors",
      value: String(car.doors),
      icon: <DoorOpen className="size-6" strokeWidth={1.5} />,
    },
    {
      label: "Air Conditioner",
      value: car.ac ? "Yes" : "No",
      icon: <Snowflake className="size-6" strokeWidth={1.5} />,
    },
    {
      label: "Seats",
      value: String(car.seats),
      icon: <Users className="size-6" strokeWidth={1.5} />,
    },
    {
      label: "Distance",
      value: `${String(car.rangeKm)} km`,
      icon: <Gauge className="size-6" strokeWidth={1.5} />,
    },
  ];

  const thumbs = [thumb1, thumb2, thumb3];

  return (
    <>
      <section className="page-wrap grid gap-12 py-[60px] lg:grid-cols-2">
        <div>
          <h1 className="text-[40px] font-bold capitalize leading-none">
            {car.name}
          </h1>
          <p className="mt-5 flex items-center gap-1">
            <span className="text-[40px] font-semibold text-brand">
              ${car.price}
            </span>
            <span className="text-base text-muted-foreground">/ day</span>
          </p>
          <div className="group mt-5">
            <CarImage src={car.image} alt={`${car.name} ${car.type}`} />
          </div>
          <div className="mt-5 flex gap-6 overflow-x-auto">
            {thumbs.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`${car.name} view ${String(index + 1)}`}
                className="h-[100px] w-[140px] shrink-0 rounded-xl object-cover"
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold capitalize">
            Technical Specification
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex h-[148px] flex-col justify-center gap-5 rounded-xl bg-card p-6"
              >
                {spec.icon}
                <div>
                  <p className="text-base font-semibold capitalize">
                    {spec.label}
                  </p>
                  <p className="mt-2 text-base text-muted-foreground">{spec.value}</p>
                </div>
              </div>
            ))}
          </div>

          <Button
            asChild
            className="mt-16 h-[50px] w-full max-w-[290px] rounded-xl bg-brand font-inter text-base font-semibold text-white hover:bg-brand/90"
          >
            <Link to="/contact">Rent a car</Link>
          </Button>

          <h2 className="mt-16 text-2xl font-semibold capitalize">
            Car Equipment
          </h2>
          <div className="mt-10 flex flex-wrap gap-x-[60px] gap-y-4">
            {equipment.map((column, columnIndex) => (
              <ul
                key={`equipment-${String(columnIndex)}`}
                className="flex flex-col gap-[17px]"
              >
                {column.map((item) => (
                  <li
                    key={`${String(columnIndex)}-${item}`}
                    className="flex items-center gap-4 text-base capitalize text-muted-foreground"
                  >
                    <img
                      src={checkCircle}
                      alt=""
                      width={24}
                      height={24}
                      className="size-6"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
      <CarCatalog heading="Other cars" />
    </>
  );
}
