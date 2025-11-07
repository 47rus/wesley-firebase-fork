import React from 'react';
import Container from '@/components/layout/Container';
import { WeCard, WeCardContent } from '@/components/ui/WeCard';
import WeButton from '@/components/ui/WeButton';
import { ArrowRight } from 'lucide-react';
import { scrollToBookingForm } from '@/utils/scrollUtils';

interface RelatedEvent {
  name: string;
  emoji: string;
  price: number;
}

interface EventRelatedEventsProps {
  events: RelatedEvent[];
}

const EventRelatedEvents: React.FC<EventRelatedEventsProps> = ({ events }) => {
  if (!events || events.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-black text-weplay-text mb-6 tracking-tight">
            Vaak gecombineerd met
          </h2>
          <p className="text-lg text-weplay-text-medium">
            Maak je event nog completer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <WeCard key={index} className="text-center group hover:shadow-weplay-glow transition-all duration-300 cursor-pointer" hover>
              <WeCardContent className="p-8 space-y-6">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{event.emoji}</div>
                <h3 className="font-heading font-bold text-xl text-weplay-text">{event.name}</h3>
                <div className="text-3xl font-heading font-black text-weplay-primary">€{event.price}</div>
                <WeButton 
                  variant="outline" 
                  size="md"
                  icon={ArrowRight}
                  iconPosition="right"
                  onClick={() => scrollToBookingForm()}
                >
                  VRIJBLIJVEND VOORSTEL
                </WeButton>
              </WeCardContent>
            </WeCard>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <WeButton 
            variant="primary" 
            size="lg" 
            icon={ArrowRight} 
            iconPosition="right"
            onClick={() => scrollToBookingForm()}
          >
            VRIJBLIJVEND VOORSTEL
          </WeButton>
        </div>
      </Container>
    </section>
  );
};

export default EventRelatedEvents;