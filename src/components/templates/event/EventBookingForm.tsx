'use client';

import React, { useState } from 'react';
import { CheckCircle, Phone, Settings } from 'lucide-react';
import Container from '@/components/layout/Container';
import { WeCard, WeCardContent } from '@/components/ui/WeCard';
import WeButton from '@/components/ui/WeButton';
import WeSelect from '@/components/ui/WeSelect';
import { Package } from './EventPackages';
import { scrollToBookingForm } from '@/utils/scrollUtils';

interface EventBookingFormProps {
  hero_title: string;
  url_slug: string;
  packages: Package[];
}

const EventBookingForm: React.FC<EventBookingFormProps> = ({ hero_title, url_slug, packages }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, any> = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    data.event = url_slug;

    try {
      const res = await fetch('https://hook.eu1.make.com/iwdsbm75pnvw7rnmwmbdu4uj72w5522j', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setFormSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <section id="booking-form" className="py-24 bg-gradient-to-br from-weplay-primary to-weplay-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
      <Container>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl lg:text-5xl font-heading font-black mb-16 uppercase tracking-tight">
            {hero_title || 'Event boeken'}
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
                    <select name="groupSize" className="p-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white focus:border-white/50 focus:outline-none appearance-none" required>
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
                       options={packages.map(pkg => ({
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
  );
};

export default EventBookingForm;