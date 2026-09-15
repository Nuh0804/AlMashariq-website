import { Clock, Mail, MapPin, Phone } from "lucide-react";
import contactHero from "@/assets/images/contact-hero.png";
import { BrandLogos } from "@/components/brand/BrandLogos";
import { BookingForm } from "@/components/booking/BookingForm";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
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
      <section className="page-wrap grid items-start justify-center gap-8 py-16 lg:grid-cols-[416px_1fr] lg:py-24">
        <Reveal>
          <BookingForm variant="brand" />
        </Reveal>
        <Reveal delay={80}>
          <img
            src={contactHero}
            alt=""
            className="h-[320px] w-full rounded-2xl object-cover sm:h-[503px]"
          />
        </Reveal>
      </section>

      <section className="page-wrap grid gap-8 py-10 sm:grid-cols-2 xl:grid-cols-4">
        {contacts.map((item, index) => (
          <Reveal key={item.label} delay={index * 60}>
            <div className="flex items-center gap-4">
              <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                <item.icon className="size-7" />
              </span>
              <div>
                <p className="text-[13px] text-muted-foreground">{item.label}</p>
                <p className="mt-1 font-semibold">{item.value}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="page-wrap py-16 lg:py-24">
        <Reveal>
          <h2 className="text-section text-center">
            Latest blog posts & news
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.title} delay={index * 80}>
              <article>
                <img
                  src={post.image}
                  alt=""
                  className="h-[240px] w-full rounded-2xl object-cover"
                />
                <h3 className="mt-5 font-heading text-xl font-bold">
                  {post.title}
                </h3>
                <p className="mt-4 text-base text-muted-foreground">
                  {post.meta}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <BrandLogos />
    </>
  );
}
