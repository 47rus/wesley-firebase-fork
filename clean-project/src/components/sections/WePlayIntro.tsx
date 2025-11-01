
import React from 'react';
import { ArrowRight } from 'lucide-react';
import WeButton from '@/components/ui/WeButton';
import UnifiedCard from '@/components/ui/UnifiedCard';
import Container from '@/components/layout/Container';
import { brandPromises } from '@/data/brandPromises';

const WePlayIntro = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-weplay-light via-white to-weplay-accent-light">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-weplay-text mb-6 leading-tight uppercase">
            WAT WIJ ONZE KLANTEN <span className="text-weplay-primary">BELOVEN</span>
          </h2>
          <p className="text-lg lg:text-xl font-sans font-medium text-weplay-text-medium max-w-3xl mx-auto">
            Wij verenigen mensen middels game-events. En dat doen we zowel offline als online, met en zonder bewegen. Met ruim 2000 georganiseerde events sinds onze oprichting in 2017 en met een team van twintig man, zijn wij de grootste en bekendste aanbieder van game-events in Nederland en België. Onze drie merkbeloften:
          </p>
        </div>
        
        {/* Brand Promises - Using UnifiedCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {brandPromises.map((promise, index) => (
            <UnifiedCard
              key={index}
              hover
              variant="default"
              icon={promise.icon}
              title={promise.title}
              iconBgColor={promise.color}
              iconColor="text-white"
            />
          ))}
        </div>
        
        <div className="text-center">
          <WeButton 
            variant="primary" 
            size="lg" 
            icon={ArrowRight}
            iconPosition="right"
          >
            ONTDEK AL ONZE EVENTS
          </WeButton>
        </div>
      </Container>
    </section>
  );
};

export default WePlayIntro;
