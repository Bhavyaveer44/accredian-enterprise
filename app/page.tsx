import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ClientLogos from "@/components/sections/ClientLogos";
import DomainSolutions from "@/components/sections/DomainSolutions";
import DeliveryProcess from "@/components/sections/DeliveryProcess";
import Testimonials from "@/components/sections/Testimonials";
import FaqSection from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ClientLogos />
      <DomainSolutions />
      <DeliveryProcess />
      <Testimonials />
      <FaqSection />
    </>
  );
}