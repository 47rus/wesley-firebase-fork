
import React from 'react';
import { notFound } from 'next/navigation';
import EventTemplate from '@/components/templates/EventTemplate';
import { supabase } from '@/integrations/supabase/client'; // Using client for now, should be a server client
import { Package } from '@/components/templates/EventPackages';
import { Tables } from '@/integrations/supabase/types';
import { Metadata } from 'next';

type EventSeoData = Tables<"seo">;

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const { data: eventSeo } = await supabase
    .from('seo')
    .select('seo_title, seo_description')
    .eq('url_slug', slug)
    .single();

  if (!eventSeo) {
    return {
      title: 'Event Not Found',
      description: 'This event does not exist.',
    };
  }

  return {
    title: eventSeo.seo_title,
    description: eventSeo.seo_description,
  };
}

// Generate static paths for events that exist
export async function generateStaticParams() {
    const { data: events } = await supabase.from('seo').select('url_slug');
    return events?.map((event) => ({
      slug: event.url_slug,
    })) || [];
}

const DynamicEventPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  // Fetch SEO data
  const { data: eventSeo, error: seoError } = await supabase
    .from('seo')
    .select('*')
    .eq('url_slug', slug)
    .single();

  if (seoError || !eventSeo) {
    notFound();
  }

  // Fetch packages
  const { data: packages, error: packagesError } = await supabase
    .from('events')
    .select('*')
    .eq('landing_page', eventSeo.landing_page)
    .gt('package_price', 0)
    .order('package_price', { ascending: true });

  if (packagesError) {
    // Or handle this error more gracefully
    notFound();
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
