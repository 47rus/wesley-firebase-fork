
import React from 'react';
import { Building, Trophy, GraduationCap, Heart } from 'lucide-react';
import CardSystem from '@/components/ui/CardSystem';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';

const TargetSegments = () => {
  const segments = [
    {
      icon: Trophy,
      title: 'Sportclubs',
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-500'
    },
    {
      icon: Building,
      title: 'Bedrijven',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-500'
    },
    {
      icon: GraduationCap,
      title: 'Scholen',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-500'
    },
    {
      icon: Heart,
      title: 'Non-profits',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-500'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-weplay-text mb-6 leading-tight">
            PERFECT VOOR
          </h2>
          <p className="text-lg text-weplay-text-medium max-w-2xl mx-auto leading-relaxed">
            Ontdek waarom verschillende groepen voor Bubbelvoetbal huren voor elke gelegenheid kiezen
          </p>
        </div>

        {/* Target Groups Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, index) => {
            const IconComponent = segment.icon;
            return (
              <CardSystem key={index} hover className="text-center">
                <div className="space-y-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${segment.bgColor}`}>
                    <IconComponent className={`w-6 h-6 ${segment.iconColor}`} />
                  </div>
                  <Typography variant="h4">
                    {segment.title}
                  </Typography>
                </div>
              </CardSystem>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default TargetSegments;
