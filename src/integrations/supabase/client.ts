import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kusdonigieemrsboshaj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1c2RvbmlnaWVlbXJzYm9zaGFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyNjA0MjYsImV4cCI6MjA2ODgzNjQyNn0.4oKr3t_mPpgbPPde_MqSX865iXotoUZeUMZa-WpVht4";

const customStorageAdapter = {
  getItem: (key) => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null;
  },
  setItem: (key, value) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  },
  removeItem: (key) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  },
};

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: customStorageAdapter,
    persistSession: true,
    autoRefreshToken: true,
  }
});