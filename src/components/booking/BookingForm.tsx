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
    ? "h-[38px] w-full rounded-xl border-0 bg-brand-field px-4 text-base font-normal text-white shadow-none placeholder:text-white data-placeholder:text-white [&_svg]:text-white"
    : "h-[38px] w-full rounded-xl border-0 bg-[#fafafa] px-4 text-base font-normal text-black shadow-none placeholder:text-black/50 data-placeholder:text-black/50";

  return (
    <form
      className={cn(
        "flex w-full max-w-[416px] flex-col items-center gap-10 rounded-[20px] p-10",
        isBrand ? "bg-brand" : "bg-white",
        className,
      )}
      onSubmit={(event) => event.preventDefault()}
    >
      <h2
        className={cn(
          "text-center text-[24px] font-semibold sm:text-[28px]",
          isBrand ? "text-white" : "text-black",
        )}
      >
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
