
import React from 'react';
import { Star, Trophy } from 'lucide-react';
import UnifiedCard from '@/components/ui/UnifiedCard';
import WeBadge from '@/components/ui/WeBadge';
import Container from '@/components/layout/Container';

const InCijfers = () => {
  const stats = [
    { value: '2000+', label: 'Events georganiseerd' },
    { value: '7', label: 'Jaar ervaring' },
    { value: '20', label: 'Professionals' },
    { value: '4.9', label: 'Beoordeling', hasIcon: true }
  ];

  return (
    <section className="py-16 lg:py-24 bg-weplay-background">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-weplay-text mb-6 leading-tight">
            IN CIJFERS
          </h2>
        </div>

        {/* Cijfers Card - Using UnifiedCard */}
        <Container size="md">
          <UnifiedCard 
            variant="elevated" 
            size="lg" 
            className="shadow-lg hover:shadow-xl transition-all duration-500"
          >
            {/* 2x2 Cijfers grid op desktop, 1 kolom op mobiel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl lg:text-5xl font-heading font-black text-weplay-primary flex items-center justify-center gap-2 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                    {stat.hasIcon && <Star className="w-8 h-8 text-yellow-500 fill-current animate-pulse" />}
                  </div>
                  <div className="text-sm text-weplay-text-medium font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Premium badge */}
            <div className="text-center">
              <WeBadge variant="primary" size="lg" className="inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Trophy className="w-5 h-5" />
                #1 Game-events aanbieder
              </WeBadge>
            </div>
          </UnifiedCard>
        </Container>
      </Container>
    </section>
  );
};

export default InCijfers;
