
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

// Define the shape of the SEO data
interface SeoData {
  id: string;
  url_slug: string;
  landing_page: string;
  event_emoji: string;
  seo_title: string;
  seo_description: string;
}

// Custom hook to fetch SEO data
export const useSeo = () => {
  return useQuery<SeoData[], Error>({
    queryKey: ['seo'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('seo')
        .select('*');

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    // Cache the data for 1 hour
    staleTime: 1000 * 60 * 60,
  });
};
