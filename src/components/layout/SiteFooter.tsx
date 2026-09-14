import { Link } from "react-router";
import logoCar from "@/assets/icons/logo-car.svg";
import mapPin from "@/assets/icons/map-pin.svg";
import mail from "@/assets/icons/mail.svg";
import phoneCircle from "@/assets/icons/phone-circle.svg";
import facebook from "@/assets/icons/social-facebook.svg";
import instagram from "@/assets/icons/social-instagram.svg";
import socialX from "@/assets/icons/social-x.svg";
import youtube from "@/assets/icons/social-youtube.svg";
import appStore from "@/assets/icons/app-store-footer.svg";
import googlePlay from "@/assets/icons/google-play-footer.svg";
import {
  contactAddress,
  contactEmail,
  contactPhone,
  footerBlurb,
  usefulLinks,
  vehicleLinks,
} from "@/data/site";

const socials = [
  { src: facebook, label: "Facebook", href: "https://facebook.com" },
  { src: instagram, label: "Instagram", href: "https://instagram.com" },
  { src: socialX, label: "X", href: "https://x.com" },
  { src: youtube, label: "YouTube", href: "https://youtube.com" },
];

export function SiteFooter() {
  return (
    <footer className="bg-white pb-10 pt-[60px]">
      <div className="page-wrap flex flex-col gap-[60px]">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:items-center xl:justify-between">
          <Link to="/" className="flex w-[180px] items-center gap-3">
            <img
              src={logoCar}
              alt=""
              width={48}
              height={48}
              className="size-12"
            />
            <span className="font-inter text-base font-bold text-black">
              Car Rental
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-orange">
              <img
                src={mapPin}
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
            </span>
            <div className="flex flex-col leading-none">
              <p className="text-[13px] font-normal">Address</p>
              <p className="mt-1.5 text-[13px] font-semibold">
                {contactAddress}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-orange">
              <img
                src={mail}
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
            </span>
            <div className="flex flex-col leading-none">
              <p className="text-[13px] font-normal">Email</p>
              <p className="mt-1.5 text-[13px] font-semibold">{contactEmail}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              src={phoneCircle}
              alt=""
              width={40}
              height={40}
              className="size-10"
            />
            <div className="flex flex-col leading-none">
              <p className="text-[13px] font-normal">Phone</p>
              <p className="mt-1.5 text-[13px] font-semibold">{contactPhone}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex max-w-[280px] flex-col justify-between gap-6">
            <p className="text-xl font-semibold leading-7">{footerBlurb}</p>
            <div className="flex items-center gap-5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                >
                  <img
                    src={social.src}
                    alt=""
                    width={24}
                    height={24}
                    className="size-6"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-xl font-semibold">Useful links</p>
            <div className="flex flex-col gap-4 text-base leading-[26px]">
              {usefulLinks.map((link) => (
                <Link key={link.label} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-xl font-semibold">Vehicles</p>
            <div className="flex flex-col gap-4 text-base leading-[26px]">
              {vehicleLinks.map((link) => (
                <Link key={link.label} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-xl font-semibold">Download App</p>
            <div className="flex flex-col gap-6">
              <a
                href="https://www.apple.com/app-store/"
                aria-label="Download on the App Store"
              >
                <img
                  src={appStore}
                  alt="Download on the App Store"
                  className="h-[50px] w-[171px]"
                />
              </a>
              <a
                href="https://play.google.com/store"
                aria-label="Get it on Google Play"
              >
                <img
                  src={googlePlay}
                  alt="Get it on Google Play"
                  className="h-[50px] w-[171px]"
                />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center font-inter text-sm text-black/50">
          © Copyright Car Rental 2024. Design by Figma. guru
        </p>
      </div>
    </footer>
  );
}
