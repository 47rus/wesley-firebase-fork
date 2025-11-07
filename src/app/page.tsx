
import Hero from "@/components/sections/Hero";
import WePlayIntro from "@/components/sections/WePlayIntro";
import PopularEvents from "@/components/sections/PopularEvents";
import ClientsSection from "@/components/sections/ClientsSection";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import EventConfigurator from "@/components/sections/EventConfigurator";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Page() {
  return (
    <>
      <Hero />
      <WePlayIntro />
      <PopularEvents />
      <ClientsSection />
      <TestimonialsCarousel />
      <EventConfigurator />
      <FinalCTA />
    </>
  );
}
