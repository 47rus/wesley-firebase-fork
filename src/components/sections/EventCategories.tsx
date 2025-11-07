
import React from 'react';
import Link from 'next/link';
import { supabase } from '@/integrations/supabase/client';
import Container from '@/components/layout/Container';
import { ArrowRight } from 'lucide-react';
import WeButton from '@/components/ui/WeButton';

async function getEventCategories() {
  const { data, error } = await supabase
    .from('seo')
    .select('url_slug, hero_title, event_emoji')
    .order('id', { ascending: true });

  if (error) {
    console.error('Error fetching event categories:', error);
    return [];
  }
  return data;
}

const EventCategories = async () => {
  const categories = await getEventCategories();

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-weplay-text mb-6 leading-tight">
            ONTDEK ONZE
            <br />
            <span className="text-weplay-primary">EVENTS</span>
          </h2>
          <p className="text-lg text-weplay-text-medium max-w-2xl mx-auto leading-relaxed">
            Bekijk alle events die we aanbieden en vind de perfecte match voor jouw team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category) => (
            <Link href={`/event/${category.url_slug}`} key={category.url_slug}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <span className="text-4xl mr-4">{category.event_emoji}</span>
                <h3 className="text-lg font-bold text-weplay-text">{category.hero_title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/configureer-event">
            <WeButton 
              variant="primary" 
              size="lg" 
              icon={ArrowRight} 
              iconPosition="right"
            >
              Stel je eigen event samen
            </WeButton>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default EventCategories;
