import React from 'react';
import Container from '@/components/layout/Container';
import UnifiedCard from '@/components/ui/UnifiedCard';
import { Trophy, Building2, GraduationCap, Heart } from 'lucide-react';

interface EventTargetSegmentsProps {
  hero_title: string;
  rating_sportclubs?: number;
  rating_bedrijven?: number;
  rating_scholen?: number;
  rating_non_profit?: number;
}

const EventTargetSegments: React.FC<EventTargetSegmentsProps> = (props) => {
  const targetSegments = [
    {
      icon: Trophy,
      title: 'Sportclubs',
      iconBgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-500',
      rating: props.rating_sportclubs
    },
    {
      icon: Building2,
      title: 'Bedrijven',
      iconBgColor: 'bg-blue-100',
      iconColor: 'text-blue-500',
      rating: props.rating_bedrijven
    },
    {
      icon: GraduationCap,
      title: 'Scholen',
      iconBgColor: 'bg-green-100',
      iconColor: 'text-green-500',
      rating: props.rating_scholen
    },
    {
      icon: Heart,
      title: 'Non-profits',
      iconBgColor: 'bg-purple-100',
      iconColor: 'text-purple-500',
      rating: props.rating_non_profit
    }
  ].filter(segment => segment.rating !== undefined && segment.rating !== null);

  if (targetSegments.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-gradient-to-br from-weplay-light via-white to-weplay-accent-light">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-black text-weplay-text mb-6 tracking-tight uppercase">
            PERFECT VOOR
          </h2>
          <p className="text-lg text-weplay-text-medium max-w-2xl mx-auto">
            Ontdek waarom verschillende groepen voor {props.hero_title} kiezen
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {targetSegments.map((segment, index) => (
            <UnifiedCard
              key={index}
              hover
              icon={segment.icon}
              title={segment.title}
              percentage={segment.rating}
              iconBgColor={segment.iconBgColor}
              iconColor={segment.iconColor}
              variant="default"
            />
          ))}
        </div>
        
      </Container>
    </section>
  );
};

export default EventTargetSegments;