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

import { toast } from 'sonner';

// ... (rest of the component props)

const EventTemplate: React.FC<EventTemplateProps> = (props) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
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
      
      if (!res.ok) {
        // Throw an error to be caught by the catch block
        throw new Error(`Server responded with ${res.status}`);
      }
      
      // Success
      setFormSubmitted(true);
      toast.success('Aanvraag succesvol verzonden!', {
        description: 'We nemen binnen 24 uur contact met je op.',
      });
      form.reset();

    } catch (error) {
      console.error("Form submission error:", error);
      toast.error('Er is iets misgegaan.', {
        description: 'Controleer je internetverbinding en probeer het opnieuw.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... (rest of the component logic)
  
  return (
    // ... (JSX before the form)
                        <WeButton 
                          type="submit" 
                          variant="secondary" 
                          size="lg" 
                          className="min-w-[200px]"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'VERSTUREN...' : 'VERSTUUR AANVRAAG'}
                        </WeButton>
    // ... (rest of the JSX)

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
