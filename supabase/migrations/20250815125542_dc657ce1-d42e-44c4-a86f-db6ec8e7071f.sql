-- Create logos table
CREATE TABLE public.logos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  file_path TEXT NOT NULL,
  logo_type TEXT NOT NULL, -- 'icon', 'horizontal', 'vertical', 'full'
  background_type TEXT NOT NULL DEFAULT 'transparent', -- 'transparent', 'light', 'dark'
  is_primary BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.logos ENABLE ROW LEVEL SECURITY;

-- Create policy for public viewing
CREATE POLICY "Logos are publicly viewable" 
ON public.logos 
FOR SELECT 
USING (true);

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_logos_updated_at
    BEFORE UPDATE ON public.logos
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Insert the uploaded logos
INSERT INTO public.logos (name, description, file_path, logo_type, background_type, is_primary) VALUES
('WePlay Icon Black', 'Gaming controller icon in black', '/lovable-uploads/f422c17d-bc1c-4e0f-bd5e-438cb20c6f22.png', 'icon', 'transparent', false),
('WePlay Full Logo Black', 'Full WePlay United logo with icon and text on black background', '/lovable-uploads/d8d44755-7cdf-4882-918b-77b175e0f845.png', 'full', 'dark', false),
('WePlay Text Logo', 'WePlay United text only logo', '/lovable-uploads/bc8bea99-b6b1-429a-9ecc-e2856f89bb9a.png', 'horizontal', 'light', false),
('WePlay Full Logo Black Alt', 'Alternative full WePlay United logo on black background', '/lovable-uploads/459b739a-dc82-45bc-b846-1c9afd3c4965.png', 'full', 'dark', true);

-- Create storage bucket for logos if it doesn't exist
INSERT INTO storage.buckets (id, name, public) 
VALUES ('logos', 'logos', true)
ON CONFLICT (id) DO NOTHING;