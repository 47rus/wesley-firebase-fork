import React from 'react';
import { Star, Quote, Users, Trophy, Award, Target, CheckCircle, Building2 } from 'lucide-react';
import Container from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';

const SportclubSocialProof = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Marco van der Berg',
      role: 'Voorzitter',
      club: 'VV Sparta Nijkerk',
      members: '450 leden',
      rating: 5,
      text: "WePlay heeft ons clubseizoen compleet getransformeerd. Het EA FC toernooi was een groot succes - meer dan 80 kinderen deden mee en de ouders waren enthousiast. Eindelijk events die onze leden echt binden aan de club.",
      verified: true,
      event: 'EA FC Toernooi + LED Voetbal',
      // Photo suggestion: Professional headshot of club chairman in KNVB/club colors
    },
    {
      id: 2,
      name: 'Sandra Hendriks',
      role: 'Evenementencommissie',
      club: 'FC De Bilt',
      members: '720 leden',
      rating: 5,
      text: "Eindelijk geen stress meer over het organiseren van events! WePlay regelt alles van A tot Z. Het bubbelvoetbal was spectaculair en het LED voetbal trok honderden toeschouwers. Onze sponsoren waren zeer tevreden.",
      verified: true,
      event: 'Complete seizoenspakket',
      // Photo suggestion: Female volunteer coordinator with club facilities in background
    },
    {
      id: 3,
      name: 'Rob Jansen',
      role: 'Technisch Coördinator',
      club: 'RKVV Wittenhorst',
      members: '280 leden',
      rating: 5,
      text: "Het niveau van professionaliteit is indrukwekkend. De begeleiders zijn top, de materialen kwalitatief hoogstaand en de communicatie perfect. Dit is veel meer dan alleen een evenementenbureau.",
      verified: true,
      event: 'FIFA Skill Games',
      // Photo suggestion: Technical coordinator with youth teams in training gear
    }
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      number: '500+',
      label: 'Tevreden voetbalclubs',
      detail: 'Aangesloten bij KNVB'
    },
    {
      icon: <Trophy className="w-8 h-8 text-orange-500" />,
      number: '2000+',
      label: 'Succesvolle events',
      detail: 'Sinds 2017'
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      number: '8.9/10',
      label: 'Gemiddelde beoordeling',
      detail: 'Op basis van 450+ reviews'
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      number: '100%',
      label: 'KNVB gecertificeerd',
      detail: 'Official Supplier status'
    }
  ];

  const clubs = [
    'VV Katwijk', 'FC Weesp', 'VV Chaam', 'Sparta Nijkerk', 'FC De Bilt', 'RKVV Wittenhorst',
    'VV Noordwijk', 'FC Utrecht Amateurs', 'VV Kockengen', 'DESO', 'FC Lisse', 'VV Houten'
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 to-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4 mr-2" />
            Official Supplier KNVB
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-black text-gray-900 mb-6 tracking-tight">
            WAAROM <span className="text-orange-500">500+ CLUBS</span> 
            <br />VOOR WEPLAY KIEZEN
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
            Van amateurclubs tot topverenigingen - ontdek waarom zoveel voetbalclubs hun events aan ons toevertrouwen
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-white border-orange-200/60 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="bg-orange-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-heading font-black text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-gray-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-600">
                  {stat.detail}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Single Testimonial - Most Impactful */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-12 h-12 text-orange-200 mx-auto mb-6" />
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "WePlay heeft ons clubseizoen compleet getransformeerd. Het EA FC toernooi was een groot succes - meer dan 80 kinderen deden mee en de ouders waren enthousiast. Eindelijk events die onze leden echt binden aan de club."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Marco van der Berg</div>
                  <div className="text-gray-600 text-sm">Voorzitter • VV Sparta Nijkerk (450 leden)</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trusted By */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">Vertrouwd door 500+ KNVB clubs, waaronder:</p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 opacity-60">
            {clubs.slice(0, 6).map((club, index) => (
              <span key={index} className="text-gray-600 text-sm font-medium">
                {club}
              </span>
            ))}
          </div>
        </div>

        {/* Photo Placement Suggestions - Hidden comments for future implementation */}
        {/* 
        PHOTO PLACEMENT SUGGESTIONS:
        
        1. Hero Banner: Wide panoramic shot of a bustling football club event with WePlay orange branding visible
           - Size: 1200x400px, placed as background of the statistics section
           
        2. Testimonial Photos: Professional headshots of club representatives
           - Marco: Club chairman in formal club polo with stadium/pitch background
           - Sandra: Female volunteer in club colors with event setup behind her  
           - Rob: Technical coordinator with youth players in KNVB training gear
           - Size: 150x150px circular crops
           
        3. Club Logo Strip: Authentic KNVB club logos in a scrolling carousel
           - Size: 80x80px per logo, organized in rows
           
        4. Event Action Shots: High-energy photos of actual WePlay events
           - LED Football: Glowing football field with players in action
           - EA FC Tournament: Kids focused on gaming screens with controllers
           - Bubble Football: Players laughing inside transparent bubbles
           - Size: 300x200px cards with overlay text
        */}
      </Container>
    </section>
  );
};

export default SportclubSocialProof;