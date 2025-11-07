import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { WeCard, WeCardContent } from '@/components/ui/WeCard';
import WeButton from '@/components/ui/WeButton';
import WeBadge from '@/components/ui/WeBadge';
import Container from '@/components/layout/Container';

const LatestNews = () => {
  const newsItems = [
    {
      id: 1,
      title: "WePlay United wordt Official Supplier KNVB",
      description: "Sinds 2023 zijn wij officieel erkend door de KNVB als betrouwbare leverancier voor game-events bij...",
      date: "15 maart 2024",
      image: "/placeholder.svg?height=300&width=400",
      badge: "NIEUW",
      badgeVariant: "primary" as const,
      slug: "weplay-official-supplier-knvb"
    },
    {
      id: 2,
      title: "Nieuwe VR experiences uitgebreid",
      description: "We hebben ons VR aanbod uitgebreid met educatieve experiences voor scholen en...",
      date: "8 maart 2024",
      image: "/placeholder.svg?height=300&width=400",
      badge: "Product Update",
      badgeVariant: "default" as const,
      slug: "nieuwe-vr-experiences"
    },
    {
      id: 3,
      title: "Record aantal events in februari 2024",
      description: "Met 150 events in één maand hebben we een nieuw record gevestigd. Bedankt voor het...",
      date: "1 maart 2024",
      image: "/placeholder.svg?height=300&width=400",
      badge: "Milestone",
      badgeVariant: "success" as const,
      slug: "record-aantal-events-februari"
    },
    {
      id: 4,
      title: "Uitbreiding Duitsland aangekondigd",
      description: "WePlay United breidt uit naar Duitsland. Vanaf april organiseren we ook events...",
      date: "25 februari 2024",
      image: "/placeholder.svg?height=300&width=400",
      badge: "Expansion",
      badgeVariant: "warning" as const,
      slug: "uitbreiding-duitsland"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-weplay-background">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-weplay-primary/10 rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-weplay-primary rounded-sm"></div>
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-weplay-text mb-6 leading-tight">
            LAATSTE NIEUWS
          </h2>
          
          <p className="text-lg text-weplay-text-medium max-w-3xl mx-auto leading-relaxed">
            Blijf op de hoogte van onze nieuwste ontwikkelingen, partnerships en events
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newsItems.map((item) => (
            <WeCard key={item.id} className="group cursor-pointer overflow-hidden">
              <Link href={`/nieuws/${item.slug}`} className="block">
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
              
              <WeCardContent className="p-6">
                <div className="text-sm text-weplay-text-light mb-3 flex items-center">
                  <span className="mr-2">📅</span>
                  {item.date}
                </div>
                
                <h3 className="text-lg font-heading font-bold text-weplay-text mb-3 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-weplay-text-medium text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                
                <WeButton 
                  variant="outline" 
                  size="lg" 
                  icon={ArrowRight}
                  iconPosition="right"
                  className="w-full group-hover:bg-weplay-primary group-hover:text-white group-hover:border-weplay-primary transition-all duration-300"
                >
                  Lees meer
                </WeButton>
              </WeCardContent>
              </Link>
            </WeCard>
          ))}
        </div>

        {/* Navigation and CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Navigation arrows */}
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-weplay-surface border border-weplay-border flex items-center justify-center hover:bg-weplay-primary hover:text-white hover:border-weplay-primary transition-all duration-300">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-weplay-surface border border-weplay-border flex items-center justify-center hover:bg-weplay-primary hover:text-white hover:border-weplay-primary transition-all duration-300">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Main CTA */}
          <Link href="/nieuws">
            <WeButton 
              variant="primary" 
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
            >
              Bekijk al het nieuws
            </WeButton>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default LatestNews;
