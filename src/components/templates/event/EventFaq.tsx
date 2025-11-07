import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Container from '@/components/layout/Container';
import WeButton from '@/components/ui/WeButton';
import { Phone } from 'lucide-react';
import { scrollToBookingForm } from '@/utils/scrollUtils';

interface FaqItem {
  question: string;
  answer: string;
}

interface EventFaqProps {
  faqs: FaqItem[];
}

const EventFaq: React.FC<EventFaqProps> = ({ faqs }) => {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-weplay-light">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-black text-weplay-text tracking-tight">
            Veelgestelde vragen
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="space-y-6">
          {faqs.map((faq, index) => (
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
  );
};

export default EventFaq;