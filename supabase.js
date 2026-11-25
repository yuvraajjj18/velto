const SUPABASE_URL = "PASTE_YOUR_PROJECT_URL";
const SUPABASE_KEY = "PASTE_YOUR_PUBLISHABLE_KEY";

window.veltoSupabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
