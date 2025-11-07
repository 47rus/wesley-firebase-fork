import React from 'react';
import Container from '@/components/layout/Container';
import WeButton from '@/components/ui/WeButton';
import { Phone } from 'lucide-react';
import { scrollToBookingForm } from '@/utils/scrollUtils';

interface EventFinalCtaProps {
  hero_title: string;
}

const EventFinalCta: React.FC<EventFinalCtaProps> = ({ hero_title }) => {
  return (
    <section className="py-24 bg-gradient-to-br from-weplay-text to-weplay-text/90 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(233,0,199,0.3),transparent_70%)]"></div>
      <Container>
        <div className="text-center space-y-10 relative">
          <h2 className="text-4xl lg:text-5xl font-heading font-black uppercase tracking-tight">
            Klaar voor jouw {hero_title}?
          </h2>
          <p className="text-2xl text-weplay-light max-w-3xl mx-auto font-medium">
            Binnen 24 uur een persoonlijke offerte in je mailbox
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <WeButton
              variant="primary"
              size="xl"
              onClick={() => scrollToBookingForm()}
            >
              VRIJBLIJVEND VOORSTEL
            </WeButton>
            <WeButton
              variant="outline"
              size="xl"
              icon={Phone}
              className="border-white text-white hover:bg-white hover:text-weplay-text"
              onClick={() => window.open('tel:0208088670')}
            >
              020 808 8670
            </WeButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EventFinalCta;