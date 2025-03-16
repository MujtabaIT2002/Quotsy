import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// ✅ Check if environment variables are available
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("❌ Supabase URL or Anon Key is missing. Check your .env file!");
}

// ✅ Create the Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
