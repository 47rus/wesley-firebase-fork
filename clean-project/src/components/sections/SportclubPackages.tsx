import React, { useState } from 'react';
import { CheckCircle, Users, MapPin, Award, Phone } from 'lucide-react';
import Container from '@/components/layout/Container';
import WeButton from '@/components/ui/WeButton';

const SportclubPackages = () => {
  const [paymentType, setPaymentType] = useState<'direct' | 'installments'>('direct');

  const packages = [
    {
      id: 'small',
      size: '<300 leden',
      subtitle: '1 eventmoment',
      pricesDirect: 699,
      pricesInstallments: { perQuarter: 189, total: 759 },
      events: ['EA FC Toernooi + Finale in Zeist', 'Toegang tot pr-materialen', 'Ondersteuning via mail'],
      exampleClub: 'VV Chaam (230 leden, Noord-Brabant)',
      popular: false
    },
    {
      id: 'medium',
      size: '300-800 leden',
      subtitle: '2 events per seizoen',
      pricesDirect: 1299,
      pricesInstallments: { perQuarter: 324, total: 1299 },
      events: ['EA FC Toernooi + Finale in Zeist', 'Led Voetbal Toernooi', 'Toegang tot pr-materialen', 'Kortingscode Tournify', 'Telefonische ondersteuning'],
      exampleClub: 'FC Weesp (735 leden, Noord-Holland)',
      popular: true
    },
    {
      id: 'large',
      size: '>800 leden',
      subtitle: '4 events per seizoen',
      pricesDirect: 2499,
      pricesInstallments: { perQuarter: 624, total: 2499 },
      events: ['EA FC Toernooi + Finale in Zeist', 'Led Voetbal Toernooi', 'Bubbelvoetbal Event', 'FIFA Skill Games Event', 'Toegang tot pr-materialen', 'Kortingscode Tournify', 'Telefonische ondersteuning', 'Extra partnervoordelen*'],
      exampleClub: 'VV Katwijk (1500 leden, Zuid-Holland)',
      popular: false
    }
  ];

  const scrollToConfigurator = () => {
    const configurator = document.getElementById('sportclub-configurator');
    if (configurator) {
      configurator.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-heading font-black text-gray-900 mb-6 tracking-tight">
            INSPIRATIE VOOR JOUW SEIZOEN
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto mb-8">
            Ontdek wat andere clubs doen en stel vervolgens jouw eigen seizoen samen
          </p>
          
          {/* Payment Toggle */}
          <div className="inline-flex items-center bg-gray-100 border border-gray-200 rounded-xl p-1 mt-8">
            <button
              onClick={() => setPaymentType('direct')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                paymentType === 'direct'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Direct betalen
            </button>
            <button
              onClick={() => setPaymentType('installments')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                paymentType === 'installments'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              4 termijnen
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative bg-white border rounded-2xl transition-all duration-300 hover:translate-y-[-4px] ${
                pkg.popular ? 'border-2 border-orange-500 shadow-xl shadow-orange-500/10' : 'border border-gray-200 shadow-lg hover:shadow-xl'
              } flex flex-col h-full overflow-visible`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-50">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg whitespace-nowrap">
                    POPULAIR
                  </span>
                </div>
              )}
              
              {/* Fixed Height Header */}
              <div className="text-center px-8 pt-16 pb-6">
                <div className="h-16 flex items-center justify-center mb-6">
                  <h3 className="text-2xl font-heading font-black text-gray-900 text-center flex items-center gap-2">
                    <Users className="w-6 h-6 text-orange-500" />
                    {pkg.size}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 h-6 flex items-center justify-center gap-2">
                  <Award className="w-4 h-4 text-orange-500" />
                  {pkg.subtitle}
                </p>
                
                <div className="h-20 flex flex-col items-center justify-center mb-4">
                  <div className="space-y-2">
                    {paymentType === 'direct' ? (
                      <div className="mb-2">
                        <span className="text-5xl font-heading font-black text-gray-900">
                          €{pkg.pricesDirect.toLocaleString()}
                        </span>
                      </div>
                    ) : (
                      <div>
                        <div className="text-2xl font-bold text-orange-500">
                          €{pkg.pricesInstallments!.perQuarter} <span className="text-lg text-gray-600">per kwartaal</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          (€{pkg.pricesInstallments!.total.toLocaleString()} totaal)
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Content Area with Fixed Height */}
              <div className="flex-1 flex flex-col px-8">
                {/* Events List */}
                <div className="flex-1 space-y-4 mb-6">
                  {pkg.events.map((event, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800 leading-relaxed text-sm">{event}</span>
                    </div>
                  ))}
                </div>

                {/* Example Club - Fixed Height */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6 h-20 flex flex-col justify-center">
                  <h4 className="text-gray-800 font-semibold text-xs mb-1 flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-orange-500" />
                    Gekozen door:
                  </h4>
                  <p className="text-gray-600 text-sm font-medium">{pkg.exampleClub}</p>
                </div>

                {/* Fixed Bottom CTA */}
                <div className="pb-8">
                  <WeButton 
                    variant={pkg.popular ? "cta" : "outline"} 
                    size="lg" 
                    className={`w-full py-4 ${pkg.popular ? 'bg-orange-500 hover:bg-orange-600 text-white border-0' : 'border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white'}`}
                    onClick={scrollToConfigurator}
                  >
                    STEL JOUW SEIZOEN SAMEN
                  </WeButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-orange-50 rounded-2xl p-8">
          <h3 className="text-2xl font-heading font-black text-gray-900 mb-4">
            Klaar om jouw eigen seizoen <span className="text-orange-500">samen te stellen</span>?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Start de interactieve configurator en bouw het perfecte seizoen voor jouw club
          </p>
          <WeButton 
            variant="cta" 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white border-0"
            onClick={scrollToConfigurator}
          >
            START DE CONFIGURATOR
          </WeButton>
        </div>
      </Container>
    </section>
  );
};

export default SportclubPackages;