
import React from 'react';
import { Settings, Users, MapPin, Calculator, ArrowRight } from 'lucide-react';
import { WeCard, WeCardContent } from '@/components/ui/WeCard';
import WeButton from '@/components/ui/WeButton';
import Container from '@/components/layout/Container';

const EventConfigurator = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-weplay-primary mb-6">
            <Settings className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-weplay-text mb-6 leading-tight">
            STEL JE PERFECT EVENT SAMEN
          </h2>
          
          <p className="text-lg text-weplay-text-medium max-w-3xl mx-auto leading-relaxed">
            Configureer je event op maat. Kies uit onze game-events, bepaal de groepsgrootte en voeg extra services toe voor een onvergetelijke ervaring.
          </p>
        </div>

        <div className="flex items-center justify-center mb-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-weplay-primary text-white font-bold">
              1
            </div>
            <div className="w-16 h-1 bg-gray-200"></div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-400 font-bold">
              2
            </div>
            <div className="w-16 h-1 bg-gray-200"></div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-400 font-bold">
              3
            </div>
            <div className="w-16 h-1 bg-gray-200"></div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-400 font-bold">
              4
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading font-bold text-weplay-text mb-8">
              Kies je events
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Bubbelvoetbal', players: '8-20 spelers', price: '€299' },
                { name: 'FIFA Toernooi', players: '4-32 spelers', price: '€199' },
                { name: 'F1 Simulator', players: '1-50 spelers', price: '€399' },
                { name: 'Fortnite', players: '4-16 spelers', price: '€249' },
                { name: 'VR Brillen', players: '1-12 spelers', price: '€349' },
                { name: 'Just Dance', players: '2-20 spelers', price: '€179' },
                { name: 'LED Voetbal', players: '6-16 spelers', price: '€329' },
                { name: 'Lasergamen', players: '6-24 spelers', price: '€279' }
              ].map((event, index) => (
                <WeCard key={index} className="border-2 border-gray-200 hover:border-weplay-primary/50 transition-colors cursor-pointer">
                  <WeCardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-heading font-bold text-weplay-text text-lg mb-1">
                          {event.name}
                        </h4>
                        <p className="text-weplay-text-medium text-sm">
                          {event.players}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-weplay-primary">
                          {event.price}
                        </div>
                        <div className="text-xs text-weplay-text-medium">
                          vanaf
                        </div>
                      </div>
                    </div>
                  </WeCardContent>
                </WeCard>
              ))}
            </div>

            {/* Updated navigation buttons to standard */}
            <div className="flex justify-between mt-8">
              <WeButton variant="outline" size="lg" className="text-weplay-text-medium">
                Vorige
              </WeButton>
              <WeButton 
                variant="primary" 
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                Volgende
              </WeButton>
            </div>
          </div>

          {/* Right Column - Configuration Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <WeCard className="border-2 border-weplay-primary/20">
                <WeCardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold text-weplay-text mb-6">
                    Jouw configuratie
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-weplay-primary" />
                      <div>
                        <div className="font-medium text-weplay-text">Aantal deelnemers</div>
                        <div className="text-weplay-text-medium text-sm">10</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-weplay-primary" />
                      <div>
                        <div className="font-medium text-weplay-text">Locatie</div>
                        <div className="text-weplay-text-medium text-sm">Bij klant</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 mt-6 pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-weplay-text">Totaal indicatie:</span>
                      <span className="text-2xl font-bold text-weplay-primary">€0</span>
                    </div>
                    <p className="text-xs text-weplay-text-medium mt-1">
                      *Definitieve prijs na offerte aanvraag
                    </p>
                  </div>
                </WeCardContent>
              </WeCard>
            </div>
          </div>
        </div>

        {/* Coming Soon Notice */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-weplay-primary/10 border border-weplay-primary/20">
            <Calculator className="w-5 h-5 text-weplay-primary mr-2" />
            <span className="text-weplay-primary font-medium">
              Interactieve configurator komt binnenkort beschikbaar
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EventConfigurator;
