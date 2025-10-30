import type { Metadata } from 'next';
import SportclubHero from '@/components/sections/SportclubHero';
import SportclubProblemSolution from '@/components/sections/SportclubProblemSolution';
import SportclubPackages from '@/components/sections/SportclubPackages';
import SportclubConfiguratorNew from '@/components/sections/SportclubConfiguratorNew';
import SportclubSocialProof from '@/components/sections/SportclubSocialProof';
import SportclubFAQ from '@/components/sections/SportclubFAQ';

export const metadata: Metadata = {
  title: 'WePlay Sportclub Events | Official Supplier KNVB voor Gaming Events',
  description: 'WePlay is de externe evenementencommissie voor voetbalclubs. Official Supplier KNVB met 500+ tevreden clubs. Van EA FC toernooien tot LED voetbal - ontzorgd jouw club!',
  keywords: 'WePlay, sportclub events, Official Supplier KNVB, voetbalclub evenementen, EA FC toernooi, LED voetbal',
};

const SportclubsPage = () => {
  return (
    <>
      <SportclubHero />
      <SportclubProblemSolution />
      <SportclubPackages />
      <div id="sportclub-configurator">
        <SportclubConfiguratorNew />
      </div>
      <SportclubSocialProof />
      <SportclubFAQ />
    </>
  );
};

export default SportclubsPage;
