
import { useQuery } from '@tanstack/react-query';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/integrations/firebase/client';

// Define the type for the SEO data
interface SeoData {
  id: string;
  [key: string]: any;
}

// Custom hook to fetch SEO data from Firestore
export const useSeo = () => {
  return useQuery<SeoData[], Error>({
    queryKey: ['seo'],
    queryFn: async () => {
      const querySnapshot = await getDocs(collection(db, 'seo'));
      const seoData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      return seoData;
    },
    // Cache the data for 1 hour
    staleTime: 1000 * 60 * 60,
  });
};
