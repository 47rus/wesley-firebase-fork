-- Enable Row Level Security on events table
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- Enable Row Level Security on seo table  
ALTER TABLE public.seo ENABLE ROW LEVEL SECURITY;

-- Create public read policy for events table (marketing content)
CREATE POLICY "Public can view events" 
ON public.events 
FOR SELECT 
USING (true);

-- Create public read policy for seo table (marketing content)
CREATE POLICY "Public can view seo content" 
ON public.seo 
FOR SELECT 
USING (true);

-- Note: These policies allow public read access since this appears to be marketing content.
-- If you need to restrict access to sensitive fields like pricing/margins in the future,
-- consider moving that data to separate admin-only tables.