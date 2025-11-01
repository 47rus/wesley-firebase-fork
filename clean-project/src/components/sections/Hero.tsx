
import React from 'react';
import { Settings, Phone, Trophy, GraduationCap, Building2, Heart, ChevronDown, ArrowRight } from 'lucide-react';
import WeButton from '@/components/ui/WeButton';
import Typography from '@/components/ui/Typography';
import UnifiedCard from '@/components/ui/UnifiedCard';

const Hero = () => {
  const targetGroups = [
    {
      icon: Trophy,
      title: 'Sportclubs',
      iconBgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-500'
    },
    {
      icon: GraduationCap,
      title: 'Scholen',
      iconBgColor: 'bg-blue-100',
      iconColor: 'text-blue-500'
    },
    {
      icon: Building2,
      title: 'Bedrijven',
      iconBgColor: 'bg-green-100',
      iconColor: 'text-green-500'
    },
    {
      icon: Heart,
      title: 'Non-profits',
      iconBgColor: 'bg-purple-100',
      iconColor: 'text-purple-500'
    }
  ];

  return (
    <section className="relative bg-weplay-light flex flex-col justify-center overflow-hidden" style={{ height: 'calc(100vh - 120px)' }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(233,0,199,0.05)_1px,transparent_0)] [background-size:40px_40px]"></div>
      
      {/* Floating pink ball animation */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-30 animate-[float_6s_ease-in-out_infinite]"></div>
      
      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-weplay-light to-transparent pointer-events-none"></div>
      
      <div className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-12">

          {/* Main Headlines - Extra Bold */}
          <Typography variant="hero" weight="extra-black" className="mb-6">
            GAME-EVENTS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-weplay-primary via-weplay-dark to-weplay-accent">
              OP LOCATIE
            </span>
          </Typography>
          
          {/* Subtitle */}
          <Typography variant="subtitle" color="secondary" className="mb-6">
            Voor sportclubs, scholen, bedrijven en non-profits
          </Typography>
          
          {/* Description */}
          <Typography variant="body" color="secondary" className="mb-2 max-w-3xl mx-auto">
            Van bubbelvoetbal tot VR-brillen, wij brengen de perfecte game-ervaring naar jouw locatie.
          </Typography>
          <Typography variant="subtitle" color="accent" className="mb-8 max-w-3xl mx-auto">
            Ontdek meer dan 15 verschillende events en stel je eigen pakket samen.
          </Typography>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <WeButton 
              variant="cta" 
              size="lg" 
              icon={ArrowRight}
              iconPosition="right"
              className="min-w-[280px]"
            >
              Stel je event samen
            </WeButton>
            <WeButton 
              variant="outline" 
              size="lg" 
              icon={Phone}
              iconPosition="left"
              className="min-w-[280px]"
            >
              Bel direct: 020 808 8670
            </WeButton>
          </div>

          {/* Target Groups - Using UnifiedCard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {targetGroups.map((group, index) => (
              <UnifiedCard
                key={index}
                hover
                icon={group.icon}
                title={group.title}
                iconBgColor={group.iconBgColor}
                iconColor={group.iconColor}
                variant="default"
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-fade-in">
        <Typography variant="caption" color="secondary" className="mb-2">
          Scroll voor meer
        </Typography>
        <div className="animate-bounce">
          <ChevronDown className="w-6 h-6 text-weplay-primary mx-auto cursor-pointer hover:text-weplay-dark transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
