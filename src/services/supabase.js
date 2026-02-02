import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ajfnocwjilxicqbibgrz.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqZm5vY3dqaWx4aWNxYmliZ3J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxODc2NjEsImV4cCI6MjA4MDc2MzY2MX0.-rrgp48c24KwP5ROKPRaf_21xOu1GVey21BEkoeDf-8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
