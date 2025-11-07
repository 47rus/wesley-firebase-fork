
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

// Define the shape of the logo data
export interface AppLogo {
  id: string;
  name: string;
  description: string;
  file_path: string;
  logo_type: 'icon' | 'horizontal' | 'vertical' | 'full';
  background_type: 'transparent' | 'light' | 'dark';
  is_primary: boolean;
  created_at: string;
  updated_at: string;
  url: string;
}

// Custom hook to fetch logos
export const useLogos = () => {
  return useQuery<AppLogo[], Error>({
    queryKey: ['logos'],
    queryFn: async (): Promise<AppLogo[]> => {
      const { data, error } = await supabase
        .from('logos')
        .select('*');

      if (error) {
        throw new Error(error.message);
      }

      if (!data) {
          return [];
      }

      // Transform file paths into full URLs
      const transformedData: AppLogo[] = data.map((logo: any) => ({
        ...logo,
        url: '/placeholder.svg',
      }));

      return transformedData;
    },
    // Cache the data for 1 hour to avoid flickering
    staleTime: 1000 * 60 * 60,
  });
};
