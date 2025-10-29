import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Mail, Calendar, Users, Clock, Euro } from 'lucide-react';
import Container from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';
import WeButton from '@/components/ui/WeButton';

const SportclubFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqCategories = [
    {
      category: 'Algemeen',
      icon: <HelpCircle className="w-5 h-5 text-orange-500" />,
      questions: [
        {
          question: 'Wat maakt WePlay anders dan andere evenementenbureaus?',
          answer: 'Wij zijn de enige KNVB Official Supplier die zich volledig specialiseert in voetbalclubs. Met 7+ jaar ervaring begrijpen wij de clubcultuur en kunnen wij events organiseren die echt passen bij jullie vereniging. Wij fungeren als jullie externe evenementencommissie - volledige ontzorging van A tot Z.'
        },
        {
          question: 'Voor welke type clubs zijn jullie geschikt?',
          answer: 'Wij werken met alle KNVB-aangesloten clubs, van kleine dorpsverenigingen (50 leden) tot grote stadsclubs (2000+ leden). Onze pakketten zijn afgestemd op clubgrootte en budget. Of je nu een eenmalig event wilt of een volledig seizoensprogramma, wij denken mee.'
        },
        {
          question: 'Hoe ver van tevoren moeten we boeken?',
          answer: 'Voor optimale planning adviseren wij 6-8 weken van tevoren te boeken. Voor seizoenspakketten kunnen we al aan het begin van het seizoen de volledige planning maken. Last-minute boekingen (2 weken) zijn vaak ook mogelijk, afhankelijk van beschikbaarheid.'
        }
      ]
    },
    {
      category: 'Praktisch',
      icon: <Calendar className="w-5 h-5 text-orange-500" />,
      questions: [
        {
          question: 'Wat is er allemaal bij de prijs inbegrepen?',
          answer: 'Alle pakketten bevatten: volledige materiaallevering, professionele begeleiding, transport, opbouw/afbouw, verzekering, en nazorg. Ook krijgen jullie toegang tot PR-materialen, social media content en bij grotere pakketten een kortingscode voor Tournify en extra partnervoordelen.'
        },
        {
          question: 'Hebben jullie eigen materialen?',
          answer: 'Ja, wij hebben alle materialen in eigendom: LED voetbalvelden, bubble voetbalsuits, EA FC gaming setups, VR-brillen, skill games en meer. Alles wordt professioneel onderhouden en is volledig verzekerd. Je hoeft je geen zorgen te maken over technische problemen.'
        },
        {
          question: 'Kunnen events bij slecht weer doorgaan?',
          answer: 'De meeste van onze events kunnen bij lichte regen doorgaan. Voor events als LED voetbal hebben we overdekte alternatieven. Bij extreme weersomstandigheden overleggen we altijd over verplaatsing. Annulering vanwege weer gebeurt zelden en wordt altijd zonder kosten geregeld.'
        },
        {
          question: 'Hoeveel ruimte hebben jullie nodig?',
          answer: 'Dit hangt af van het event: LED voetbal heeft een veld van 20x30m nodig, bubble voetbal 25x15m, gaming events kunnen in elke ruimte vanaf 30m². Wij komen altijd vooraf kijken om de mogelijkheden te bespreken en de beste opstelling te bepalen.'
        }
      ]
    },
    {
      category: 'Financieel',
      icon: <Euro className="w-5 h-5 text-orange-500" />,
      questions: [
        {
          question: 'Kunnen we in termijnen betalen?',
          answer: 'Ja, wij bieden flexibele betaaloplossingen. Voor seizoenspakketten kun je in 4 kwarttermijnen betalen. Voor losse events is betaling vooraf of direct na het event mogelijk. We maken altijd heldere afspraken vooraf.'
        },
        {
          question: 'Zijn er extra kosten die we moeten verwachten?',
          answer: 'Nee, onze prijzen zijn all-in. De enige mogelijke extra kosten zijn bij locaties verder dan 50km van onze basis (kleine transportvergoeding) of bij specifieke extra wensen die niet in het standaardpakket zitten. Dit bespreken we altijd vooraf.'
        },
        {
          question: 'Bieden jullie kortingen voor meerdere events?',
          answer: 'Ja, onze seizoenspakketten bevatten al aanzienlijke kortingen t.o.v. losse events. Daarnaast krijgen trouwe klanten voorrang bij populaire data en extra service. KNVB-leden krijgen altijd onze beste tarieven.'
        }
      ]
    },
    {
      category: 'Support',
      icon: <Users className="w-5 h-5 text-orange-500" />,
      questions: [
        {
          question: 'Wie is er aanwezig tijdens het event?',
          answer: 'Er is altijd minstens één ervaren WePlay begeleider aanwezig die het volledige event runt. Bij grotere events komt er een team van 2-3 personen. Zij zorgen voor de techniek, spelregleling, veiligheid en een geweldige sfeer.'
        },
        {
          question: 'Wat als er technische problemen zijn?',
          answer: 'Onze begeleiders zijn technisch volledig geschoold en hebben reserve-materialen bij zich. Bij onvoorziene problemen hebben wij een 24/7 support hotline. In 7 jaar hebben we nog nooit een event moeten afbreken vanwege technische problemen.'
        },
        {
          question: 'Hoe zit het met verzekeringen?',
          answer: 'Alle materialen en activiteiten zijn volledig verzekerd via onze bedrijfsverzekering. Wij hebben ook een aansprakelijkheidsverzekering voor eventuele schade. Als KNVB Official Supplier voldoen we aan alle veiligheidseisen en certificeringen.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const faqIndex = categoryIndex * 100 + questionIndex;
    setOpenFAQ(openFAQ === faqIndex ? null : faqIndex);
  };

  return (
    <section className="py-24 bg-black text-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            Veelgestelde vragen
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-black text-white mb-6 tracking-tight">
            ALLE ANTWOORDEN OP 
            <br />
            <span className="text-orange-400">JOUW VRAGEN</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
            Ontdek alles wat je wilt weten over WePlay, onze services en hoe we jouw club kunnen helpen
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-500/20 rounded-lg p-2">
                  {category.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-white">
                  {category.category}
                </h3>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const faqIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openFAQ === faqIndex;
                  
                  return (
                    <Card key={questionIndex} className="bg-gray-900 border-gray-800 hover:border-orange-500/50 transition-all">
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                          className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                        >
                          <h4 className="font-semibold text-white pr-4">
                            {faq.question}
                          </h4>
                          <ChevronDown 
                            className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <div className="border-t border-gray-800 pt-4">
                              <p className="text-gray-300 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12">
          <h3 className="text-2xl font-heading font-bold text-white mb-4">
            Nog meer vragen?
          </h3>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Ons team staat klaar om al jouw vragen te beantwoorden. Bel direct voor een persoonlijk gesprek 
            of stuur een mail met jouw specifieke situatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WeButton 
              variant="outline" 
              size="lg" 
              icon={Phone}
              iconPosition="left"
              className="bg-white text-orange-600 hover:bg-orange-50 border-white min-w-[200px]"
            >
              020 808 8670
            </WeButton>
            <WeButton 
              variant="outline" 
              size="lg" 
              icon={Mail}
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-orange-600 min-w-[200px]"
            >
              info@weplay.nl
            </WeButton>
          </div>
          
          <div className="mt-8 pt-8 border-t border-orange-400/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-orange-100">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Ma-Vr: 9:00-18:00</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">Direct bereikbaar</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">24u response tijd</span>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Placement Suggestions - Hidden comments for future implementation */}
        {/* 
        PHOTO PLACEMENT SUGGESTIONS:
        
        1. FAQ Background: Subtle pattern or very dark image of football field at night
           - Size: Full section background with heavy dark overlay
           - Content: Night shot of empty football field with stadium lights
           
        2. Category Icons: Custom illustrated icons for each FAQ category
           - General: Question mark with football
           - Practical: Calendar with football events
           - Financial: Euro symbol with KNVB colors
           - Support: Team of support staff
           - Size: 24x24px vector icons in orange theme
           
        3. Contact Team: Professional photos of customer service team
           - Headshots of actual WePlay team members
           - Dressed in company polo shirts
           - Friendly, approachable expressions
           - Size: 150x150px circular crops
           
        4. Certification Badges: Official seals and certifications
           - KNVB Official Supplier badge
           - Insurance certification
           - Safety compliance badges
           - Quality assurance seals
           - Size: 80x80px official badges
        */}
      </Container>
    </section>
  );
};

export default SportclubFAQ;