import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/integrations/firebase/client";

export interface Client {
  id: string;
  fileName: string;
  altText: string;
  order: number;
  url: string; // Added the url field
}

export function useClients() {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    async function getClients() {
      const clientsCollection = collection(db, "clients");
      const q = query(clientsCollection, orderBy("order"));
      const querySnapshot = await getDocs(q);
      const clients = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Client, "id">),
      }));
      setClients(clients);
    }

    getClients();
  }, []);

  return clients;
}
