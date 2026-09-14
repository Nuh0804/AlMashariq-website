import { Clock, Mail, MapPin, Phone } from "lucide-react";
import contactHero from "@/assets/images/contact-hero.png";
import { BrandLogos } from "@/components/brand/BrandLogos";
import { BookingForm } from "@/components/booking/BookingForm";
import { PageHero } from "@/components/layout/PageHero";
import {
  contactAddress,
  contactEmail,
  contactPhone,
  openingHours,
} from "@/data/site";

const contacts = [
  { label: "Address", value: contactAddress, icon: MapPin },
  { label: "Email", value: contactEmail, icon: Mail },
  { label: "Phone", value: contactPhone, icon: Phone },
  { label: "Opening hours", value: openingHours, icon: Clock },
];

const posts = [
  {
    title: "How To Choose The Right Car",
    meta: "News / 12April 2026",
    image: contactHero,
  },
  {
    title: "Which plan is right for me?",
    meta: "News / 12April 2026",
    image: contactHero,
  },
  {
    title: "Enjoy Speed, Choice & Total Control",
    meta: "News / 12April 2026",
    image: contactHero,
  },
];

export function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" crumbs="Home / Contact Us" />
      <section className="page-wrap grid items-start justify-center gap-6 py-[60px] lg:grid-cols-[416px_1fr]">
        <BookingForm variant="brand" />
        <img
          src={contactHero}
          alt=""
          className="h-[320px] w-full rounded-[20px] object-cover sm:h-[503px]"
        />
      </section>

      <section className="page-wrap grid gap-8 py-10 sm:grid-cols-2 xl:grid-cols-4">
        {contacts.map((item) => (
          <div key={item.label} className="flex items-center gap-4">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
              <item.icon className="size-7" />
            </span>
            <div>
              <p className="text-[13px] text-black/60">{item.label}</p>
              <p className="mt-1 font-semibold">{item.value}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="page-wrap py-[60px]">
        <h2 className="text-center text-[36px] font-bold sm:text-[50px]">
          Latest blog posts & news
        </h2>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title}>
              <img
                src={post.image}
                alt=""
                className="h-[240px] w-full rounded-[16px] object-cover"
              />
              <h3 className="mt-5 text-xl font-semibold">{post.title}</h3>
              <p className="mt-4 text-base text-black/60">{post.meta}</p>
            </article>
          ))}
        </div>
      </section>
      <BrandLogos />
    </>
  );
}
