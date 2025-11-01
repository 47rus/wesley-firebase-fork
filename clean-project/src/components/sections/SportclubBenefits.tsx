import React from 'react';
import { 
  Users, Clock, Shield, Award, Target, Heart, CheckCircle, 
  TrendingUp, Handshake, Calendar, Phone, Star, Zap, Gift 
} from 'lucide-react';
import Container from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';
import WeButton from '@/components/ui/WeButton';

const SportclubBenefits = () => {
  const mainBenefits = [
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Verhoog ledenbinding',
      description: 'Events die leden echt enthousiast maken en de clubcultuur versterken',
      features: ['Hogere opkomst bij clubevenementen', 'Meer betrokkenheid van ouders', 'Sterkere gemeenschapszin'],
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: 'Bespaar tijd & stress',
      description: 'Wij regelen alles van A tot Z, jij hoeft alleen te genieten van het resultaat',
      features: ['Geen organisatiestress', 'Volledige ontzorging', 'Professionele uitvoering'],
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Genereer extra inkomsten',
      description: 'Onze events trekken sponsoren aan en verhogen de zichtbaarheid van je club',
      features: ['Attractief voor sponsoren', 'Meer zichtbaarheid', 'Nieuwe inkomstenbronnen'],
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ];

  const supportFeatures = [
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: 'KNVB Gecertificeerd',
      description: 'Official Supplier status voor volledige zekerheid'
    },
    {
      icon: <Award className="w-6 h-6 text-orange-500" />,
      title: 'Ervaren team',
      description: '7+ jaar ervaring met 2000+ succesvolle events'
    },
    {
      icon: <Target className="w-6 h-6 text-orange-500" />,
      title: 'Lokale focus',
      description: 'Wij kennen de Nederlandse voetbalcultuur door en door'
    },
    {
      icon: <Handshake className="w-6 h-6 text-orange-500" />,
      title: 'Persoonlijke service',
      description: 'Directe contactpersoon voor alle vragen en wensen'
    },
    {
      icon: <Calendar className="w-6 h-6 text-orange-500" />,
      title: 'Flexibele planning',
      description: 'Afgestemd op jouw clubkalender en seizoensplanning'
    },
    {
      icon: <Phone className="w-6 h-6 text-orange-500" />,
      title: 'Directe bereikbaarheid',
      description: 'Telefonische ondersteuning en snelle responstijd'
    }
  ];

  const packageBenefits = [
    {
      icon: <Gift className="w-5 h-5 text-orange-500" />,
      title: 'PR-materialen inclusief',
      description: 'Professionele posters, social media content en aankondigingen'
    },
    {
      icon: <Star className="w-5 h-5 text-orange-500" />,
      title: 'Tournify voordeel',
      description: 'Exclusieve kortingscode voor jullie eigen toernooien'
    },
    {
      icon: <Zap className="w-5 h-5 text-orange-500" />,
      title: 'Extra partnervoordelen',
      description: 'Kortingen bij sportmaterialen en clubbenodigdheden'
    },
    {
      icon: <Heart className="w-5 h-5 text-orange-500" />,
      title: 'Nazorg gegarandeerd',
      description: 'Follow-up gesprek en feedback voor verbetering'
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4 mr-2" />
            Bewezen resultaten
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-black text-white mb-6 tracking-tight">
            WAAROM CLUBS KIEZEN VOOR 
            <br />
            <span className="text-orange-400">WEPLAY ONTZORGING</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
            Meer dan een evenementenbureau - wij zijn jullie externe evenementencommissie
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {mainBenefits.map((benefit, index) => (
            <Card key={index} className={`${benefit.bgColor} ${benefit.borderColor} border-2 hover:scale-105 transition-all duration-300`}>
              <CardContent className="p-8 text-center">
                <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {benefit.description}
                </p>
                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Features Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-center text-white mb-12">
            Volledige ondersteuning & service
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors">
                <div className="bg-orange-500/20 rounded-lg p-3 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Package Benefits */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-heading font-bold text-center text-white mb-8">
            Extra voordelen bij elk pakket
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packageBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm">
                  {benefit.title}
                </h4>
                <p className="text-orange-100 text-xs leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-800 rounded-2xl p-12">
          <h3 className="text-2xl font-heading font-bold text-white mb-4">
            Klaar om jouw club te <span className="text-orange-400">ontzorgen</span>?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Bel direct voor een vrijblijvend gesprek over de mogelijkheden voor jouw club. 
            Wij denken graag mee over de perfecte evenementen voor jullie seizoen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WeButton 
              variant="cta" 
              size="lg" 
              icon={Phone}
              iconPosition="left"
              className="bg-orange-500 hover:bg-orange-600 text-white border-0 min-w-[250px]"
            >
              020 808 8670 - Bel direct
            </WeButton>
            <WeButton 
              variant="outline" 
              size="lg" 
              className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white min-w-[250px]"
            >
              Download clubbrochure
            </WeButton>
          </div>
        </div>

        {/* Photo Placement Suggestions - Hidden comments for future implementation */}
        {/* 
        PHOTO PLACEMENT SUGGESTIONS:
        
        1. Hero Background: Wide shot of football club during event with orange WePlay banners
           - Size: Full section background with dark overlay
           - Content: Crowded club event with happy families and players
           
        2. Benefit Icons: Custom illustrated icons in orange/white theme
           - LED Football field glowing at night
           - Happy volunteers with clipboards  
           - Club sponsors logos and handshake
           - Size: 64x64px vector illustrations
           
        3. Process Flow: Step-by-step visual guide
           - Phone call consultation photo
           - Event planning meeting 
           - Equipment setup action shot
           - Happy celebration moment
           - Size: 300x200px each in timeline format
           
        4. KNVB Partnership: Official certification and partnership badges
           - KNVB logo with "Official Supplier" badge
           - Quality certifications
           - Insurance/safety compliance badges
           - Size: 120x80px official badges
        */}
      </Container>
    </section>
  );
};

export default SportclubBenefits;