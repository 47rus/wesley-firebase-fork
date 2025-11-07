import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import PopularEvents from '@/components/sections/PopularEvents';
import EventConfigurator from '@/components/sections/EventConfigurator';
import WePlayIntro from '@/components/sections/WePlayIntro';
import ClientsSection from '@/components/sections/ClientsSection';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import LatestNews from '@/components/sections/LatestNews';
import InCijfers from '@/components/sections/InCijfers';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PopularEvents />
        <EventConfigurator />
        <WePlayIntro />
        <InCijfers />
        <ClientsSection />
        <TestimonialsCarousel />
        <LatestNews />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;