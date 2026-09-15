import { useParams } from "react-router";
import { DoorOpen, Fuel, Gauge, Snowflake, Users } from "lucide-react";
import checkCircle from "@/assets/icons/check-circle.svg";
import gearIcon from "@/assets/icons/gear.svg";
import thumb1 from "@/assets/images/details-thumb-1.png";
import thumb2 from "@/assets/images/details-thumb-2.png";
import thumb3 from "@/assets/images/details-thumb-3.png";
import { BookingForm } from "@/components/booking/BookingForm";
import { CarImage } from "@/components/cars/CarCard";
import { CarCatalog } from "@/components/home/CarCatalog";
import { Reveal } from "@/components/motion/Reveal";
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
      <section className="page-wrap grid gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <Reveal>
          <div>
            <h1 className="text-display capitalize">{car.name}</h1>
            <p className="mt-5 flex items-center gap-1">
              <span className="font-heading text-[40px] font-bold text-brand">
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
        </Reveal>

        <Reveal delay={80}>
          <div>
            <h2 className="font-heading text-2xl font-bold capitalize">
              Technical Specification
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex h-[148px] flex-col justify-center gap-5 rounded-2xl bg-card p-6"
                >
                  {spec.icon}
                  <div>
                    <p className="text-base font-semibold capitalize">
                      {spec.label}
                    </p>
                    <p className="mt-2 text-base text-muted-foreground">
                      {spec.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="mt-16 font-heading text-2xl font-bold capitalize">
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
        </Reveal>
      </section>

      <section className="page-wrap pb-16 lg:pb-24">
        <div className="relative isolate overflow-hidden rounded-[40px] bg-brand">
          <div className="hex-mesh pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative z-10 flex justify-center px-6 py-12 sm:px-10 lg:px-[72px] lg:py-[78px]">
            <BookingForm className="w-full lg:h-[503px]" />
          </div>
        </div>
      </section>
      <CarCatalog heading="Other cars" />
    </>
  );
}
