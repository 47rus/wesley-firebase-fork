
import React from 'react';
import Container from '@/components/layout/Container';
import UnifiedCard from '@/components/ui/UnifiedCard';
import { LogoList } from './LogoList';

const ClientsSection = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center">
          {/* Bridge text */}
          <div className="mb-12">
            <p className="text-lg text-weplay-text-medium mb-4">
              Van sportclubs tot non-profits en van scholen tot bedrijven
            </p>
            <h2 className="text-4xl lg:text-5xl font-heading font-black text-weplay-text mb-6 leading-tight uppercase">
              VERTROUWD DOOR <span className="text-weplay-primary">500+</span> ORGANISATIES
            </h2>
          </div>
          
          {/* Client logos in unified card */}
          <UnifiedCard variant="default" className="max-w-5xl mx-auto">
            <LogoList />
          </UnifiedCard>

        </div>
      </Container>
    </section>
  );
};

export default ClientsSection;
