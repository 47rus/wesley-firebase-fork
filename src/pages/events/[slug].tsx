import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EventTemplate from '@/components/templates/EventTemplate';
import { Package } from '@/components/templates/EventPackages';
import { supabase } from '@/integrations/supabase/client';
import NotFound from '@/pages/NotFound';

// Dynamic Event Page that fetches SEO + Packages from Supabase
const DynamicEventPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);
  const [seoData, setSeoData] = useState<any | null>(null);
  const [packages, setPackages] = useState<Package[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;
      setLoading(true);
      setError(null);

      // 1) Fetch SEO/content by slug
      const { data: seoRow, error: seoError } = await supabase
        .from('seo')
        .select('*')
        .eq('url_slug', slug)
        .maybeSingle();

      if (seoError) {
        setError('Kon SEO-gegevens niet laden.');
        setLoading(false);
        return;
      }

      if (!seoRow) {
        setSeoData(null);
        setLoading(false);
        return;
      }

      // Parse rating fields (DB has text, UI expects numbers)
      const parsedSeo = {
        ...seoRow,
        rating_sportclubs: seoRow.rating_sportclubs ? parseInt(seoRow.rating_sportclubs, 10) : undefined,
        rating_scholen: seoRow.rating_scholen ? parseInt(seoRow.rating_scholen, 10) : undefined,
        rating_non_profit: seoRow.rating_non_profit ? parseInt(seoRow.rating_non_profit, 10) : undefined,
        rating_bedrijven: seoRow.rating_bedrijven ? parseInt(seoRow.rating_bedrijven, 10) : undefined,
      };

      setSeoData(parsedSeo);

      // 2) Fetch related packages using landing_page from SEO row
      const { data: pkgRows, error: pkgError } = await supabase
        .from('events')
        .select('*')
        .eq('landing_page', seoRow.landing_page || null)
        .order('package_price', { ascending: true });

      if (pkgError) {
        setError('Kon pakketten niet laden.');
      } else {
        setPackages(pkgRows || []);
      }

      setLoading(false);
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-weplay-text">Even geduld…</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-weplay-text">{error}</div>
      </div>
    );
  }

  if (!seoData) {
    return <NotFound />;
  }

  return (
    <EventTemplate 
      {...seoData}
      packages={packages}
    />
  );
};

export default DynamicEventPage;
