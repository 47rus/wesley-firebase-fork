import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SportclubHero from '@/components/sections/SportclubHero';
import SportclubProblemSolution from '@/components/sections/SportclubProblemSolution';
import SportclubPackages from '@/components/sections/SportclubPackages';
import SportclubConfiguratorNew from '@/components/sections/SportclubConfiguratorNew';
import SportclubSocialProof from '@/components/sections/SportclubSocialProof';
import SportclubFAQ from '@/components/sections/SportclubFAQ';

const SportclubsPage = () => {
  return (
    <div className="min-h-screen bg-white sportclub-page">
      <Helmet>
        <title>WePlay Sportclub Events | Official Supplier KNVB voor Gaming Events</title>
        <meta name="description" content="WePlay is de externe evenementencommissie voor voetbalclubs. Official Supplier KNVB met 500+ tevreden clubs. Van EA FC toernooien tot LED voetbal - ontzorgd jouw club!" />
        <meta name="keywords" content="WePlay, sportclub events, Official Supplier KNVB, voetbalclub evenementen, EA FC toernooi, LED voetbal" />
        <link rel="canonical" href="/sportclubs" />
      </Helmet>
      
      <Header />
      
      <main>
        <SportclubHero />
        <SportclubProblemSolution />
        <SportclubPackages />
        <div id="sportclub-configurator">
          <SportclubConfiguratorNew />
        </div>
        <SportclubSocialProof />
        <SportclubFAQ />
      </main>
      
      <Footer />
    </div>
  );
};

export default SportclubsPage;