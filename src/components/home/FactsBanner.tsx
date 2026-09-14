import { Car, Users, CalendarDays, Gauge } from "lucide-react";
import logoCar from "@/assets/icons/AlMashariq-logo.svg";

const facts = [
  { value: "540+", label: "Cars", icon: Car },
  { value: "20k+", label: "Customers", icon: Users },
  { value: "25+", label: "Years", icon: CalendarDays },
  { value: "20m+", label: "Miles", icon: Gauge },
];

export function FactsBanner() {
  return (
    <section className="page-wrap py-[60px]">
      <div className="hex-mesh relative overflow-hidden rounded-[20px] bg-brand px-6 py-12 text-white sm:px-12 sm:py-16">
        <img
          src={logoCar}
          alt=""
          className="pointer-events-none absolute bottom-[-20%] left-1/2 hidden w-[520px] -translate-x-1/2 opacity-20 brightness-0 invert lg:block"
        />
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-[36px] font-bold sm:text-[50px]">
            Facts In Numbers
          </h2>
          <p className="mt-4 max-w-[712px] text-base text-white/80">
            Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
            bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper
            fermentum
          </p>
          <div className="mt-10 grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-center gap-4 rounded-[16px] bg-white px-5 py-4 text-left text-black"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-orange text-white">
                  <fact.icon className="size-6" />
                </span>
                <div>
                  <p className="text-2xl font-semibold">{fact.value}</p>
                  <p className="text-base text-black/70">{fact.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
