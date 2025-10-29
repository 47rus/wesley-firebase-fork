-- Add sample package data for Flight Simulator event
INSERT INTO public.events (
  event_category, 
  landing_page, 
  pakket_naam, 
  group_size_display_min, 
  group_size_display_max, 
  duration_display, 
  package_price, 
  pakket_price_tax, 
  opbouw_uren, 
  afbouw_uren, 
  km_price,
  package_feature_1_gamesets,
  package_feature_2_support,
  package_feature_3_standings,
  package_feature_4_awards,
  package_feature_5_promotion,
  package_feature_6_sign_ups,
  package_feature_7_extra,
  eventmanager,
  junior_eventmanager,
  eventmanager_plus,
  package_badge
) VALUES 
-- Basic Package
('Gaming', 'Flight Simulator', 'Basis Pakket', 8, 15, '2 uur', 299, 361.79, 0.5, 0.5, 0.5,
 '2 Flight simulatoren beschikbaar', 'Junior eventmanager aanwezig', 'Realtime vliegstatistieken bijgehouden', 'Certificates voor alle deelnemers', 'Foto''s en video''s van de sessie', 'Eenvoudige online inschrijving', 'Gratis reiskosten binnen 25km',
 false, true, false, null),

-- Standard Package  
('Gaming', 'Flight Simulator', 'Standaard Pakket', 10, 20, '3 uur', 449, 543.29, 0.5, 0.5, 0.5,
 '4 Flight simulatoren beschikbaar', 'Ervaren eventmanager aanwezig', 'Live scoreboard en vliegstatistieken', 'Trofeeën voor top 3 piloten', 'Professionele foto- en videoreportage', 'Gepersonaliseerde online inschrijfpagina', 'Welkomstdrankje en snacks',
 true, false, false, 'POPULAIR'),

-- Premium Package
('Gaming', 'Flight Simulator', 'Premium Pakket', 15, 30, '4 uur', 649, 785.29, 1, 1, 0.5,
 '6 Flight simulatoren beschikbaar', 'Senior eventmanager met co-piloot ervaring', 'Professioneel commentaar tijdens vluchten', 'Exclusieve pilotencertificaten en medailles', 'Live streaming mogelijkheid voor toeschouwers', 'VIP online inschrijving met extra opties', 'Catering pakket en goodie bags',
 false, false, true, 'MEEST POPULAIR'),

-- Ultimate Package
('Gaming', 'Flight Simulator', 'Ultimate Pakket', 20, 40, '5 uur', 899, 1087.79, 1, 1, 0.5,
 '8 Flight simulatoren + VR headsets', 'Team van eventmanagers en technische ondersteuning', 'AI-powered vluchtanalyse en coaching tips', 'Gepersonaliseerde trofeeën en pilotencertificaten', 'Professionele livestream met commentaar', 'Volledige event website met foto galerij', 'Premium catering en gepersonaliseerde goodie bags',
 false, false, true, 'ULTIEM');