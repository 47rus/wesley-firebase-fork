import React from 'react';
import { ArrowRight, Trophy, Car, Gamepad2, Glasses, Settings } from 'lucide-react';
import WeButton from '@/components/ui/WeButton';
import { WeCard, WeCardContent } from '@/components/ui/WeCard';
import WeBadge from '@/components/ui/WeBadge';
import Container from '@/components/layout/Container';

const PopularEvents = () => {
  const events = [
    {
      id: 1,
      name: 'Bubbelvoetbal',
      price: 299,
      icon: '🫧',
      iconComponent: Trophy,
      badge: 'Meest geboekt bij sportclubs',
      badgeColor: 'success' as const,
      description: 'Voetbal in opblaasbare bellen',
      features: ['8-20 spelers', '2 uur spelen', 'Inclusief scheidsrechter']
    },
    {
      id: 2,
      name: 'FIFA Toernooi',
      price: 199,
      icon: '🏆',
      iconComponent: Gamepad2,
      badge: 'Perfect voor alle groepen',
      badgeColor: 'primary' as const,
      description: 'Professioneel gaming toernooi',
      features: ['32 spelers max', '4 PS5 consoles', 'Toernooi bracket']
    },
    {
      id: 3,
      name: 'F1 Simulator',
      price: 399,
      icon: '🏎️',
      iconComponent: Car,
      badge: 'Trending bij bedrijven',
      badgeColor: 'warning' as const,
      description: 'Realistische racesimulator',
      features: ['4 simulators', 'Grand Prix opzet', 'Live leaderboard']
    },
    {
      id: 4,
      name: 'VR Brillen',
      price: 349,
      icon: '🥽',
      iconComponent: Glasses,
      badge: 'Populair bij scholen',
      badgeColor: 'default' as const,
      description: 'Virtual Reality ervaring',
      features: ['12 VR headsets', 'Educatieve games', 'Begeleiding']
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-weplay-text mb-6 leading-tight">
            ONZE POPULAIRSTE
            <br />
            <span className="text-weplay-primary">
              EVENTS
            </span>
          </h2>
          <p className="text-lg text-weplay-text-medium max-w-2xl mx-auto leading-relaxed">
            De top 4 events die overal een hit zijn. Van sportclubs tot bedrijven, 
            deze activiteiten zorgen altijd voor onvergetelijke momenten.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {events.map((event, index) => {
            const IconComponent = event.iconComponent;
            return (
              <WeCard 
                key={event.id} 
                hover 
                className="group relative overflow-hidden border-2 hover:border-weplay-primary/50"
              >
                <WeCardContent className="p-6">
                  {/* Badge */}
                  <div className="mb-4">
                    <WeBadge variant={event.badgeColor} size="sm">
                      {event.badge}
                    </WeBadge>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl group-hover:animate-bounce-slow">
                      {event.icon}
                    </div>
                    <IconComponent className="w-8 h-8 text-weplay-primary group-hover:text-weplay-dark transition-colors" />
                  </div>
                  
                  <h3 className="text-lg font-heading font-bold text-weplay-text mb-2">
                    {event.name}
                  </h3>
                  <p className="text-weplay-text-medium text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <ul className="space-y-1 mb-6 text-sm text-weplay-text-medium">
                    {event.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-weplay-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-xl font-bold text-weplay-text mb-4">
                    €{event.price}
                    <span className="text-sm font-normal text-weplay-text-medium ml-1">vanaf</span>
                  </div>
                  
                  {/* Updated CTA - Standardized */}
                  <WeButton 
                    variant="outline" 
                    size="lg" 
                    icon={ArrowRight}
                    iconPosition="right"
                    className="w-full group-hover:bg-weplay-primary group-hover:text-white group-hover:border-weplay-primary"
                  >
                    Meer info
                  </WeButton>
                </WeCardContent>
              </WeCard>
            );
          })}
        </div>

        {/* Bottom CTAs - Updated to standard */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WeButton 
              variant="outline" 
              size="lg" 
              icon={ArrowRight} 
              iconPosition="right"
            >
              Bekijk alle 15+ events
            </WeButton>
            <WeButton 
              variant="primary" 
              size="lg" 
              icon={ArrowRight}
              iconPosition="right"
            >
              Configureer je event
            </WeButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PopularEvents;
