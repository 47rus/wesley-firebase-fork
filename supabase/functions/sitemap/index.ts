
// Supabase Edge Function: Sitemap generator with CORS
// Returns dynamic XML sitemap based on rows in public.seo

import { createClient } from '@supabase/supabase-js';

// CORS headers
const corsHeaders: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Create client (env vars are provided by Supabase functions runtime)
const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY');
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_ANON_KEY in environment variables');
}
const supabase = createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!);

// Adjust to your live site domain
const BASE_URL = 'https://weplayunited.com';

Deno.serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { data, error } = await supabase.from('seo').select('url_slug');
    if (error) {
      console.error('Error fetching SEO slugs:', error.message);
      return new Response('Internal error', { status: 500, headers: corsHeaders });
    }

    const slugs: string[] = (data || [])
      .map((row: any) => row.url_slug)
      .filter((s: string) => typeof s === 'string' && s.trim().length > 0);

    const urls = slugs.map((slug) => `${BASE_URL}/events/${slug}`);
    const now = new Date().toISOString();

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      `  <url>\n` +
      `    <loc>${BASE_URL}/</loc>\n` +
      `    <changefreq>weekly</changefreq>\n` +
      `    <priority>0.8</priority>\n` +
      `    <lastmod>${now}</lastmod>\n` +
      `  </url>\n` +
      urls.map((u) => (
        `  <url>\n` +
        `    <loc>${u}</loc>\n` +
        `    <changefreq>weekly</changefreq>\n` +
        `    <priority>0.7</priority>\n` +
        `    <lastmod>${now}</lastmod>\n` +
        `  </url>`
      )).join('\n') +
      `\n</urlset>`;

    return new Response(xml, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (e) {
    console.error('Unhandled sitemap error:', e);
    return new Response('Internal error', { status: 500, headers: corsHeaders });
  }
});
