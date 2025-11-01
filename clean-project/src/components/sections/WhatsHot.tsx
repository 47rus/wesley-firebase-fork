import React from 'react';
import { Flame, Play, Trophy, ArrowRight } from 'lucide-react';
import { WeCard, WeCardContent, WeCardHeader } from '@/components/ui/WeCard';
import WeButton from '@/components/ui/WeButton';
import WeBadge from '@/components/ui/WeBadge';
import Container from '@/components/layout/Container';

const WhatsHot = () => {
  const trendingEvents = [
    { name: 'Bubbelvoetbal', emoji: '🫧', trend: '+40%' },
    { name: 'F1 Simulator', emoji: '🏎️', trend: '+60%' },
    { name: 'VR Experience', emoji: '🥽', trend: '+35%' },
    { name: 'FIFA Toernooi', emoji: '🏆', trend: '+25%' }
  ];

  const ronActivities = [
    'Bubbelvoetbal competitie',
    'F1 Simulator challenge',
    'VR Racing games',
    'LED Voetbal finale',
    'Skill games parcours',
    'FIFA tournament'
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Flame className="w-8 h-8 text-orange-500 animate-bounce-slow" />
            <h2 className="text-4xl sm:text-5xl font-heading font-black uppercase text-weplay-text">
              WHAT'S
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 ml-3">
                HOT
              </span>
            </h2>
            <Flame className="w-8 h-8 text-orange-500 animate-bounce-slow" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ontdek wat trending is en bekijk onze nieuwste successen!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Ron Gastrobar Case Study */}
          <WeCard className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 overflow-hidden">
            <WeCardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <WeBadge variant="warning" size="md">
                  🔥 Case Study
                </WeBadge>
                <WeBadge variant="primary" size="sm">
                  Bedrijfsevent
                </WeBadge>
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900">
                Ron Gastrobar Event
              </h3>
              <p className="text-gray-600">
                Spectaculair bedrijfsfeest met 6 verschillende game-activiteiten
              </p>
            </WeCardHeader>
            
            <WeCardContent>
              {/* Activities Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {ronActivities.map((activity, index) => (
                  <div 
                    key={index}
                    className="bg-white/70 rounded-lg p-3 text-sm font-medium text-gray-700 border border-orange-200/50"
                  >
                    {activity}
                  </div>
                ))}
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">150+</div>
                  <div className="text-xs text-gray-600">Deelnemers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">6</div>
                  <div className="text-xs text-gray-600">Activiteiten</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">8u</div>
                  <div className="text-xs text-gray-600">Programma</div>
                </div>
              </div>
              
              <WeButton 
                variant="outline" 
                size="lg" 
                icon={Play}
                iconPosition="left"
                className="w-full border-orange-300 text-orange-700 hover:bg-orange-500 hover:text-white"
              >
                Bekijk hier de aftermovie
              </WeButton>
            </WeCardContent>
          </WeCard>

          {/* KNVB Partnership & Trending */}
          <div className="space-y-8">
            {/* KNVB Hot Partnership */}
            <WeCard className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <WeCardContent className="p-8 text-center space-y-6">
                <WeBadge variant="primary" size="lg" className="bg-blue-600 text-white">
                  🔥 HOT: OFFICIAL SUPPLIER KNVB!
                </WeBadge>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-knvb-primary-orange rounded-full flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-heading font-bold text-gray-900">KNVB Gecertificeerd</h3>
                      <p className="text-sm text-gray-600">Sinds 2019</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Kwaliteitsgarantie voor clubs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Voetbal-specifieke expertise</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Officiële partner status</span>
                    </div>
                  </div>
                </div>
              </WeCardContent>
            </WeCard>

            {/* Trending Events */}
            <WeCard>
              <WeCardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="w-5 h-5 text-orange-500" />
                  <h3 className="text-xl font-heading font-bold text-gray-900">
                    Trending Events
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Deze events zijn het populairst dit seizoen
                </p>
              </WeCardHeader>
              
              <WeCardContent>
                <div className="space-y-4">
                  {trendingEvents.map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{event.emoji}</span>
                        <span className="font-medium text-gray-900">{event.name}</span>
                      </div>
                      <WeBadge variant="success" size="sm">
                        {event.trend}
                      </WeBadge>
                    </div>
                  ))}
                </div>
                
                <WeButton 
                  variant="outline" 
                  size="lg" 
                  icon={ArrowRight}
                  iconPosition="right"
                  className="w-full mt-4"
                >
                  Bekijk alle trends
                </WeButton>
              </WeCardContent>
            </WeCard>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatsHot;
