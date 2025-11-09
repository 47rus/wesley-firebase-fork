import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/integrations/firebase/client";

export interface AppLogo {
  id: string;
  fileName: string;
  altText: string;
  order: number;
  background_type: string;
  url: string;
}

export function useLogos() {
  const [logos, setLogos] = useState<AppLogo[]>([]);

  useEffect(() => {
    async function getLogos() {
      const logosCollection = collection(db, "logos");
      const q = query(logosCollection); // Removed the incorrect orderBy("order")
      try {
        const querySnapshot = await getDocs(q);
        const logos = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<AppLogo, "id">),
        }));
        setLogos(logos);
      } catch (error) {
        console.error("Error fetching logos:", error);
      }
    }

    getLogos();
  }, []);

  return logos;
}
