
import React from 'react';
import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'WePlayUnited - Game Events op Locatie',
  description: 'Organiseer onvergetelijke game-events op locatie met WePlayUnited. Van FIFA-toernooien tot F1-simulatoren, wij brengen de actie naar jou.',
  keywords: 'game events, FIFA toernooi, F1 simulator, VR experience, teambuilding, bedrijfsuitje',
  alternates: {
    canonical: 'https://weplayunited.com',
  },
};

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
