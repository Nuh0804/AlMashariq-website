import { CarCatalog } from "@/components/home/CarCatalog";
import { FactsBanner } from "@/components/home/FactsBanner";
import { FeatureStats } from "@/components/home/FeatureStats";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyChoose } from "@/components/home/WhyChoose";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureStats />
      <WhyChoose />
      <CarCatalog cardClassName="bg-background" />
      <FactsBanner />
    </>
  );
}
