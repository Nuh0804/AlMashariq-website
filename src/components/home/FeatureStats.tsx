import { MapPin, Car, Wallet } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const features = [
  {
    title: "Availability",
    body: "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis",
    icon: MapPin,
  },
  {
    title: "Comfort",
    body: "Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis",
    icon: Car,
  },
  {
    title: "Savings",
    body: "Pretium convallis id diam sed commodo vestibulum lobortis volutpat",
    icon: Wallet,
  },
];

export function FeatureStats() {
  return (
    <section className="page-wrap grid gap-10 py-16 md:grid-cols-3 lg:py-24">
      {features.map((feature, index) => (
        <Reveal key={feature.title} delay={index * 90}>
          <div className="flex flex-col items-center text-center">
            <feature.icon className="size-16" strokeWidth={1.4} />
            <h3 className="mt-5 font-heading text-2xl font-bold">
              {feature.title}
            </h3>
            <p className="mt-7 max-w-[357px] text-base leading-6 text-muted-foreground">
              {feature.body}
            </p>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
