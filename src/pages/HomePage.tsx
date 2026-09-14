import { CarCatalog } from "@/components/home/CarCatalog";
import { DownloadApp } from "@/components/home/DownloadApp";
import { EnjoyMile } from "@/components/home/EnjoyMile";
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
      <CarCatalog />
      <FactsBanner />
      <DownloadApp />
      <EnjoyMile />
    </>
  );
}
