'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, Clock, Building2, Hash, CreditCard, Banknote } from 'lucide-react';
import Container from '@/components/layout/Container';
import WeBadge from '@/components/ui/WeBadge';
import { useLogos, AppLogo } from '@/hooks/use-logos';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '@/integrations/firebase/client';

const Footer = () => {
  const logos = useLogos();
  const [events, setEvents] = useState<any[]>([]);

  const darkLogo = logos?.find((logo: AppLogo) => logo.background_type === 'dark');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const q = query(collection(db, 'seo'), orderBy('sort_order', 'asc'), limit(9));
        const querySnapshot = await getDocs(q);
        const eventsData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.landing_page,
            href: `/event/${data.url_slug}`,
          };
        });
        setEvents(eventsData);
      } catch (error) {
        console.error('Error fetching events for footer:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img 
                  src={darkLogo?.url || '/placeholder.svg'}
                  alt="WePlay Icon White"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-300 text-sm">
                Specialist in game-events op locatie voor sportclubs, scholen, bedrijven en non-profits. We organiseren unieke gaming ervaringen zoals FIFA toernooien, F1 simulators, VR experiences en bubbelvoetbal. Van teambuilding tot seizoensafsluitingen - wij ontzorgen volledig en zorgen voor onvergetelijke momenten die je team samenbrengen.
              </p>
              <WeBadge variant="knvb" size="sm">Official Supplier KNVB</WeBadge>
            </div>

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

            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold">Events</h4>
              <div className="space-y-2 text-sm">
                {events.map((event) => (
                  <Link key={event.id} href={event.href} className="block text-gray-300 hover:text-weplay-primary transition-colors">{event.name}</Link>
                ))}
                <Link href="/events" className="block text-weplay-primary hover:text-white transition-colors font-medium">Alle Events →</Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold">Doelgroepen</h4>
              <div className="space-y-2 text-sm">
                <Link href="/sportclubs" className="block text-gray-300 hover:text-weplay-primary transition-colors">Sportclubs</Link>
                <Link href="/scholen" className="block text-gray-300 hover:text-weplay-primary transition-colors">Scholen</Link>
                <Link href="/bedrijven" className="block text-gray-300 hover:text-weplay-primary transition-colors">Bedrijven</Link>
                <Link href="/non-profits" className="block text-gray-300 hover:text-weplay-primary transition-colors">Non-profits</Link>
                <Link href="/contact" className="block text-weplay-primary hover:text-white transition-colors font-medium pt-2">Contact →</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-400">
              Copyright © 2017 – 2025 WePlay United B.V. (doorstart uit WePlay Esports B.V. per 01-08-2025)
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-weplay-primary transition-colors">Privacy</Link>
              <Link href="/algemene-voorwaarden" className="text-gray-400 hover:text-weplay-primary transition-colors">Algemene Voorwaarden</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
