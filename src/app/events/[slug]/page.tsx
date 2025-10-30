import { notFound } from 'next/navigation';
import { supabase } from '@/integrations/supabase/client';
import { Metadata } from 'next';
import EventTemplateClient from '@/components/templates/EventTemplateClient';
import { Package } from '@/components/templates/EventPackages';

interface SeoData {
  id: string;
  url_slug: string;
  landing_page: string;
  event_emoji: string;
  seo_title: string;
  seo_description: string;
  rating_sportclubs?: string;
  rating_scholen?: string;
  rating_non_profit?: string;
  rating_bedrijven?: string;
  hero_title: string;
  hero_image_naam?: string;
  hero_image_alt?: string;
  hero_video_naam?: string;
  hero_subtitle: string;
  hero_description: string;
  h1_title?: string;
  h1_content?: string;
  h1_image_naam?: string;
  h1_image_alt?: string;
  wat_is_beschrijving: string;
  wat_is_image?: string;
  wat_krijg_je_1?: string;
  wat_krijg_je_2?: string;
  wat_krijg_je_3?: string;
  wat_krijg_je_4?: string;
  wat_krijg_je_5?: string;
  wat_krijg_je_image?: string;
  SEO_content_1_title?: string;
  SEO_content_1_text?: string;
  image_1?: string;
  SEO_content_2_title?: string;
  SEO_content_2_text?: string;
  image_2?: string;
  SEO_content_3_title?: string;
  SEO_content_3_text?: string;
  image_3?: string;
  SEO_content_4_title?: string;
  SEO_content_4_text?: string;
  image_4?: string;
  SEO_content_5_title?: string;
  SEO_content_5_text?: string;
  image_5?: string;
  seo_content_1_title?: string;
  seo_content_1_text?: string;
  seo_content_2_title?: string;
  seo_content_2_text?: string;
  seo_content_3_title?: string;
  seo_content_3_text?: string;
  seo_content_4_title?: string;
  seo_content_4_text?: string;
  seo_content_5_title?: string;
  seo_content_5_text?: string;
  gallery_images?: string[];
  extra_images?: string[];
  faq_1_vraag?: string;
  faq_1_antwoord?: string;
  faq_2_vraag?: string;
  faq_2_antwoord?: string;
  faq_3_vraag?: string;
  faq_3_antwoord?: string;
  faq_4_vraag?: string;
  faq_4_antwoord?: string;
  faq_5_vraag?: string;
  faq_5_antwoord?: string;
  gerelateerd_1_naam?: string;
  gerelateerd_2_naam?: string;
  gerelateerd_3_naam?: string;
}

async function getEventData(slug: string) {
  const { data: eventSeo, error: seoError } = await supabase
    .from('seo')
    .select('*')
    .eq('url_slug', slug)
    .single();

  if (seoError || !eventSeo) {
    return null;
  }

  const { data: packages, error: packagesError } = await supabase
    .from('events')
    .select('*')
    .eq('landing_page', eventSeo.landing_page)
    .gt('package_price', 0) // Filter out packages with a price of 0
    .order('package_price', { ascending: true });

  if (packagesError) {
    console.error("Error fetching packages:", packagesError.message);
    // Even if packages fail, we might still want to show the event page
    return { eventSeo, packages: [] };
  }

  return { eventSeo, packages: packages || [] };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const eventData = await getEventData(slug);

  if (!eventData || !eventData.eventSeo) {
    return {};
  }

  const { eventSeo } = eventData;

  return {
    title: eventSeo.seo_title,
    description: eventSeo.seo_description,
    // Add canonical URL, Open Graph, Twitter cards here if needed
    // For example:
    // openGraph: {
    //   title: eventSeo.seo_title,
    //   description: eventSeo.seo_description,
    //   url: `https://yourdomain.com/events/${eventSeo.url_slug}`,
    //   type: 'website',
    // },
    // twitter: {
    //   card: 'summary_large_image',
    //   title: eventSeo.seo_title,
    //   description: eventSeo.seo_description,
    // },
  };
}

// Optional: generate static params for all event pages at build time
export async function generateStaticParams() {
  const { data: seoData, error } = await supabase
    .from('seo')
    .select('url_slug');

  if (error) {
    console.error("Error fetching slugs for static params:", error.message);
    return [];
  }

  return (seoData || []).map((item) => ({
    slug: item.url_slug,
  }));
}

export default async function DynamicEventPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const eventData = await getEventData(slug);

  if (!eventData || !eventData.eventSeo) {
    notFound();
  }

  const { eventSeo, packages } = eventData;

  const parsedSeo = {
    ...eventSeo,
    rating_sportclubs: eventSeo.rating_sportclubs ? parseInt(eventSeo.rating_sportclubs, 10) : undefined,
    rating_scholen: eventSeo.rating_scholen ? parseInt(eventSeo.rating_scholen, 10) : undefined,
    rating_non_profit: eventSeo.rating_non_profit ? parseInt(eventSeo.rating_non_profit, 10) : undefined,
    rating_bedrijven: eventSeo.rating_bedrijven ? parseInt(eventSeo.rating_bedrijven, 10) : undefined,
  };

  return (
    <EventTemplateClient 
      {...parsedSeo}
      packages={packages || []}
    />
  );
}
