import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { HeritageSection } from "@/components/sections/heritage-section";
import { ExpeditionPillars } from "@/components/sections/expedition-pillars";
import { SafariExperience } from "@/components/sections/safari-experience";
import { GallerySection } from "@/components/sections/gallery-section";
import { DestinationShowcase } from "@/components/sections/destination-showcase";
import { EditorialSection } from "@/components/sections/editorial-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <HeritageSection />
      <ExpeditionPillars />
      <SafariExperience />
      <GallerySection />
      <DestinationShowcase />
      <EditorialSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
}
