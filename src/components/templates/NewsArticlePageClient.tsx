'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Share2, ArrowRight } from 'lucide-react';
import Container from '@/components/layout/Container';
import WeButton from '@/components/ui/WeButton';
import WeBadge from '@/components/ui/WeBadge';
import { WeCard, WeCardContent } from '@/components/ui/WeCard';

interface NewsArticlePageProps {
  article: {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    image: string;
    badge: string;
    badgeVariant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta' | 'default' | 'success' | 'warning';
    author: string;
    readTime: string;
    slug: string;
  };
  relatedArticles: {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    slug: string;
  }[];
}

const NewsArticlePageClient: React.FC<NewsArticlePageProps> = ({ article, relatedArticles }) => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Breadcrumbs */}
        <section className="py-4 bg-weplay-background border-b border-weplay-border">
          <Container>
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-weplay-text-light hover:text-weplay-primary transition-colors">
                Home
              </Link>
              <span className="text-weplay-text-light">/</span>
              <Link href="/nieuws" className="text-weplay-text-light hover:text-weplay-primary transition-colors">
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
              <Link href="/nieuws" className="mb-6 inline-block">
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
                  <Link href={`/nieuws/${relatedArticle.slug}`} className="block">
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
    </div>
  );
};

export default NewsArticlePageClient;
