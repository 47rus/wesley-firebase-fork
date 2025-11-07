import React from 'react';
import { useParams } from 'react-router-dom';
import EventTemplate from '@/components/templates/EventTemplate';
import NotFound from '@/pages/NotFound';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Package } from '@/components/templates/EventPackages';
import { Tables } from '@/integrations/supabase/types';

type EventSeoData = Tables<"seo">;

// Dynamic Event Page that fetches SEO + Packages from Supabase
const DynamicEventPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Fetch SEO data for the specific slug
  const { data: eventSeo, isLoading: seoLoading, error: seoError } = useQuery<EventSeoData | null, Error>({
    queryKey: ['seo', slug],
    queryFn: async () => {
      if (!slug) return null;

      const { data, error } = await supabase
        .from('seo')
        .select('*')
        .eq('url_slug', slug)
        .single();

      if (error) {
        // Log the error to the console for debugging
        console.error('Error fetching SEO data:', error);
        // Don't throw an error, but return null to be handled by the component
        return null;
      }

      return data;
    },
    enabled: !!slug, // Only run query if slug is available
  });

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
