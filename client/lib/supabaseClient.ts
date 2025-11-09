import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xpjmrqjqoijgpcjtqdfq.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhwam1ycWpxb2lqZ3BjanRxZGZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3MDE1ODEsImV4cCI6MjA3ODI3NzU4MX0.eymoNhUuBXSK7OUkyrU9uHMwTm0bkJ5K9eZNtkuaPv0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
