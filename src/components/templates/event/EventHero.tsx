'use client'
import React from 'react';
import { Play, Users, Clock, Star, Phone, ChevronDown, ArrowRight } from 'lucide-react';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import WeButton from '@/components/ui/WeButton';
import { Package } from './EventPackages';

interface EventHeroProps {
  event_emoji: string;
  hero_title: string;
  hero_image_naam?: string;
  hero_image_alt?: string;
  hero_video_naam?: string;
  hero_subtitle: string;
  hero_description: string;
  packages: Package[];
  rating_sportclubs?: number;
  rating_scholen?: number;
  rating_non_profit?: number;
  rating_bedrijven?: number;
}

const EventHero: React.FC<EventHeroProps> = ({
  event_emoji,
  hero_title,
  hero_image_naam,
  hero_video_naam,
  hero_subtitle,
  hero_description,
  packages,
  rating_sportclubs,
  rating_scholen,
  rating_non_profit,
  rating_bedrijven
}) => {
  // Calculate price range
  const getPriceRange = () => {
    if (packages.length === 0) return '';
    if (packages.length === 1) return `€${packages[0].package_price}`;
    
    const prices = packages.map(pkg => pkg.package_price).sort((a, b) => a - b);
    return `€${prices[0]} - €${prices[prices.length - 1]}`;
  };

  // Calculate average rating from percentage values (0-100) to display rating (0-5)
  const getAverageRating = () => {
    const ratings = [rating_sportclubs, rating_scholen, rating_non_profit, rating_bedrijven].filter(Boolean);
    if (ratings.length === 0) return null;
    return (ratings.reduce((sum, rating) => sum + rating!, 0) / ratings.length / 20).toFixed(1);
  };

  // Extract first 2 sentences for cleaner hero
  const getShortDescription = () => {
    if (!hero_description) {
      return ''; // Return an empty string if hero_description is not available
    }
    const sentences = hero_description.split('. ');
    return sentences.slice(0, 2).join('. ') + (sentences.length > 2 ? '.' : '');
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:0208088670';
  };

  return (
    <section className="relative h-screen flex items-center bg-gradient-to-br from-weplay-light via-white to-weplay-accent-light overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(233,0,199,0.08),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(70,31,251,0.06),transparent_60%)]"></div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          <div className="space-y-8 text-center lg:text-left">
            {/* Trust signals - derived from package data and rating fields */}
            <div className="flex flex-wrap gap-3 text-sm justify-center lg:justify-start">
              {packages.length > 0 && (
                <>
                  <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                    <Users className="w-4 h-4 text-weplay-primary" />
                    <span className="font-medium text-weplay-text">
                      {Math.min(...packages.map(p => p.group_size_display_min || 0))}-{Math.max(...packages.map(p => p.group_size_display_max || 0))} spelers
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                    <Clock className="w-4 h-4 text-weplay-primary" />
                    <span className="font-medium text-weplay-text">{packages[0].duration_display} uur</span>
                  </div>
                </>
              )}
              {getAverageRating() && (
                <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium text-weplay-text">{getAverageRating()}/5.0</span>
                </div>
              )}
            </div>
            
            {/* Main heading */}
            <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-heading font-black uppercase text-weplay-text leading-tight tracking-tight">
              {hero_title}
            </h1>
              <p className="text-xl text-weplay-primary font-semibold">
                {hero_subtitle}
              </p>
            </div>
            
            {/* Simplified description */}
            <p className="text-lg text-weplay-text-medium leading-relaxed max-w-lg">
              {getShortDescription()}
            </p>
            
            {/* Clear CTAs - Updated to standard */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <WeButton 
                variant="primary" 
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                VRIJBLIJVEND VOORSTEL
              </WeButton>
              <WeButton 
                variant="outline" 
                size="lg" 
                icon={Phone}
                iconPosition="left"
                onClick={handlePhoneCall}
              >
                BEL NU
              </WeButton>
            </div>
          </div>

          {/* Simplified visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-weplay-primary/10 to-weplay-accent/10 rounded-3xl aspect-video flex items-center justify-center hover:scale-[1.02] transition-transform duration-500 border border-white/50 shadow-lg">
              {hero_video_naam ? (
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-[float_4s_ease-in-out_infinite]">{event_emoji}</div>
                  <div className="bg-white/90 p-4 rounded-2xl backdrop-blur-sm shadow-lg">
                    <Play className="w-12 h-12 text-weplay-primary mx-auto mb-2" />
                    <span className="text-weplay-text font-semibold">Bekijk video</span>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-8xl animate-[float_4s_ease-in-out_infinite] filter drop-shadow-lg">
                    {event_emoji}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
      
      {/* Scroll indicator - consistent with homepage */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-fade-in z-20">
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

export default EventHero;