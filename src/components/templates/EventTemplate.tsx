'use client';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import EventHero from './event/EventHero';
import EventPackages, { Package } from './event/EventPackages';
import EventInspirationalContent from './event/EventInspirationalContent';
import EventAboutSection from './event/EventAboutSection';
import EventTargetSegments from './event/EventTargetSegments';
import EventBookingForm from './event/EventBookingForm';
import EventSeoContent from './event/EventSeoContent';
import EventFaq from './event/EventFaq';
import EventRelatedEvents from './event/EventRelatedEvents';
import EventFinalCta from './event/EventFinalCta';

export interface EventTemplateProps {
  // SEO fields
  url_slug: string;
  seo_title: string;
  seo_description: string;
  
  // Hero section
  event_emoji: string;
  hero_title: string;
  hero_image_naam?: string;
  hero_image_alt?: string;
  hero_video_naam?: string;
  hero_subtitle: string;
  hero_description: string;
  
  // H1 inspirational content section
  h1_title?: string;
  h1_content?: string;
  h1_image_naam?: string;
  h1_image_alt?: string;
  
  // Event details
  wat_is_beschrijving: string;
  wat_is_image?: string;
  
  // What you get features
  wat_krijg_je_1?: string;
  wat_krijg_je_2?: string;
  wat_krijg_je_3?: string;
  wat_krijg_je_4?: string;
  wat_krijg_je_5?: string;
  wat_krijg_je_image?: string;
  
  // Packages - loaded separately
  packages: Package[];
  
  // Ratings per segment (0-100 percentage values)
  rating_sportclubs?: number;
  rating_scholen?: number;
  rating_non_profit?: number;
  rating_bedrijven?: number;
  
  // SEO content blocks
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
  
  // Also accept lowercase SEO content keys from Supabase
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
  
  // Gallery
  gallery_images?: string[];
  extra_images?: string[];
  
  // FAQ
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
  
  // Related events
  gerelateerd_1_naam?: string;
  gerelateerd_2_naam?: string;
  gerelateerd_3_naam?: string;
}

const EventTemplate: React.FC<EventTemplateProps> = (props) => {

  const getFAQs = () => {
    const faqs = [];
    if (props.faq_1_vraag && props.faq_1_antwoord) faqs.push({ question: props.faq_1_vraag, answer: props.faq_1_antwoord });
    if (props.faq_2_vraag && props.faq_2_antwoord) faqs.push({ question: props.faq_2_vraag, answer: props.faq_2_antwoord });
    if (props.faq_3_vraag && props.faq_3_antwoord) faqs.push({ question: props.faq_3_vraag, answer: props.faq_3_antwoord });
    if (props.faq_4_vraag && props.faq_4_antwoord) faqs.push({ question: props.faq_4_vraag, answer: props.faq_4_antwoord });
    if (props.faq_5_vraag && props.faq_5_antwoord) faqs.push({ question: props.faq_5_vraag, answer: props.faq_5_antwoord });
    return faqs;
  };

  const getSEOContent = () => {
    const content = [];

    const title1 = props.SEO_content_1_title ?? props.seo_content_1_title;
    const text1 = props.SEO_content_1_text ?? props.seo_content_1_text;
    if (title1 && text1) {
      content.push({ title: title1, text: text1, image: props.image_1 });
    }

    const title2 = props.SEO_content_2_title ?? props.seo_content_2_title;
    const text2 = props.SEO_content_2_text ?? props.seo_content_2_text;
    if (title2 && text2) {
      content.push({ title: title2, text: text2, image: props.image_2 });
    }

    const title3 = props.SEO_content_3_title ?? props.seo_content_3_title;
    const text3 = props.SEO_content_3_text ?? props.seo_content_3_text;
    if (title3 && text3) {
      content.push({ title: title3, text: text3, image: props.image_3 });
    }

    const title4 = props.SEO_content_4_title ?? props.seo_content_4_title;
    const text4 = props.SEO_content_4_text ?? props.seo_content_4_text;
    if (title4 && text4) {
      content.push({ title: title4, text: text4, image: props.image_4 });
    }

    const title5 = props.SEO_content_5_title ?? props.seo_content_5_title;
    const text5 = props.SEO_content_5_text ?? props.seo_content_5_text;
    if (title5 && text5) {
      content.push({ title: title5, text: text5, image: props.image_5 });
    }

    return content;
  };

  const getRelatedEvents = () => {
    const related = [];
    if (props.gerelateerd_1_naam) related.push({ name: props.gerelateerd_1_naam, emoji: '🎮', price: 299 });
    if (props.gerelateerd_2_naam) related.push({ name: props.gerelateerd_2_naam, emoji: '🎯', price: 399 });
    if (props.gerelateerd_3_naam) related.push({ name: props.gerelateerd_3_naam, emoji: '🏆', price: 449 });
    return related;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <EventHero
          event_emoji={props.event_emoji}
          hero_title={props.hero_title}
          hero_image_naam={props.hero_image_naam}
          hero_image_alt={props.hero_image_alt}
          hero_video_naam={props.hero_video_naam}
          hero_subtitle={props.hero_subtitle}
          hero_description={props.hero_description}
          packages={props.packages}
          rating_sportclubs={props.rating_sportclubs}
          rating_scholen={props.rating_scholen}
          rating_non_profit={props.rating_non_profit}
          rating_bedrijven={props.rating_bedrijven}
        />

        <EventPackages packages={props.packages} />

        <EventInspirationalContent
          h1_title={props.h1_title}
          h1_content={props.h1_content}
          h1_image_naam={props.h1_image_naam}
        />

        <EventAboutSection
          hero_title={props.hero_title}
          wat_is_beschrijving={props.wat_is_beschrijving}
          wat_is_image={props.wat_is_image}
          event_emoji={props.event_emoji}
        />

        <EventTargetSegments
          hero_title={props.hero_title}
          rating_sportclubs={props.rating_sportclubs}
          rating_bedrijven={props.rating_bedrijven}
          rating_scholen={props.rating_scholen}
          rating_non_profit={props.rating_non_profit}
        />
        
        <EventBookingForm 
          hero_title={props.hero_title}
          url_slug={props.url_slug}
          packages={props.packages}
        />

        <EventSeoContent
          content={getSEOContent()}
          event_emoji={props.event_emoji}
        />

        <EventFaq faqs={getFAQs()} />

        <EventRelatedEvents events={getRelatedEvents()} />

        <EventFinalCta hero_title={props.hero_title} />
      </main>
      
      <Footer />
    </div>
  );
};

export default EventTemplate;