import { Check, ChevronDown } from "lucide-react";
import whyChoose from "@/assets/images/why-choose.jpg";
import { BookingForm } from "@/components/booking/BookingForm";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { contactPhone } from "@/data/site";

const highlights = [
  {
    title: "Variety Brands",
    body: "Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit quam natoque ornare cursus viverra odio",
  },
  {
    title: "Awesome Suport",
    body: "Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Diam quam gravida ultricies velit",
  },
  {
    title: "Maximum Freedom",
    body: "Diam quam gravida ultricies velit duis consequat integer. Est aliquam posuere vel rhoncus massa volutpat in",
  },
  {
    title: "flexibility on the go",
    body: "Vitae pretium nulla sed quam id nisl semper. Vel non in proin egestas dis.faucibus rhoncus. Iaculis dignissim aenean pellentesque nisl",
  },
];

const memories = [
  "Velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper",
  "Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum",
  "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor",
  "Quis nunc interdum gravida ullamcorper",
];

const reviews = [
  {
    name: "Emanuel Boyle",
    company: "Kuphal LLC",
    body: "Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque",
  },
  {
    name: "Emanuel Boyle",
    company: "Kuphal LLC",
    body: "Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque",
  },
  {
    name: "Emanuel Boyle",
    company: "Kuphal LLC",
    body: "Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque",
  },
];

const faqs = [
  {
    q: "How does it works?",
    a: "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla",
  },
  {
    q: "Can I rent a car without a credit card?",
    a: "Yes. Contact our support team to review alternative payment options available at your pickup location.",
  },
  {
    q: "What are the requirements for renting a car?",
    a: "A valid driver’s license, proof of identity, and a payment method on file are required at pickup.",
  },
  {
    q: "Does AlMashariq allow me to tow with or attach a hitch to the rental vehicle?",
    a: "Towing and hitch attachments are not permitted unless explicitly listed in your rental agreement.",
  },
  {
    q: "Does AlMashariq offer coverage products for purchase with my rental?",
    a: "Optional coverage products can be added during booking or at the counter before you drive away.",
  },
];

export function AboutPage() {
  return (
    <>
      <PageHero title="About Us" crumbs="Home / About Us" />
      <Reveal>
        <section className="page-wrap grid gap-10 py-16 lg:grid-cols-[360px_1fr] lg:py-24">
          <h2 className="text-section leading-tight">
            Where every drive feels extraordinary
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title}>
                <h3 className="font-heading text-[24px] font-bold capitalize">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-[382px] text-base text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="page-wrap pb-16 lg:pb-24">
          <div className="relative overflow-hidden rounded-2xl">
          <img
            src={whyChoose}
            alt=""
            className="h-[360px] w-full object-cover sm:h-[600px]"
          />
          <button
            type="button"
            className="absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white"
            aria-label="Play video"
          >
            <span className="ml-1 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
          </button>
        </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="page-wrap grid gap-10 py-10 text-center sm:grid-cols-3">
        <div>
          <p className="text-[64px] font-bold leading-none sm:text-[80px]">
            20k+
          </p>
          <p className="mt-2 text-xl font-semibold">Happy customers</p>
        </div>
        <div>
          <p className="text-[64px] font-bold leading-none sm:text-[80px]">
            540+
          </p>
          <p className="mt-2 text-xl font-semibold">Count of cars</p>
        </div>
        <div>
          <p className="text-[64px] font-bold leading-none sm:text-[80px]">
            25+
          </p>
          <p className="mt-2 text-xl font-semibold">Years of experince</p>
        </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="page-wrap grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <h2 className="text-section max-w-[643px] leading-tight">
            Unlock unforgettable memories on the road
          </h2>
          <p className="mt-8 max-w-[643px] text-base text-muted-foreground">
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
            tristique et gravida. Quis nunc interdum gravida ullamcorper
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {memories.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Check className="size-5" />
                </span>
                <p className="text-sm leading-5 text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          src={whyChoose}
          alt=""
          className="h-[360px] w-full rounded-2xl object-cover lg:h-[549px]"
        />
        </section>
      </Reveal>

      <Reveal>
        <section className="page-wrap py-16 lg:py-24">
        <h2 className="text-section text-center">
          Reviews from our customers
        </h2>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={`${review.name}-${String(index)}`}
              className="overflow-hidden rounded-2xl bg-card"
            >
              <div className="relative px-9 pt-16 pb-20">
                <p className="font-serif text-6xl leading-none text-brand">“</p>
                <p className="mt-6 text-base leading-7 text-muted-foreground">
                  {review.body}
                </p>
                <img
                  src={whyChoose}
                  alt=""
                  className="absolute bottom-[-42px] left-1/2 size-[84px] -translate-x-1/2 rounded-full object-cover"
                />
              </div>
              <div className="bg-brand px-6 pt-14 pb-8 text-center text-white">
                <p className="text-base">{review.company}</p>
                <p className="mt-1 text-lg font-semibold">{review.name}</p>
              </div>
            </article>
          ))}
        </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="page-wrap py-16 lg:py-24">
        <h2 className="text-section text-center">
          Top AlMashariq Questions
        </h2>
        <div className="mt-16 space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={faq.q}
              className="rounded-2xl border border-border bg-card px-6 py-8 sm:px-10"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-xl font-semibold [&::-webkit-details-marker]:hidden">
                {faq.q}
                <ChevronDown className="size-6 shrink-0 text-muted-foreground" />
              </summary>
              <p className="mt-6 max-w-[1216px] text-base leading-6 text-muted-foreground">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="page-wrap pb-16 lg:pb-24">
          <div className="relative isolate overflow-hidden rounded-[40px] bg-brand text-white">
            <img
              src={whyChoose}
              alt=""
              className="pointer-events-none absolute inset-0 size-full object-cover opacity-30"
            />
            <div className="relative z-10 grid items-center gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1fr_416px] lg:px-[72px] lg:py-[78px]">
              <div className="max-w-[586px]">
                <h2 className="text-section text-white">Looking for a car?</h2>
                <p className="mt-4 text-[32px] font-semibold">{contactPhone}</p>
                <p className="mt-6 max-w-[464px] text-base text-white/80">
                  Aliquam adipiscing velit semper morbi. Purus non eu cursus
                  porttitor tristique et gravida.
                </p>
              </div>
              <BookingForm className="w-full lg:h-[503px]" />
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
