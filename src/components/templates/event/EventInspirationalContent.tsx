import React from 'react';
import Container from '@/components/layout/Container';
import UnifiedCard from '@/components/ui/UnifiedCard';
import { brandPromises } from '@/data/brandPromises';

interface EventInspirationalContentProps {
  h1_title?: string;
  h1_content?: string;
  h1_image_naam?: string;
}

const EventInspirationalContent: React.FC<EventInspirationalContentProps> = ({ h1_title, h1_content, h1_image_naam }) => {
  if (!h1_title || !h1_content) {
    return null;
  }

  return (
    <section 
      className="relative min-h-screen h-screen flex items-center bg-gradient-to-br from-weplay-light via-white to-weplay-accent-light"
      style={{
        backgroundImage: h1_image_naam ? `url(/placeholder.svg)` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {h1_image_naam && (
        <div className="absolute inset-0 bg-black/40" />
      )}
      <Container>
        <div className="relative z-10 text-center">
          <div className="mb-16">
            <h2 className={`text-3xl lg:text-4xl font-heading font-black uppercase mb-8 tracking-tight ${h1_image_naam ? 'text-white' : 'text-weplay-text'}`}>
              {h1_title}
            </h2>
            <div className={`text-xl leading-relaxed space-y-6 font-medium ${h1_image_naam ? 'text-white/90' : 'text-weplay-text-medium'}`}>
              {h1_content.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index}>{paragraph}</p>
                )
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </Container>
    </section>
  );
};

export default EventInspirationalContent;