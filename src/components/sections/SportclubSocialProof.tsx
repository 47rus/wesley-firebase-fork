"use client";
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
      imageUrl: '/placeholder.svg'
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
      imageUrl: '/placeholder.svg'
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
      imageUrl: '/placeholder.svg'
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
    { name: 'VV Katwijk', logo: '/placeholder.svg' },
    { name: 'FC Weesp', logo: '/placeholder.svg' },
    { name: 'VV Chaam', logo: '/placeholder.svg' },
    { name: 'Sparta Nijkerk', logo: '/placeholder.svg' },
    { name: 'FC De Bilt', logo: '/placeholder.svg' },
    { name: 'RKVV Wittenhorst', logo: '/placeholder.svg' },
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

        {/* Statistics with background */}
        <div className="relative rounded-2xl overflow-hidden mb-20">
            <img src="/placeholder.svg" alt="Bustling football club event" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 p-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center text-white">
                    <div className="text-4xl font-heading font-black mb-2">{stat.number}</div>
                    <div className="font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-300">{stat.detail}</div>
                </div>
              ))}
            </div>
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
                "{testimonials[0].text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <img src={testimonials[0].imageUrl} alt={testimonials[0].name} className="w-12 h-12 rounded-full object-cover bg-gray-200"/>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{testimonials[0].name}</div>
                  <div className="text-gray-600 text-sm">{testimonials[0].role} • {testimonials[0].club} ({testimonials[0].members})</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Event Action Shots */}
        <div className="mb-20">
            <h3 className="text-2xl font-heading font-bold text-center text-gray-900 mb-12">
                Onze Events in Actie
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
                <Card className="overflow-hidden"><CardContent className="p-0"><img src="/placeholder.svg" alt="LED Football" className="w-full h-48 object-cover"/><div className="p-4 font-semibold">LED Voetbal</div></CardContent></Card>
                <Card className="overflow-hidden"><CardContent className="p-0"><img src="/placeholder.svg" alt="EA FC Tournament" className="w-full h-48 object-cover"/><div className="p-4 font-semibold">EA FC Toernooi</div></CardContent></Card>
                <Card className="overflow-hidden"><CardContent className="p-0"><img src="/placeholder.svg" alt="Bubble Football" className="w-full h-48 object-cover"/><div className="p-4 font-semibold">Bubbel Voetbal</div></CardContent></Card>
            </div>
        </div>

        {/* Trusted By */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">Vertrouwd door 500+ KNVB clubs, waaronder:</p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 opacity-60">
            {clubs.map((club, index) => (
              <div key={index} className="text-center">
                  <img src={club.logo} alt={club.name} className="h-12 w-12 mx-auto mb-2 bg-gray-200 rounded-full"/>
                  <span className="text-gray-600 text-xs font-medium">
                      {club.name}
                  </span>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
};

export default SportclubSocialProof;