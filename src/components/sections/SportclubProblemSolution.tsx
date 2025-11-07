"use client";
import React, { useState } from 'react';
import Container from '@/components/layout/Container';
import Typography from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';

const SportclubProblemSolution = () => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-black text-gray-900 mb-6 tracking-tight">
            VAN <span className="text-red-500">UITDAGING</span> NAAR <span className="text-orange-500">OPLOSSING</span>
          </h2>
          <Typography variant="body" className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto mb-12">
            Maak jouw sportclub toekomstbestendig!
          </Typography>
        </div>

        {/* Toggle Button/Slider */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center bg-gray-100 border border-gray-200 rounded-xl p-1">
            <button
              onClick={() => setShowSolution(false)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                !showSolution
                  ? 'bg-red-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Uitdagingen
            </button>
            <button
              onClick={() => setShowSolution(true)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                showSolution
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Oplossing
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {showSolution ? (
            /* Solution Content */
            <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
              <div className="order-2 md:order-1 flex flex-col justify-center h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-orange-100 rounded-full p-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900">
                    WePlay Lost Alles Op
                  </h3>
                </div>
                <Typography variant="body" className="text-gray-700 leading-relaxed mb-8">
                  Door jarenlange ervaring weten wij precies hoe we leden betrekken en de binding versterken. 
                  Ons team regelt alles van A tot Z, zodat jullie vrijwilligers kunnen genieten van perfecte evenementen 
                  die de club samenbrengen.
                </Typography>
                <div>
                  <Button 
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-8 py-4 font-semibold text-base transition-all duration-200 hover:shadow-lg"
                    onClick={() => document.getElementById('sportclub-configurator')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Stel jouw seizoenspakket samen
                  </Button>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                   <img src="/placeholder.svg" alt="Oplossing voor sportclubs" className="w-full h-full object-cover aspect-video"/>
                </div>
              </div>
            </div>
          ) : (
            /* Problem Content */
            <div className="space-y-12 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                     <img src="/placeholder.svg" alt="Uitdagingen voor sportclubs" className="w-full h-full object-cover aspect-video"/>
                  </div>
                </div>
                <div className="flex flex-col justify-center h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-red-100 rounded-full p-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900">
                      Sportclubs Onder Druk
                    </h3>
                  </div>
                  
                  {/* Uitdaging 1 - Gebrek aan binding */}
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4 rounded-r-lg">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.944-.833-2.714 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      <h4 className="font-semibold text-red-800">Gebrek aan binding</h4>
                    </div>
                    <p className="text-red-700 text-sm">Binding met leden staat onder druk - van 51% in 2018 naar 48% in 2022</p>
                  </div>

                  {/* Uitdaging 2 - Vrijwilligerstekort */}
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-lg">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <h4 className="font-semibold text-red-800">Vrijwilligerstekort</h4>
                    </div>
                    <p className="text-red-700 text-sm">75% van de sportclubs kampt met tekorten die leiden tot dreiging van sluiting</p>
                  </div>

                  <div>
                    <Button 
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-8 py-4 font-semibold text-base transition-all duration-200 hover:shadow-lg"
                      onClick={() => setShowSolution(true)}
                    >
                      Zie oplossing
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default SportclubProblemSolution;
