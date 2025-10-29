
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, CheckCircle } from 'lucide-react';
import { WeCard, WeCardContent } from '@/components/ui/WeCard';
import WeBadge from '@/components/ui/WeBadge';
import Container from '@/components/layout/Container';

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sandra van der Berg',
      company: 'TechCorp Amsterdam',
      role: 'HR Manager',
      event: 'F1 Simulator Teambuilding',
      rating: 5,
      text: 'Onze teambuilding met de F1 simulators was een groot succes! Het team was enthousiast en de begeleiding was professioneel. Zeker een aanrader voor bedrijven.',
      image: '/testimonials/sandra.jpg',
      verified: true
    },
    {
      id: 2,
      name: 'Rob Hendriks',
      company: 'VV Nieuw-West',
      role: 'Voorzitter',
      event: 'Bubbelvoetbal Clubfeest',
      rating: 5,
      text: 'Het bubbelvoetbal was het hoogtepunt van ons clubfeest. Alle leeftijden deden mee en iedereen had plezier. WePlay regelde alles perfect!',
      image: '/testimonials/rob.jpg',
      verified: true
    },
    {
      id: 3,
      name: 'Linda Jansen',
      company: 'Montessori School Haarlem',
      role: 'Directeur',
      event: 'VR Schoolreisje',
      rating: 5,
      text: 'De VR ervaring was educatief en vermakelijk. De kinderen waren gefascineerd en hebben veel geleerd. Uitstekende begeleiding van het WePlay team.',
      image: '/testimonials/linda.jpg',
      verified: true
    },
    {
      id: 4,
      name: 'Michael de Vries',
      company: 'Gemeente Utrecht',
      role: 'Evenementencoördinator',
      event: 'LED Voetbal Buurtfeest',
      rating: 5,
      text: 'Het LED voetbal event trok honderden bezoekers naar ons buurtfeest. Spectaculair om te zien en geweldig voor de gemeenschapszin!',
      image: '/testimonials/michael.jpg',
      verified: true
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-weplay-text mb-6 leading-tight">
            WAT ONZE
            <br />
            <span className="text-weplay-primary">
              KLANTEN ZEGGEN
            </span>
          </h2>
          <p className="text-lg text-weplay-text-medium max-w-2xl mx-auto leading-relaxed">
            Meer dan 2000 succesvolle events en talloze tevreden klanten. 
            Lees wat zij zeggen over hun ervaring met WePlay United.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <WeCard className="relative overflow-hidden border-2 border-gray-200 bg-white">
            <WeCardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Customer Info */}
                <div className="text-center md:text-left space-y-4">
                  {/* Profile Image Placeholder */}
                  <div className="w-20 h-20 bg-weplay-primary rounded-full mx-auto md:mx-0 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {activeTestimonial.name.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Customer Details */}
                  <div>
                    <h3 className="font-heading font-bold text-weplay-text text-lg">
                      {activeTestimonial.name}
                    </h3>
                    <p className="text-weplay-text-medium font-medium">
                      {activeTestimonial.role}
                    </p>
                    <p className="text-weplay-text-medium text-sm">
                      {activeTestimonial.company}
                    </p>
                  </div>

                  {/* Event Badge */}
                  <WeBadge variant="primary" size="sm">
                    {activeTestimonial.event}
                  </WeBadge>
                </div>

                {/* Testimonial Content */}
                <div className="md:col-span-2 space-y-6">
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                    <div className="flex items-center gap-2 ml-2">
                      {activeTestimonial.verified && (
                        <>
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-green-600 font-medium">
                            Geverifieerd
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-weplay-text-medium leading-relaxed italic">
                    "{activeTestimonial.text}"
                  </blockquote>
                </div>
              </div>
            </WeCardContent>
          </WeCard>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full bg-white border-2 border-gray-200 hover:border-weplay-primary hover:bg-weplay-primary hover:text-white transition-all duration-200"
              aria-label="Vorige testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === activeIndex 
                      ? 'bg-weplay-primary scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ga naar testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-white border-2 border-gray-200 hover:border-weplay-primary hover:bg-weplay-primary hover:text-white transition-all duration-200"
              aria-label="Volgende testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default TestimonialsCarousel;
