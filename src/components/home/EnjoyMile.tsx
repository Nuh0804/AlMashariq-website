import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoCar from "@/assets/icons/logo-car.svg";

export function EnjoyMile() {
  return (
    <section className="page-wrap py-[60px]">
      <div className="hex-mesh relative overflow-hidden rounded-[20px] bg-brand px-6 py-12 text-white sm:px-14 sm:py-16">
        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_380px]">
          <div className="max-w-[756px]">
            <h2 className="text-[32px] font-bold leading-none sm:text-[46px]">
              Enjoy every mile with adorable companionship.
            </h2>
            <p className="mt-6 max-w-[550px] text-base text-white/80">
              Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
              bibendum ullamcorper in. Diam tincidunt tincidunt erat
            </p>
            <form
              className="mt-8 flex h-[60px] max-w-[464px] items-center rounded-full bg-white p-2.5"
              onSubmit={(event) => event.preventDefault()}
            >
              <Input
                placeholder="City"
                className="h-10 flex-1 border-0 bg-transparent text-black shadow-none focus-visible:ring-0"
              />
              <Button
                type="submit"
                className="h-10 rounded-full bg-brand-orange px-7 text-base font-semibold text-white hover:bg-brand-orange/90"
              >
                Search
              </Button>
            </form>
          </div>
          <img
            src={logoCar}
            alt=""
            className="mx-auto w-[280px] brightness-0 invert opacity-40 lg:w-[380px]"
            width={380}
            height={380}
          />
        </div>
      </div>
    </section>
  );
}
