import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Share2, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import WeButton from '@/components/ui/WeButton';
import WeBadge from '@/components/ui/WeBadge';
import { WeCard, WeCardContent } from '@/components/ui/WeCard';

const NewsArticlePage = () => {
  const { slug } = useParams();

  // Mock article data - in the future this will come from Supabase
  const getArticleBySlug = (slug: string) => {
    const articles = {
      'weplay-official-supplier-knvb': {
        id: 1,
        title: "WePlay United wordt Official Supplier KNVB",
        excerpt: "Sinds 2023 zijn wij officieel erkend door de KNVB als betrouwbare leverancier voor game-events bij voetbalclubs door heel Nederland.",
        content: `
          <p>WePlay United is met trots aangekondigd als Official Supplier van de Koninklijke Nederlandse Voetbalbond (KNVB). Deze belangrijke erkenning bevestigt onze positie als toonaangevende leverancier van innovatieve gaming events voor voetbalclubs door heel Nederland.</p>
          
          <h2>Wat betekent dit partnership?</h2>
          <p>Als Official Supplier van de KNVB kunnen we nu officieel samenwerken met alle aangesloten voetbalclubs om unieke gaming experiences te leveren. Van EA FC toernooien tot LED voetbal events - we brengen moderne technologie naar de traditionele voetbalwereld.</p>
          
          <h2>Onze ervaring spreekt voor zich</h2>
          <p>Met meer dan 500 tevreden sportclubs die al gebruik maken van onze diensten, hebben we bewezen dat we de externe evenementencommissie zijn waar clubs op kunnen vertrouwen. Onze events zorgen niet alleen voor entertainment, maar ook voor community building en nieuwe inkomstenbronnen voor clubs.</p>
          
          <h2>Wat kunnen clubs verwachten?</h2>
          <ul>
            <li>Professionele EA FC toernooien met officiële KNVB branding</li>
            <li>LED voetbal experiences voor alle leeftijden</li>
            <li>VR trainingsimulaties voor jeugdspelers</li>
            <li>Volledige ontzorging van A tot Z</li>
            <li>Transparante prijzen zonder verborgen kosten</li>
          </ul>
          
          <p>Deze partnership markeert een nieuwe fase in onze missie om sport en technologie samen te brengen. We kijken uit naar vele succesvolle samenwerkingen met KNVB clubs in 2024 en daarbuiten.</p>
        `,
        date: "15 maart 2024",
        image: "/placeholder.svg?height=600&width=1200",
        badge: "NIEUW",
        badgeVariant: "primary" as const,
        author: "WePlay Team",
        readTime: "3 min leestijd"
      },
      'nieuwe-vr-experiences': {
        id: 2,
        title: "Nieuwe VR experiences uitgebreid",
        excerpt: "We hebben ons VR aanbod uitgebreid met educatieve experiences voor scholen en trainingsimulaties voor bedrijven.",
        content: `
          <p>WePlay United heeft haar VR portfolio significant uitgebreid met gloednieuwe experiences die speciaal ontwikkeld zijn voor educatieve doeleinden en professionele training.</p>
          
          <h2>Educatieve VR voor scholen</h2>
          <p>Onze nieuwe educatieve VR experiences maken leren interactief en boeiend. Leerlingen kunnen nu virtueel door de geschiedenis reizen, complexe wetenschappelijke concepten ervaren, of zelfs andere planeten verkennen - allemaal vanuit de klaslokaal.</p>
          
          <h2>Trainingsimulaties voor bedrijven</h2>
          <p>Voor bedrijven hebben we professionele trainingsimulaties ontwikkeld die werknemers in realistische scenario's plaatsen. Van brandveiligheid tot presentatievaardigheden - VR training biedt een veilige omgeving om nieuwe vaardigheden te ontwikkelen.</p>
        `,
        date: "8 maart 2024",
        image: "/placeholder.svg?height=600&width=1200",
        badge: "Product Update",
        badgeVariant: "default" as const,
        author: "Product Team",
        readTime: "2 min leestijd"
      }
      // Add more articles as needed
    };

    return articles[slug as keyof typeof articles] || null;
  };

  const article = getArticleBySlug(slug || '');

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="py-24">
          <Container>
            <div className="text-center">
              <h1 className="text-4xl font-heading font-black text-weplay-text mb-4">
                Artikel niet gevonden
              </h1>
              <p className="text-weplay-text-medium mb-8">
                Het artikel dat u zoekt bestaat niet of is verplaatst.
              </p>
              <Link to="/nieuws">
                <WeButton variant="primary">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Terug naar nieuws
                </WeButton>
              </Link>
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }

  // Related articles (mock data)
  const relatedArticles = [
    {
      id: 3,
      title: "Record aantal events in februari 2024",
      excerpt: "Met 150 events in één maand hebben we een nieuw record gevestigd.",
      image: "/placeholder.svg?height=200&width=300",
      slug: "record-aantal-events-februari"
    },
    {
      id: 4,
      title: "Uitbreiding Duitsland aangekondigd",
      excerpt: "WePlay United breidt uit naar Duitsland vanaf april 2024.",
      image: "/placeholder.svg?height=200&width=300",
      slug: "uitbreiding-duitsland"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{article.title} | WePlay United Nieuws</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`/nieuws/${slug}`} />
        
        {/* Structured Data for Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": article.title,
            "description": article.excerpt,
            "image": article.image,
            "datePublished": article.date,
            "author": {
              "@type": "Organization",
              "name": article.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "WePlay United",
              "logo": {
                "@type": "ImageObject",
                "url": "/logo.png"
              }
            }
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main>
        {/* Breadcrumbs */}
        <section className="py-4 bg-weplay-background border-b border-weplay-border">
          <Container>
            <nav className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-weplay-text-light hover:text-weplay-primary transition-colors">
                Home
              </Link>
              <span className="text-weplay-text-light">/</span>
              <Link to="/nieuws" className="text-weplay-text-light hover:text-weplay-primary transition-colors">
                Nieuws
              </Link>
              <span className="text-weplay-text-light">/</span>
              <span className="text-weplay-text">{article.title}</span>
            </nav>
          </Container>
        </section>

        {/* Article Header */}
        <section className="py-12 lg:py-16 bg-weplay-background">
          <Container size="md">
            <div className="mb-8">
              <Link to="/nieuws" className="mb-6 inline-block">
                <WeButton variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Terug naar nieuws
                </WeButton>
              </Link>
              
              <div className="mb-6">
                <WeBadge variant={article.badgeVariant} className="mb-4">
                  {article.badge}
                </WeBadge>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-heading font-black text-weplay-text mb-6 leading-tight">
                {article.title}
              </h1>
              
              <p className="text-xl text-weplay-text-medium leading-relaxed mb-6">
                {article.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-weplay-text-light">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Door {article.author}</span>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-64 lg:h-96 object-cover rounded-xl"
              />
            </div>
          </Container>
        </section>

        {/* Article Content */}
        <section className="py-12 lg:py-16">
          <Container size="md">
            <div className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: article.content }}
                className="text-weplay-text-medium leading-relaxed"
              />
            </div>
            
            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-weplay-border">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-heading font-bold text-weplay-text">
                  Deel dit artikel
                </h3>
                <WeButton variant="outline" size="sm" icon={Share2}>
                  Delen
                </WeButton>
              </div>
            </div>
          </Container>
        </section>

        {/* Related Articles */}
        <section className="py-16 lg:py-24 bg-weplay-background">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-black text-weplay-text mb-4">
                Gerelateerde artikelen
              </h2>
              <p className="text-weplay-text-medium">
                Meer nieuws dat je interessant vindt
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <WeCard key={relatedArticle.id} className="group cursor-pointer overflow-hidden">
                  <Link to={`/nieuws/${relatedArticle.slug}`} className="block">
                    <img 
                      src={relatedArticle.image} 
                      alt={relatedArticle.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    <WeCardContent className="p-6">
                      <h3 className="text-xl font-heading font-bold text-weplay-text mb-3 leading-tight">
                        {relatedArticle.title}
                      </h3>
                      
                      <p className="text-weplay-text-medium leading-relaxed mb-4">
                        {relatedArticle.excerpt}
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
          </Container>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsArticlePage;