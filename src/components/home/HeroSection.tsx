import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/booking/BookingForm";
import heroCar from "@/assets/images/hero-car.png";
import heroOverlay from "@/assets/images/hero-overlay.png";

export function HeroSection() {
  return (
    <section className="page-wrap pt-4">
      <div className="relative isolate overflow-hidden rounded-[40px] bg-brand text-white">
        <img
          src={heroOverlay}
          alt=""
          className="pointer-events-none absolute inset-0 size-full object-cover"
        />
        <img
          src={heroCar}
          alt=""
          className="hero-enter-car pointer-events-none absolute hidden object-contain object-center lg:block"
          style={{
            left: "26.58%",
            top: "36.82%",
            width: "53.86%",
            height: "63.33%",
          }}
        />
        <div className="relative z-10 flex flex-col gap-10 px-6 py-12 sm:px-10 lg:h-[660px] lg:flex-row lg:items-start lg:justify-between lg:px-[72px] lg:py-[78px]">
          <div className="max-w-[686px] lg:pt-[90px]">
            <h1 className="hero-enter text-display font-bold text-white [animation-delay:80ms]">
              Experience the road{" "}
              <span className="lg:block">like never before</span>
            </h1>
            <p className="hero-enter mt-7 max-w-[464px] text-base leading-7 text-white/80 [animation-delay:160ms]">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus
              porttitor tristique et gravida. Quis nunc interdum gravida
              ullamcorper
            </p>
            <Button
              asChild
              className="hero-enter mt-8 h-10 w-[154px] rounded-xl bg-brand-orange px-7 font-inter text-base font-semibold text-white hover:bg-brand-orange/90 [animation-delay:240ms]"
            >
              <Link to="/vehicles">View all cars</Link>
            </Button>
          </div>
          <BookingForm className="hero-enter relative z-10 w-full shadow-none lg:h-[503px] lg:w-[416px] lg:shrink-0 [animation-delay:280ms]" />
        </div>
      </div>
    </section>
  );
}
