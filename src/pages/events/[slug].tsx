import React from 'react';
import { useParams } from 'react-router-dom';
import EventTemplate from '@/components/templates/EventTemplate';
import { useSeo } from '@/hooks/use-seo';
import NotFound from '@/pages/NotFound';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Package } from '@/components/templates/EventPackages';

// Dynamic Event Page that fetches SEO + Packages from Supabase
const DynamicEventPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: seoData, isLoading: seoLoading, error: seoError } = useSeo();

  const eventSeo = seoData?.find(item => item.url_slug === slug);

  const { data: packages, isLoading: packagesLoading, error: packagesError } = useQuery<Package[], Error>({
    queryKey: ['packages', eventSeo?.landing_page],
    queryFn: async () => {
      if (!eventSeo?.landing_page) return [];

      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('landing_page', eventSeo.landing_page)
        .gt('package_price', 0) // Filter out packages with a price of 0
        .order('package_price', { ascending: true });

      if (error) {
        throw new Error(error.message);
      }

      return data || [];
    },
    enabled: !!eventSeo?.landing_page, // Only run query if landing_page is available
  });


  if (seoLoading || packagesLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-weplay-text">Even geduld…</div>
      </div>
    );
  }

  if (seoError || packagesError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-weplay-text">{(seoError || packagesError)?.message}</div>
      </div>
    );
  }

  if (!eventSeo) {
    return <NotFound />;
  }

  const parsedSeo = {
    ...eventSeo,
    rating_sportclubs: eventSeo.rating_sportclubs ? parseInt(eventSeo.rating_sportclubs, 10) : undefined,
    rating_scholen: eventSeo.rating_scholen ? parseInt(eventSeo.rating_scholen, 10) : undefined,
    rating_non_profit: eventSeo.rating_non_profit ? parseInt(eventSeo.rating_non_profit, 10) : undefined,
    rating_bedrijven: eventSeo.rating_bedrijven ? parseInt(eventSeo.rating_bedrijven, 10) : undefined,
  };

  return (
    <EventTemplate 
      {...parsedSeo}
      packages={packages || []}
    />
  );
};

export default DynamicEventPage;
