import React, { useState } from 'react';
import { CheckCircle, Phone, ArrowRight, Settings, Trophy, Building2, GraduationCap, Heart } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import { WeCard, WeCardContent } from '@/components/ui/WeCard';
import WeButton from '@/components/ui/WeButton';
import WeSelect from '@/components/ui/WeSelect';
import UnifiedCard from '@/components/ui/UnifiedCard';
import Typography from '@/components/ui/Typography';
import EventHero from './EventHero';
import EventPackages from './EventPackages';
import EventAbout from './EventAbout';
import { brandPromises } from '@/data/brandPromises';
import { scrollToBookingForm } from '@/utils/scrollUtils';
import { Package } from './EventPackages';
import { Helmet } from 'react-helmet-async';

interface EventTemplateProps {
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
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, any> = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    data.event = props.hero_title;

    try {
      const res = await fetch('https://hook.eu1.make.com/coln5r5l71ccqr5mn3pm1meapbt7wc1e', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setFormSubmitted(true);
        form.reset();
      }
    } catch (error) {
      // Optional: handle error silently for now
    }
  };

  // Target segments data with consistent styling
  const targetSegments = [
    {
      icon: Trophy,
      title: 'Sportclubs',
      iconBgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-500',
      rating: props.rating_sportclubs
    },
    {
      icon: Building2,
      title: 'Bedrijven',
      iconBgColor: 'bg-blue-100',
      iconColor: 'text-blue-500',
      rating: props.rating_bedrijven
    },
    {
      icon: GraduationCap,
      title: 'Scholen',
      iconBgColor: 'bg-green-100',
      iconColor: 'text-green-500',
      rating: props.rating_scholen
    },
    {
      icon: Heart,
      title: 'Non-profits',
      iconBgColor: 'bg-purple-100',
      iconColor: 'text-purple-500',
      rating: props.rating_non_profit
    }
  ];

  const getWhatYouGetFeatures = () => {
    const features = [];
    if (props.wat_krijg_je_1) features.push(props.wat_krijg_je_1);
    if (props.wat_krijg_je_2) features.push(props.wat_krijg_je_2);
    if (props.wat_krijg_je_3) features.push(props.wat_krijg_je_3);
    if (props.wat_krijg_je_4) features.push(props.wat_krijg_je_4);
    if (props.wat_krijg_je_5) features.push(props.wat_krijg_je_5);
    return features;
  };

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
        {/* SEO Meta Tags via Helmet */}
        <Helmet>
          <title>{props.seo_title}</title>
          <meta name="description" content={props.seo_description} />
          <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + window.location.pathname : ''} />

          {/* Open Graph */}
          <meta property="og:title" content={props.seo_title} />
          <meta property="og:description" content={props.seo_description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={props.seo_title} />
          <meta name="twitter:description" content={props.seo_description} />

          {/* JSON-LD Product schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: props.hero_title,
              description: props.seo_description,
              brand: { '@type': 'Brand', name: 'WePlayUnited' },
              offers: (props.packages || []).map((p) => ({
                '@type': 'Offer',
                name: p.pakket_naam,
                price: p.package_price,
                priceCurrency: 'EUR',
                availability: 'https://schema.org/InStock'
              }))
            })}
          </script>
        </Helmet>
        
        {/* 1. HERO SECTION */}
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

        {/* 2. PACKAGES SECTION */}
        {props.packages.length > 0 && (
          <EventPackages packages={props.packages} />
        )}

        {/* H1 INSPIRATIONAL CONTENT SECTION - NOW FULL SCREEN */}
        {props.h1_title && props.h1_content && (
          <section 
            className="relative min-h-screen h-screen flex items-center bg-gradient-to-br from-weplay-light via-white to-weplay-accent-light"
            style={{
              backgroundImage: props.h1_image_naam ? `url(/placeholder.svg)` : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {props.h1_image_naam && (
              <div className="absolute inset-0 bg-black/40" />
            )}
            <Container>
              <div className="relative z-10 text-center">
                <div className="mb-16">
                  <h2 className={`text-3xl lg:text-4xl font-heading font-black uppercase mb-8 tracking-tight ${props.h1_image_naam ? 'text-white' : 'text-weplay-text'}`}>
                    {props.h1_title}
                  </h2>
                  <div className={`text-xl leading-relaxed space-y-6 font-medium ${props.h1_image_naam ? 'text-white/90' : 'text-weplay-text-medium'}`}>
                    {props.h1_content.split('\n').map((paragraph, index) => (
                      paragraph.trim() && (
                        <p key={index}>{paragraph}</p>
                      )
                    ))}
                  </div>
                </div>
                
                {/* Brand Promises - Using UnifiedCard */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {brandPromises.map((promise, index) => (
                    <UnifiedCard
                      key={index}
                      hover
                      variant="default"
                      icon={promise.icon}
                      title={promise.title}
                      
                      iconBgColor={promise.color}
                      iconColor="text-white"
                    />
                  ))}
                </div>
              </div>
            </Container>
          </section>
        )}

        {/* 4. ABOUT SECTION */}
        <section className="py-24 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-heading font-black text-weplay-text mb-6 uppercase tracking-tight">
                  Wat is {props.hero_title}?
                </h2>
                <div className="text-lg text-weplay-text-medium leading-relaxed space-y-4 font-medium mb-8">
                  {props.wat_is_beschrijving.split('\n').map((paragraph, index) => (
                    paragraph.trim() && (
                      <p key={index}>{paragraph}</p>
                    )
                  ))}
                </div>
                <WeButton 
                  variant="primary" 
                  size="lg" 
                  onClick={() => scrollToBookingForm()}
                >
                  VRIJBLIJVEND VOORSTEL
                </WeButton>
              </div>
              <div>
                {props.wat_is_image ? (
                  <div className="bg-gradient-to-br from-weplay-primary/10 to-weplay-accent/10 rounded-3xl aspect-video flex items-center justify-center hover:scale-105 transition-transform duration-300 border-2 border-white/50 shadow-xl">
                    <div className="text-center">
                      <div className="text-6xl mb-4">{props.event_emoji}</div>
                      <span className="text-weplay-text-medium font-bold">Afbeelding: {props.wat_is_image}</span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-weplay-primary/10 to-weplay-dark/10 rounded-3xl aspect-video flex items-center justify-center hover:scale-105 transition-transform duration-300 border-2 border-white/50 shadow-xl">
                    <div className="text-center animate-float">
                      <div className="text-8xl">{props.event_emoji}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* PERFECT VOOR SECTION - Using UnifiedCard */}
        <section className="py-24 bg-gradient-to-br from-weplay-light via-white to-weplay-accent-light">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-black text-weplay-text mb-6 tracking-tight uppercase">
                PERFECT VOOR
              </h2>
              <p className="text-lg text-weplay-text-medium max-w-2xl mx-auto">
                Ontdek waarom verschillende groepen voor {props.hero_title} kiezen
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {targetSegments.map((segment, index) => (
                <UnifiedCard
                  key={index}
                  hover
                  icon={segment.icon}
                  title={segment.title}
                  percentage={segment.rating}
                  iconBgColor={segment.iconBgColor}
                  iconColor={segment.iconColor}
                  variant="default"
                />
              ))}
            </div>
            
          </Container>
        </section>

        {/* 6. BOOKING FORM - SIMPLIFIED */}
        <section id="booking-form" className="py-24 bg-gradient-to-br from-weplay-primary to-weplay-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
          <Container>
            <div className="max-w-4xl mx-auto text-center relative">
              <h2 className="text-4xl lg:text-5xl font-heading font-black mb-16 uppercase tracking-tight">
                {props.hero_title || 'Event boeken'}
              </h2>
              
              <div className="flex flex-wrap justify-center gap-8 mb-16">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="font-medium">Gratis offerte</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="font-medium">Binnen 24u reactie</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="font-medium">Geen verborgen kosten</span>
                </div>
              </div>
              
              {!formSubmitted ? (
                <WeCard className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <WeCardContent className="p-8">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input 
                          type="text" 
                          name="name"
                          placeholder="Naam" 
                          className="p-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:border-white/50 focus:outline-none" 
                          required 
                        />
                        <input 
                          type="email" 
                          name="email"
                          placeholder="Email" 
                          className="p-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:border-white/50 focus:outline-none" 
                          required 
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input 
                          type="tel" 
                          name="phone"
                          placeholder="Telefoon" 
                          className="p-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:border-white/50 focus:outline-none" 
                          required 
                        />
                        <select name="groupSize" className="p-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white focus:border-white/50 focus:outline-none" required>
                          <option value="" className="text-gray-900">Groepsgrootte</option>
                          <option value="8-15" className="text-gray-900">8-15 personen</option>
                          <option value="16-25" className="text-gray-900">16-25 personen</option>
                          <option value="26-40" className="text-gray-900">26-40 personen</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input 
                          type="date" 
                          name="date"
                          className="p-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white focus:border-white/50 focus:outline-none" 
                        />
                         <WeSelect
                           name="selectedPackage"
                           variant="glass"
                           placeholder="Kies pakket"
                           options={props.packages.map(pkg => ({
                             value: pkg.pakket_naam,
                             label: `${pkg.pakket_naam} (${pkg.group_size_display_min}-${pkg.group_size_display_max} personen) - €${pkg.package_price}`
                           }))}
                           required
                         />
                      </div>
                      <textarea 
                        name="notes"
                        placeholder="Opmerkingen" 
                        rows={4} 
                        className="w-full p-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:border-white/50 focus:outline-none resize-none"
                      ></textarea>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <WeButton 
                          type="submit" 
                          variant="secondary" 
                          size="lg" 
                          className="min-w-[200px]"
                        >
                          VERSTUUR AANVRAAG
                        </WeButton>
                        <WeButton 
                          type="button" 
                          variant="outline" 
                          size="lg" 
                          icon={Settings}
                          className="min-w-[200px] border-2 border-white text-white hover:bg-white hover:text-weplay-primary"
                          onClick={() => scrollToBookingForm()}
                        >
                          STEL EEN GROTER EVENT SAMEN
                        </WeButton>
                      </div>
                    </form>
                  </WeCardContent>
                </WeCard>
              ) : (
                <WeCard className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <WeCardContent className="p-8 text-center space-y-6">
                    <CheckCircle className="w-20 h-20 text-green-400 mx-auto" />
                    <h3 className="text-3xl font-heading font-bold">Aanvraag ontvangen!</h3>
                    <p className="text-lg text-weplay-light">We nemen binnen 24 uur contact op.</p>
                    <WeButton 
                      variant="secondary" 
                      size="lg" 
                      icon={Phone}
                      className="bg-white text-weplay-primary hover:bg-weplay-light"
                      onClick={() => window.open('tel:0208088670')}
                    >
                      020 808 8670
                    </WeButton>
                  </WeCardContent>
                </WeCard>
              )}
            </div>
          </Container>
        </section>

        {/* 7. SEO CONTENT SECTIONS */}
        <section className="py-24 bg-gradient-to-br from-weplay-light via-white to-weplay-accent-light">
          <Container>
            <div className="space-y-20">
              {getSEOContent().slice(0, 5).map((content, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <h2 className="text-3xl lg:text-4xl font-heading font-black text-weplay-text mb-6 uppercase tracking-tight">
                      {content.title}
                    </h2>
                    <div className="text-lg text-weplay-text-medium leading-relaxed space-y-4 font-medium mb-8">
                      {content.text.split('\n').slice(0, 2).map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                    <WeButton 
                      variant="outline" 
                      size="lg" 
                      icon={ArrowRight} 
                      iconPosition="right"
                      onClick={() => scrollToBookingForm()}
                    >
                      VRIJBLIJVEND VOORSTEL
                    </WeButton>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    {content.image ? (
                      <div className="bg-gradient-to-br from-weplay-primary/10 to-weplay-accent/10 rounded-3xl aspect-video flex items-center justify-center hover:scale-105 transition-transform duration-300 border-2 border-white/50 shadow-xl">
                        <div className="text-center">
                          <div className="text-6xl mb-4">{props.event_emoji}</div>
                          <span className="text-weplay-text-medium font-bold">Afbeelding: {content.image}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gradient-to-br from-weplay-primary/10 to-weplay-dark/10 rounded-3xl aspect-video flex items-center justify-center hover:scale-105 transition-transform duration-300 border-2 border-white/50 shadow-xl">
                        <div className="text-center animate-float">
                          <div className="text-8xl">{props.event_emoji}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 8. FAQ SECTION */}
        {getFAQs().length > 0 && (
          <section className="py-24 bg-weplay-light">
            <Container>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-heading font-black text-weplay-text tracking-tight">
                  Veelgestelde vragen
                </h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-6">
                {getFAQs().map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-2 border-weplay-accent-light rounded-2xl overflow-hidden hover:border-weplay-primary transition-colors">
                    <AccordionTrigger className="px-8 py-6 hover:no-underline bg-white hover:bg-weplay-accent-light transition-colors">
                      <h3 className="font-heading font-bold text-lg text-left text-weplay-text">{faq.question}</h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6 bg-white">
                      <p className="text-lg text-weplay-text-medium leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <div className="text-center mt-12">
                <WeButton 
                  variant="primary" 
                  size="lg" 
                  icon={Phone} 
                  iconPosition="left"
                  onClick={() => scrollToBookingForm()}
                >
                  VRIJBLIJVEND VOORSTEL
                </WeButton>
              </div>
            </Container>
          </section>
        )}

        {/* 9. RELATED EVENTS */}
        {getRelatedEvents().length > 0 && (
          <section className="py-24 bg-white">
            <Container>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-heading font-black text-weplay-text mb-6 tracking-tight">
                  Vaak gecombineerd met
                </h2>
                <p className="text-lg text-weplay-text-medium">
                  Maak je event nog completer
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {getRelatedEvents().map((event, index) => (
                  <WeCard key={index} className="text-center group hover:shadow-weplay-glow transition-all duration-300 cursor-pointer" hover>
                    <WeCardContent className="p-8 space-y-6">
                      <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{event.emoji}</div>
                      <h3 className="font-heading font-bold text-xl text-weplay-text">{event.name}</h3>
                      <div className="text-3xl font-heading font-black text-weplay-primary">€{event.price}</div>
                      <WeButton 
                        variant="outline" 
                        size="md"
                        icon={ArrowRight}
                        iconPosition="right"
                        onClick={() => scrollToBookingForm()}
                      >
                        VRIJBLIJVEND VOORSTEL
                      </WeButton>
                    </WeCardContent>
                  </WeCard>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <WeButton 
                  variant="primary" 
                  size="lg" 
                  icon={ArrowRight} 
                  iconPosition="right"
                  onClick={() => scrollToBookingForm()}
                >
                  VRIJBLIJVEND VOORSTEL
                </WeButton>
              </div>
            </Container>
          </section>
        )}

        {/* 10. FINAL CTA */}
        <section className="py-24 bg-gradient-to-br from-weplay-text to-weplay-text/90 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(233,0,199,0.3),transparent_70%)]"></div>
          <Container>
            <div className="text-center space-y-10 relative">
              <h2 className="text-4xl lg:text-5xl font-heading font-black uppercase tracking-tight">
                Klaar voor jouw {props.hero_title}?
              </h2>
              <p className="text-2xl text-weplay-light max-w-3xl mx-auto font-medium">
                Binnen 24 uur een persoonlijke offerte in je mailbox
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                <WeButton 
                  variant="primary" 
                  size="xl"
                  onClick={() => scrollToBookingForm()}
                >
                  VRIJBLIJVEND VOORSTEL
                </WeButton>
                <WeButton 
                  variant="outline" 
                  size="xl" 
                  icon={Phone}
                  className="border-white text-white hover:bg-white hover:text-weplay-text"
                  onClick={() => window.open('tel:0208088670')}
                >
                  020 808 8670
                </WeButton>
              </div>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventTemplate;
