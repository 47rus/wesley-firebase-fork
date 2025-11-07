"use client";
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Award, Calendar, ArrowRight, Phone, ChevronDown } from 'lucide-react';
import WeButton from '@/components/ui/WeButton';
import Typography from '@/components/ui/Typography';

const SportclubHero = () => {
  const scrollToConfigurator = () => {
    const configurator = document.getElementById('configurator');
    if (configurator) {
      configurator.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-white flex flex-col justify-center overflow-hidden min-h-screen">
      {/* Video background space - prepared for future video implementation */}
      <div className="absolute inset-0 z-0">
        {/* Background pattern for now, will be replaced with video */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(249,115,22,0.05)_1px,transparent_0)] [background-size:40px_40px]"></div>
        {/* Floating orange ball animation */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full opacity-30 animate-[float_6s_ease-in-out_infinite]"></div>
      </div>
      
      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
      
      <div className="relative z-20 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="bg-orange-50 border-orange-200 text-orange-600 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Official Supplier KNVB
            </Badge>
            <Badge variant="outline" className="bg-white border-gray-200 text-gray-600 px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              500+ tevreden clubs
            </Badge>
            <Badge variant="outline" className="bg-white border-gray-200 text-gray-600 px-4 py-2">
              <Calendar className="w-4 h-4 mr-2" />
              Sinds 2017
            </Badge>
            <Badge variant="outline" className="bg-white border-gray-200 text-gray-600 px-4 py-2">
              <Star className="w-4 h-4 mr-2 fill-orange-500 text-orange-500" />
              8,91 beoordeeld
            </Badge>
          </div>

          {/* Main Headlines */}
          <Typography variant="hero" weight="extra-black" className="mb-6 text-gray-900">
            WIJ ZIJN DE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              EVENEMENTENCOMMISSIE
            </span>
            {' '}VAN JOUW SPORTCLUB
          </Typography>
          
          {/* Subtitle removed as requested - moved to problem-solution section */}
          
          {/* Value proposition text */}
          <div className="max-w-4xl mx-auto mb-12">
            <Typography variant="body" className="text-lg md:text-xl leading-relaxed text-gray-700">
              Vrijwilligers vinden wordt steeds lastiger, en de binding met leden staat onder druk. Wij springen bij als externe evenementencommissie die alles regelt van A tot Z. Van EA FC-toernooi tot LED Voetbal en van de Jonger Oranje-karavaan tot een seizoensafsluiting met levend tafelvoetbal. Zo organiseren jullie zonder extra druk op vrijwilligers toch events die leden binden, verrassen en laten terugkomen.
            </Typography>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <WeButton 
              variant="cta" 
              size="lg" 
              icon={ArrowRight}
              iconPosition="right"
              className="min-w-[280px] bg-orange-500 hover:bg-orange-600 text-white border-0"
              onClick={scrollToConfigurator}
            >
              Stel jouw seizoenspakket samen
            </WeButton>
            <WeButton 
              variant="outline" 
              size="lg" 
              icon={Phone}
              iconPosition="left"
              className="min-w-[280px] border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
            >
              Bel direct: 020 808 8670
            </WeButton>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-fade-in z-20">
        <Typography variant="caption" color="secondary" className="mb-2">
          Scroll voor meer
        </Typography>
        <div className="animate-bounce">
          <ChevronDown className="w-6 h-6 text-orange-500 mx-auto cursor-pointer hover:text-orange-600 transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default SportclubHero;