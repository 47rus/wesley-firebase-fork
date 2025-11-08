import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { WeCard, WeCardContent } from '@/components/ui/WeCard';
import WeButton from '@/components/ui/WeButton';
import WeBadge from '@/components/ui/WeBadge';
import { db } from '@/integrations/firebase/server';
import { DocumentData } from 'firebase-admin/firestore';

export const metadata = {
  title: 'Nieuws | WePlay United - Laatste ontwikkelingen en updates',
  description: 'Blijf op de hoogte van de laatste nieuwtjes van WePlay United. Van nieuwe partnerships tot innovatieve gaming events - lees hier alle updates.',
  keywords: 'WePlay nieuws, gaming events, KNVB partnership, innovatie, bedrijfsevents, sportclub events',
  alternates: { canonical: '/nieuws' },
};

// Define a type for the news item for better type safety
type NewsItem = {
  id: string;
  slug: string;
  image: string;
  badgeVariant: "default" | "primary" | "success" | "warning";
  badge: string;
  date: string;
  title: string;
  excerpt: string;
};

const NieuwsPage = async () => {
  // Fetch news data from Firestore
  const newsSnapshot = await db.collection('news').orderBy('date', 'desc').get();
  
  const newsItems: NewsItem[] = newsSnapshot.docs.map((doc: DocumentData) => {
    const data = doc.data();
    // Convert Firestore Timestamp to a readable date string if necessary
    const date = data.date instanceof Date 
      ? data.date.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })
      : (data.date?.toDate?.()?.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' }) || 'No date');

    return {
      id: doc.id,
      slug: data.slug || doc.id,
      image: data.image || '/placeholder.svg?height=300&width=400',
      badgeVariant: data.badgeVariant || 'default',
      badge: data.badge || 'Nieuws',
      date: date,
      title: data.title || 'Untitled Article',
      excerpt: data.excerpt || 'No excerpt available.',
    };
  });

  return (
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
                <Link href={`/nieuws/${item.slug}`} className="block h-full">
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
        </Container>
      </section>
    </main>
  );
};

export default NieuwsPage;
