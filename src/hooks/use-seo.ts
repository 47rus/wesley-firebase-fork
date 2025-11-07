
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';

type SeoData = Tables<'seo'>;

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

      return data as SeoData[];
    },
    // Cache the data for 1 hour
    staleTime: 1000 * 60 * 60,
  });
};
