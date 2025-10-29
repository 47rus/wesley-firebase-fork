import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import { WeCard, WeCardContent } from '@/components/ui/WeCard';
import WeButton from '@/components/ui/WeButton';
import WeBadge from '@/components/ui/WeBadge';

const NieuwsPage = () => {
  // Extended news data - in the future this will come from Supabase
  const newsItems = [
    {
      id: 1,
      title: "WePlay United wordt Official Supplier KNVB",
      excerpt: "Sinds 2023 zijn wij officieel erkend door de KNVB als betrouwbare leverancier voor game-events bij voetbalclubs door heel Nederland.",
      date: "15 maart 2024",
      image: "/placeholder.svg?height=300&width=400",
      badge: "NIEUW",
      badgeVariant: "primary" as const,
      slug: "weplay-official-supplier-knvb"
    },
    {
      id: 2,
      title: "Nieuwe VR experiences uitgebreid",
      excerpt: "We hebben ons VR aanbod uitgebreid met educatieve experiences voor scholen en trainingsimulaties voor bedrijven. Ontdek de mogelijkheden.",
      date: "8 maart 2024",
      image: "/placeholder.svg?height=300&width=400",
      badge: "Product Update",
      badgeVariant: "default" as const,
      slug: "nieuwe-vr-experiences"
    },
    {
      id: 3,
      title: "Record aantal events in februari 2024",
      excerpt: "Met 150 events in één maand hebben we een nieuw record gevestigd. Bedankt voor het vertrouwen van alle scholen, sportclubs en bedrijven.",
      date: "1 maart 2024",
      image: "/placeholder.svg?height=300&width=400",
      badge: "Milestone",
      badgeVariant: "success" as const,
      slug: "record-aantal-events-februari"
    },
    {
      id: 4,
      title: "Uitbreiding Duitsland aangekondigd",
      excerpt: "WePlay United breidt uit naar Duitsland. Vanaf april organiseren we ook events in de grote Duitse steden voor lokale sportclubs.",
      date: "25 februari 2024",
      image: "/placeholder.svg?height=300&width=400",
      badge: "Expansion",
      badgeVariant: "warning" as const,
      slug: "uitbreiding-duitsland"
    },
    {
      id: 5,
      title: "Partnership met Nederlandse scholen",
      excerpt: "We kondigen een partnership aan met 50+ Nederlandse scholen voor educatieve gaming events die leren en plezier combineren.",
      date: "20 februari 2024",
      image: "/placeholder.svg?height=300&width=400",
      badge: "Partnership",
      badgeVariant: "default" as const,
      slug: "partnership-nederlandse-scholen"
    },
    {
      id: 6,
      title: "Nieuwe LED Voetbal arena gelanceerd",
      excerpt: "Onze nieuwe LED Voetbal arena biedt een unieke ervaring met lichteffecten en interactieve elementen voor spectaculaire voetbalwedstrijden.",
      date: "15 februari 2024",
      image: "/placeholder.svg?height=300&width=400",
      badge: "Product",
      badgeVariant: "primary" as const,
      slug: "nieuwe-led-voetbal-arena"
    },
    {
      id: 7,
      title: "WePlay wint Innovatie Award 2024",
      excerpt: "We zijn trots om te verkondigen dat WePlay United de Innovatie Award 2024 heeft gewonnen voor onze bijdrage aan moderne evenementen.",
      date: "10 februari 2024",
      image: "/placeholder.svg?height=300&width=400",
      badge: "Award",
      badgeVariant: "success" as const,
      slug: "weplay-wint-innovatie-award"
    },
    {
      id: 8,
      title: "Nieuwe F1 Simulator voor bedrijfsevents",
      excerpt: "Onze state-of-the-art F1 simulator is nu beschikbaar voor bedrijfsevents en team building activiteiten met realistische race-ervaring.",
      date: "5 februari 2024",
      image: "/placeholder.svg?height=300&width=400",
      badge: "Product",
      badgeVariant: "primary" as const,
      slug: "nieuwe-f1-simulator-bedrijfsevents"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Nieuws | WePlay United - Laatste ontwikkelingen en updates</title>
        <meta name="description" content="Blijf op de hoogte van de laatste nieuwtjes van WePlay United. Van nieuwe partnerships tot innovatieve gaming events - lees hier alle updates." />
        <meta name="keywords" content="WePlay nieuws, gaming events, KNVB partnership, innovatie, bedrijfsevents, sportclub events" />
        <link rel="canonical" href="/nieuws" />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-weplay-light via-white to-weplay-accent-light">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-weplay-primary/10 rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-weplay-primary rounded-sm"></div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-black text-weplay-text mb-6 leading-tight">
                LAATSTE NIEUWS
              </h1>
              
              <p className="text-xl text-weplay-text-medium max-w-3xl mx-auto leading-relaxed">
                Blijf op de hoogte van onze nieuwste ontwikkelingen, partnerships en innovaties in de wereld van gaming events
              </p>
            </div>
          </Container>
        </section>

        {/* News Grid */}
        <section className="py-16 lg:py-24 bg-weplay-background">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {newsItems.map((item) => (
                <WeCard key={item.id} className="group cursor-pointer overflow-hidden h-full">
                  <Link to={`/nieuws/${item.slug}`} className="block h-full">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <WeBadge variant={item.badgeVariant}>
                          {item.badge}
                        </WeBadge>
                      </div>
                    </div>
                    
                    <WeCardContent className="p-6 flex flex-col h-full">
                      <div className="text-sm text-weplay-text-light mb-3 flex items-center">
                        <span className="mr-2">📅</span>
                        {item.date}
                      </div>
                      
                      <h2 className="text-xl font-heading font-bold text-weplay-text mb-3 leading-tight">
                        {item.title}
                      </h2>
                      
                      <p className="text-weplay-text-medium leading-relaxed mb-4 flex-grow">
                        {item.excerpt}
                      </p>
                      
                      <WeButton 
                        variant="outline" 
                        size="lg" 
                        icon={ArrowRight}
                        iconPosition="right"
                        className="w-full group-hover:bg-weplay-primary group-hover:text-white group-hover:border-weplay-primary transition-all duration-300 mt-auto"
                      >
                        Lees meer
                      </WeButton>
                    </WeCardContent>
                  </Link>
                </WeCard>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2">
              <button className="w-10 h-10 rounded-full bg-weplay-surface border border-weplay-border flex items-center justify-center hover:bg-weplay-primary hover:text-white hover:border-weplay-primary transition-all duration-300">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-weplay-primary text-white border border-weplay-primary flex items-center justify-center">
                1
              </button>
              <button className="w-10 h-10 rounded-full bg-weplay-surface border border-weplay-border flex items-center justify-center hover:bg-weplay-primary hover:text-white hover:border-weplay-primary transition-all duration-300">
                2
              </button>
              <button className="w-10 h-10 rounded-full bg-weplay-surface border border-weplay-border flex items-center justify-center hover:bg-weplay-primary hover:text-white hover:border-weplay-primary transition-all duration-300">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NieuwsPage;