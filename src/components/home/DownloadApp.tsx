import appStore from "@/assets/icons/app-store.svg";
import googlePlay from "@/assets/icons/google-play.svg";
import iphoneFrame from "@/assets/images/iphone-frame.png";

export function DownloadApp() {
  return (
    <section className="page-wrap grid items-center gap-12 py-[45px] lg:grid-cols-[1fr_auto] lg:gap-[80px]">
      <div className="max-w-[536px]">
        <h2 className="max-w-[314px] text-[36px] font-bold leading-none sm:text-[50px]">
          Download mobile app
        </h2>
        <p className="mt-10 line-clamp-4 text-base leading-6 text-black/60">
          Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus
          turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet
          cras hendrerit enim condimentum. Condimentum interdum risus bibendum
          urna. Augue aliquet varius faucibus ut integer tristique ut.
        </p>
        <div className="mt-[60px] flex flex-wrap gap-6">
          <a
            href="https://www.apple.com/app-store/"
            aria-label="Download on the App Store"
          >
            <img
              src={appStore}
              alt="Download on the App Store"
              className="h-[50px] w-[173px]"
            />
          </a>
          <a
            href="https://play.google.com/store"
            aria-label="Get it on Google Play"
          >
            <img
              src={googlePlay}
              alt="Get it on Google Play"
              className="h-[50px] w-[173px]"
            />
          </a>
        </div>
      </div>
      <div className="relative mx-auto h-[420px] w-[300px] sm:h-[540px] sm:w-[380px]">
        <img
          src={iphoneFrame}
          alt=""
          className="absolute top-0 right-0 h-[86%] w-auto rotate-[8deg]"
        />
        <img
          src={iphoneFrame}
          alt="Car Rental mobile app"
          className="absolute bottom-0 left-0 h-[90%] w-auto"
        />
      </div>
    </section>
  );
}
