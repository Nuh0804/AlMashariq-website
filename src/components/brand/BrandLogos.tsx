import audi from "@/assets/logos/audi.svg";
import bmw from "@/assets/logos/bmw.svg";
import ford from "@/assets/logos/ford.svg";
import jeep from "@/assets/logos/jeep.svg";
import mercedes from "@/assets/logos/mercedes.svg";
import toyota from "@/assets/logos/toyota.svg";

const logos = [
  { src: toyota, alt: "Toyota", className: "h-[54px] w-[82px]" },
  { src: ford, alt: "Ford", className: "h-[44px] w-[115px]" },
  { src: mercedes, alt: "Mercedes-Benz", className: "h-[54px] w-[55px]" },
  { src: jeep, alt: "Jeep", className: "h-[44px] w-[109px]" },
  { src: bmw, alt: "BMW", className: "h-[54px] w-[55px]" },
  { src: audi, alt: "Audi", className: "h-[42px] w-[124px]" },
];

export function BrandLogos() {
  return (
    <section className="page-wrap py-[60px]">
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 rounded-[40px] bg-white px-6 py-10 sm:justify-between sm:px-10 sm:py-[60px]">
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className={`object-contain object-center ${logo.className}`}
          />
        ))}
      </div>
    </section>
  );
}
