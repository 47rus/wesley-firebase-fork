
import React from 'react';
import { Phone, MessageCircle, Clock, Star, Shield, ArrowRight } from 'lucide-react';
import WeButton from '@/components/ui/WeButton';
import WeBadge from '@/components/ui/WeBadge';
import Typography from '@/components/ui/Typography';
import Section from '@/components/layout/Section';

const FinalCTA = () => {
  return (
    <Section background="dark" spacing="xl" className="text-white">
      {/* Gaming Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(233,0,199,0.3)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(233,0,199,0.1)_49%,rgba(233,0,199,0.1)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="relative text-center space-y-12">
        {/* Urgency Indicators */}
        <div className="flex flex-wrap justify-center gap-4">
          <WeBadge variant="error" size="lg" className="bg-red-600 text-white animate-pulse">
            <Clock className="w-4 h-4 mr-2" />
            Nog 3 weekenden beschikbaar in maart
          </WeBadge>
          <WeBadge variant="primary" size="lg" className="bg-blue-600 text-white">
            <Shield className="w-4 h-4 mr-2" />
            Binnen 24 uur volledige offerte
          </WeBadge>
        </div>

        <div className="space-y-6">
          <Typography variant="hero" color="white">
            KLAAR VOOR JOUW
            <br />
            <span className="text-weplay-primary">
              PERFECTE EVENT?
            </span>
          </Typography>
          
          <Typography variant="subtitle" color="secondary" className="max-w-3xl mx-auto text-gray-300">
            Sluit je aan bij 500+ tevreden klanten en maak van jouw volgende 
            event een onvergetelijke ervaring. Wij regelen alles, jullie genieten!
          </Typography>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-gray-300">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <Typography variant="body" className="text-gray-300">4.9⭐ gemiddelde beoordeling</Typography>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-400" />
            <Typography variant="body" className="text-gray-300">24u reactietijd gegarandeerd</Typography>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-weplay-primary" />
            <Typography variant="body" className="text-gray-300">Official Supplier KNVB</Typography>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WeButton 
              variant="cta" 
              size="lg" 
              icon={ArrowRight}
              iconPosition="right"
              className="min-w-[280px]"
            >
              Configureer je event
            </WeButton>
            <WeButton 
              variant="outline" 
              size="lg" 
              icon={Phone}
              iconPosition="left"
              className="min-w-[280px] border-white text-white hover:bg-white hover:text-weplay-text"
            >
              Bel nu: 020 808 8670
            </WeButton>
          </div>
          
          {/* WhatsApp Button */}
          <div className="pt-4">
            <WeButton 
              variant="ghost" 
              size="lg" 
              icon={ArrowRight}
              iconPosition="right"
              className="text-green-400 hover:text-white hover:bg-green-600 border border-green-400 hover:border-green-600"
            >
              WhatsApp ons direct
            </WeButton>
          </div>
        </div>

        {/* Final Trust Message */}
        <div className="pt-8 border-t border-gray-800">
          <Typography variant="subtitle" className="text-gray-400">
            <span className="text-weplay-primary font-semibold">Gratis offerte</span> • 
            <span className="text-blue-400 font-semibold ml-2">Volledig ontzorgd</span> • 
            <span className="text-green-400 font-semibold ml-2">Direct persoonlijk contact</span>
          </Typography>
        </div>
      </div>
    </Section>
  );
};

export default FinalCTA;
