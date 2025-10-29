-- Update auth configuration for OTP expiry
-- Note: This sets a more secure OTP expiry time
-- Default OTP expiry should be reduced from potentially long periods to a safer duration

-- This is handled via Supabase dashboard auth settings, but we can set some constraints
-- The warning suggests the OTP expiry exceeds recommended thresholds
-- Recommended to set OTP expiry to maximum 1 hour (3600 seconds) in dashboard

-- For now, we'll document this as a manual fix needed:
COMMENT ON SCHEMA public IS 'Security Note: Please configure OTP expiry in Supabase Dashboard Auth settings to 1 hour maximum for security compliance';