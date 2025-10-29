-- Remove old column and add new one with consistent naming
ALTER TABLE public.events DROP COLUMN IF EXISTS pakket_feature_1_gamesets;
ALTER TABLE public.events ADD COLUMN IF NOT EXISTS package_feature_1_gamesets text;