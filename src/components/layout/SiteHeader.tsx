import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, Moon, Sun } from "lucide-react";
import phoneIcon from "@/assets/icons/phone.svg";
import { BrandMark } from "@/components/brand/BrandMark";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { helpPhone, navLinks } from "@/data/site";
import { useTheme } from "@/hooks/theme-context";

function Logo() {
  return (
    <NavLink to="/" className="flex w-[180px] shrink-0 items-center gap-3">
      <BrandMark className="size-12" />
      <span className="font-inter text-base font-bold text-foreground">
        AlMashariq
      </span>
    </NavLink>
  );
}

function HelpPhone() {
  return (
    <a
      href={`tel:${helpPhone.replaceAll(" ", "")}`}
      className="flex items-center gap-3"
    >
      <span className="flex size-10 items-center justify-center rounded-full bg-brand">
        <img src={phoneIcon} alt="" width={24} height={24} className="size-6" />
      </span>
      <span className="flex h-10 flex-col justify-center">
        <span className="text-[13px] leading-none text-foreground">
          Need help?
        </span>
        <span className="mt-1.5 text-[13px] font-semibold leading-none text-foreground">
          {helpPhone}
        </span>
      </span>
    </a>
  );
}

function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon-lg"
      className="rounded-full"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </Button>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/15 bg-background/70 backdrop-blur-lg">
      <div className="page-wrap flex h-[72px] items-center justify-between gap-4 lg:h-[104px]">
        <Logo />

        <nav className="hidden items-start gap-5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `px-3 py-1 font-inter text-lg text-foreground ${isActive ? "font-bold" : "font-medium"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <HelpPhone />
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-lg"
                aria-label="Open menu"
              >
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,320px)] p-6">
              <SheetHeader className="p-0">
                <SheetTitle className="font-inter text-left text-base font-bold">
                  AlMashariq
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4" aria-label="Mobile">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-inter text-lg ${isActive ? "font-bold" : "font-medium"}`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
              <div className="mt-8">
                <HelpPhone />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
