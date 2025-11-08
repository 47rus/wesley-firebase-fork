
import { useQuery } from '@tanstack/react-query';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/integrations/firebase/client';

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
      const querySnapshot = await getDocs(collection(db, 'logos'));
      const logosData = querySnapshot.docs.map(doc => doc.data() as AppLogo);
      return logosData;
    },
    // Cache the data for 1 hour to avoid flickering
    staleTime: 1000 * 60 * 60,
  });
};
