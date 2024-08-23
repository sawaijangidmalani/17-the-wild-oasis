import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xwcjxowiabhkokejlfgb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3Y2p4b3dpYWJoa29rZWpsZmdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5NTkxNjgsImV4cCI6MjAzMjUzNTE2OH0.uBdWTewkR8vryCXEOvBx9U7CbYejuNXkbqgB4pawRcw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
