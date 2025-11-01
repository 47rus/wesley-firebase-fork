
import React from 'react';
import Container from '@/components/layout/Container';
import { WeCard, WeCardContent } from '@/components/ui/WeCard';
import WeButton from '@/components/ui/WeButton';
import { ArrowRight, Shield, Clock, Users, Star, Trophy } from 'lucide-react';
import { brandPromises } from '@/data/brandPromises';

interface EventAboutProps {
  event_emoji: string;
  hero_title: string;
  wat_is_beschrijving: string;
  wat_is_image?: string;
}

const EventAbout: React.FC<EventAboutProps> = ({
  event_emoji,
  hero_title,
  wat_is_beschrijving,
  wat_is_image
}) => {
  // Split description into shorter, more digestible paragraphs
  const paragraphs = wat_is_beschrijving.split('\n').filter(p => p.trim()).slice(0, 2); // Limit to 2 paragraphs for cleaner design
  
  return (
    <section className="py-24 bg-gradient-to-br from-white via-weplay-light to-weplay-accent-light">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-heading font-black text-weplay-text leading-tight tracking-tight">
                WAT IS{' '}
                <span className="bg-gradient-to-r from-weplay-primary to-weplay-accent bg-clip-text text-transparent">
                  {hero_title.toUpperCase()}
                </span>
                ?
              </h2>
              <div className="w-24 h-2 bg-gradient-to-r from-weplay-primary to-weplay-accent rounded-full"></div>
            </div>

            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-xl text-weplay-text-medium leading-relaxed font-medium">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Merkbeloftes */}
            <div className="grid grid-cols-1 gap-6">
              {brandPromises.map((promise, index) => {
                const IconComponent = promise.icon;
                return (
                  <WeCard key={index} className="border-none bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300">
                    <WeCardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${promise.color} shadow-lg flex-shrink-0`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-heading font-black text-weplay-text mb-2 uppercase tracking-wide">
                            {promise.title}
                          </div>
                        </div>
                      </div>
                    </WeCardContent>
                  </WeCard>
                );
              })}
            </div>

            <WeButton 
              variant="primary" 
              size="xl" 
              icon={ArrowRight} 
              iconPosition="right"
              className="shadow-xl font-black tracking-wide"
            >
              BOEK NU JE BUBBELVOETBAL
            </WeButton>
          </div>
          
          {/* Visual section */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-weplay-primary/20 to-weplay-accent/20 rounded-3xl blur-2xl opacity-60"></div>
            
            {wat_is_image ? (
              <div className="relative bg-gradient-to-br from-weplay-primary/10 to-weplay-accent/10 rounded-3xl aspect-square flex items-center justify-center hover:scale-105 transition-transform duration-300 border-2 border-white/50 backdrop-blur-sm shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="text-8xl animate-[float_4s_ease-in-out_infinite] filter drop-shadow-lg">{event_emoji}</div>
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-weplay-primary/20">
                    <span className="text-weplay-text font-bold text-lg">Afbeelding: {wat_is_image}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative bg-gradient-to-br from-weplay-primary/15 to-weplay-accent/15 rounded-3xl aspect-square flex items-center justify-center hover:scale-105 transition-transform duration-300 border-2 border-white/50 backdrop-blur-sm overflow-hidden shadow-2xl">
                <div className="text-center space-y-8 relative z-10">
                  <div className="text-9xl animate-[float_4s_ease-in-out_infinite] filter drop-shadow-2xl">
                    {event_emoji}
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-weplay-primary/20">
                    <h3 className="text-2xl font-heading font-black text-weplay-primary mb-3 uppercase tracking-wide">
                      Bubbelvoetbal
                    </h3>
                    <p className="text-weplay-text-medium font-bold text-lg">
                      Pure Fun & Teambuilding
                    </p>
                  </div>
                </div>
                
                {/* Background decoration */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-weplay-primary/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-weplay-accent/10 rounded-full blur-xl"></div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EventAbout;
