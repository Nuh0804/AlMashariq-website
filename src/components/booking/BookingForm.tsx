import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { carTypes, cities } from "@/data/site";
import { cn } from "@/lib/utils";

export function BookingForm({
  className,
  title = "Book your car",
  variant = "light",
}: {
  className?: string;
  title?: string;
  variant?: "light" | "brand";
}) {
  const isBrand = variant === "brand";

  const fieldClass = isBrand
    ? "booking-field h-[38px] w-full rounded-xl border border-white/15 bg-brand-field px-4 text-base font-normal text-white shadow-none placeholder:text-white data-placeholder:text-white focus-visible:ring-0 [&_svg]:text-white"
    : "booking-field h-[38px] w-full rounded-xl border border-white/20 bg-white/75 px-4 text-base font-normal text-foreground shadow-none placeholder:text-foreground/50 data-placeholder:text-foreground/50 focus-visible:ring-0 dark:bg-white/10";

  return (
    <form
      className={cn(
        "flex w-full max-w-[416px] flex-col items-center gap-10 rounded-[20px] p-10",
        isBrand ? "bg-brand shadow-[0_24px_60px_rgb(0_0_0/28%)]" : "glass-card",
        className,
      )}
      onSubmit={(event) => event.preventDefault()}
    >
      <h2 className="text-center font-heading text-[24px] font-bold text-white sm:text-[28px]">
        {title}
      </h2>
      <div className="flex w-full flex-col gap-5">
        <Select>
          <SelectTrigger className={fieldClass}>
            <SelectValue placeholder="Car type" />
          </SelectTrigger>
          <SelectContent>
            {carTypes.map((type) => (
              <SelectItem key={type} value={type.toLowerCase()}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className={fieldClass}>
            <SelectValue placeholder="Place of rental" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className={fieldClass}>
            <SelectValue placeholder="Place of return" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={`return-${city}`} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          type="text"
          placeholder="Rental date"
          aria-label="Rental date"
          onFocus={(event) => {
            event.currentTarget.type = "date";
            event.currentTarget.showPicker?.();
          }}
          onBlur={(event) => {
            if (!event.currentTarget.value) event.currentTarget.type = "text";
          }}
          className={cn(
            fieldClass,
            isBrand &&
              "[color-scheme:dark] placeholder:text-white [&::-webkit-calendar-picker-indicator]:invert",
          )}
        />
        <Input
          type="text"
          placeholder="Return date"
          aria-label="Return date"
          onFocus={(event) => {
            event.currentTarget.type = "date";
            event.currentTarget.showPicker?.();
          }}
          onBlur={(event) => {
            if (!event.currentTarget.value) event.currentTarget.type = "text";
          }}
          className={cn(
            fieldClass,
            isBrand &&
              "[color-scheme:dark] placeholder:text-white [&::-webkit-calendar-picker-indicator]:invert",
          )}
        />
      </div>
      <Button
        type="submit"
        className="h-10 w-full rounded-xl bg-brand-orange font-inter text-base font-semibold text-white hover:bg-brand-orange/90"
      >
        Book now
      </Button>
    </form>
  );
}
