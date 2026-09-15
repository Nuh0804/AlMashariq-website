import logoDark from "@/assets/icons/AlMashariq-logo-dark.svg";
import logoLight from "@/assets/icons/AlMashariq-logo.svg";
import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  alt = "",
}: {
  className?: string;
  alt?: string;
}) {
  return (
    <>
      <img
        src={logoLight}
        alt={alt}
        width={48}
        height={48}
        className={cn("dark:hidden", className)}
      />
      <img
        src={logoDark}
        alt={alt}
        width={48}
        height={48}
        className={cn("hidden dark:block", className)}
      />
    </>
  );
}
