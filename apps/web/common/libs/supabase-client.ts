import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = process.env.NEXT_PUBLIC_DENTISTLY_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_DENTISTLY_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClientComponentClient({supabaseUrl, supabaseKey});

