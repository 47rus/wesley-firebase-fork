import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Building2, Hash, CreditCard, Banknote } from 'lucide-react';
import Container from '@/components/layout/Container';
import WeBadge from '@/components/ui/WeBadge';
import { supabase } from '@/integrations/supabase/client';

interface FooterEvent {
  id: string;
  name: string;
  href: string;
}

interface Logo {
  id: string;
  name: string;
  file_path: string;
  logo_type: string;
  background_type: string;
  is_primary: boolean;
}

const Footer = () => {
  const [events, setEvents] = useState<FooterEvent[]>([]);
  const [primaryLogo, setPrimaryLogo] = useState<Logo | null>(null);

  // Fetch events from Supabase seo table
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from('seo')
          .select('id, landing_page, url_slug')
          .order('id', { ascending: true });

        if (error) {
          console.error('Error fetching events:', error);
          return;
        }

        if (data) {
          const formattedEvents: FooterEvent[] = data.map((item) => ({
            id: item.id?.toString() || '',
            name: item.landing_page || 'Event',
            href: `/events/${item.url_slug || 'event'}`
          }));

          setEvents(formattedEvents);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  // Fetch primary logo from database
  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const { data, error } = await supabase
          .from('logos')
          .select('*')
          .eq('logo_type', 'icon')
          .eq('background_type', 'transparent')
          .single();

        if (error) {
          console.error('Error fetching logo:', error);
          return;
        }

        if (data) {
          // Use the correct bucket and construct proper URL
          const { data: urlData } = supabase.storage
            .from('Website Images')
            .getPublicUrl(data.file_path);
          
          setPrimaryLogo({
            ...data,
            file_path: urlData.publicUrl
          });
        }
      } catch (error) {
        console.error('Error fetching logo:', error);
      }
    };

    fetchLogo();
  }, []);

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                {primaryLogo ? (
                  <img 
                    src={primaryLogo.file_path} 
                    alt={primaryLogo.name}
                    className="h-10 w-10"
                  />
                ) : (
                  <div className="w-10 h-10 bg-weplay-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">W</span>
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-heading font-bold">WePlay</h3>
                  <p className="text-xs text-gray-400">UNITED</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Specialist in game-events op locatie voor sportclubs, scholen, bedrijven en non-profits. We organiseren unieke gaming ervaringen zoals FIFA toernooien, F1 simulators, VR experiences en bubbelvoetbal. Van teambuilding tot seizoensafsluitingen - wij ontzorgen volledig en zorgen voor onvergetelijke momenten die je team samenbrengen.
              </p>
              <WeBadge variant="knvb" size="sm">Official Supplier KNVB</WeBadge>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold">Contact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <Building2 className="w-4 h-4 text-weplay-primary mt-0.5" />
                  <div>
                    <div className="font-medium">WePlay United B.V.</div>
                  </div>
                </div>
                <div className="ml-7 space-y-1">
                  <div>Tt. Melaniaweg 2</div>
                  <div>1033 ST Amsterdam</div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-weplay-primary" />
                  <span>+31 (0) 20 808 8670</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-weplay-primary" />
                  <span>info@weplayunited.nl</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-weplay-primary" />
                  <span>Ma-Vr 09:00-18:00</span>
                </div>
                <div className="border-t border-gray-800 pt-3 space-y-2">
                  <div className="flex items-center space-x-3">
                    <Hash className="w-4 h-4 text-weplay-primary" />
                    <span>KvK: 97913626</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-4 h-4 text-weplay-primary" />
                    <span>BTW: NL868286473B01</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Banknote className="w-4 h-4 text-weplay-primary" />
                    <span>IBAN: NL19 ADYB 1000 0505 98</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Events */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold">Events</h4>
              <div className="space-y-2 text-sm">
                {events.slice(0, 9).map((event) => (
                  <a key={event.id} href={event.href} className="block text-gray-300 hover:text-weplay-primary transition-colors">{event.name}</a>
                ))}
                <a href="/events" className="block text-weplay-primary hover:text-white transition-colors font-medium">Alle Events →</a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold">Doelgroepen</h4>
              <div className="space-y-2 text-sm">
                <a href="/sportclubs" className="block text-gray-300 hover:text-weplay-primary transition-colors">Sportclubs</a>
                <a href="/scholen" className="block text-gray-300 hover:text-weplay-primary transition-colors">Scholen</a>
                <a href="/bedrijven" className="block text-gray-300 hover:text-weplay-primary transition-colors">Bedrijven</a>
                <a href="/non-profits" className="block text-gray-300 hover:text-weplay-primary transition-colors">Non-profits</a>
                <a href="/contact" className="block text-weplay-primary hover:text-white transition-colors font-medium pt-2">Contact →</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-400">
              Copyright © 2017 – 2025 WePlay United B.V. (doorstart uit WePlay Esports B.V. per 01-08-2025)
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-weplay-primary transition-colors">Privacy</a>
              <a href="/algemene-voorwaarden" className="text-gray-400 hover:text-weplay-primary transition-colors">Algemene Voorwaarden</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;