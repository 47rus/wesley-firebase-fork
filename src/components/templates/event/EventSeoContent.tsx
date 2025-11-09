import React from 'react';
import Container from '@/components/layout/Container';
import WeButton from '@/components/ui/WeButton';
import { ArrowRight } from 'lucide-react';
import { scrollToBookingForm } from '@/utils/scrollUtils';
import Image from 'next/image';

interface SeoContentItem {
  title: string;
  text: string;
  image?: string;
}

interface EventSeoContentProps {
  content: SeoContentItem[];
  event_emoji: string;
}

const EventSeoContent: React.FC<EventSeoContentProps> = ({ content, event_emoji }) => {
  if (!content || content.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-gradient-to-br from-weplay-light via-white to-weplay-accent-light">
      <Container>
        <div className="space-y-20">
          {content.map((item, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h2 className="text-3xl lg:text-4xl font-heading font-black text-weplay-text mb-6 uppercase tracking-tight">
                  {item.title}
                </h2>
                <div className="text-lg text-weplay-text-medium leading-relaxed space-y-4 font-medium mb-8">
                  {item.text.split('\n').slice(0, 2).map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
                <WeButton 
                  variant="outline" 
                  size="lg" 
                  icon={ArrowRight} 
                  iconPosition="right"
                  onClick={() => scrollToBookingForm()}
                >
                  VRIJBLIJVEND VOORSTEL
                </WeButton>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                {item.image ? (
                  <div className="relative bg-gradient-to-br from-weplay-primary/10 to-weplay-accent/10 rounded-3xl aspect-video flex items-center justify-center hover:scale-105 transition-transform duration-300 border-2 border-white/50 shadow-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-weplay-primary/10 to-weplay-dark/10 rounded-3xl aspect-video flex items-center justify-center hover:scale-105 transition-transform duration-300 border-2 border-white/50 shadow-xl">
                    <div className="text-center animate-float">
                      <div className="text-8xl">{event_emoji}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EventSeoContent;