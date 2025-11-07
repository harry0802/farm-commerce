import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_APP_FARM_PRODUCTS_URL;
const supabaseKey = import.meta.env.VITE_APP_FARM_PRODUCTS_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Supabase configuration error:");
  console.error("VITE_APP_FARM_PRODUCTS_URL:", supabaseUrl ? "✓ Set" : "✗ Missing");
  console.error("VITE_APP_FARM_PRODUCTS_KEY:", supabaseKey ? "✓ Set" : "✗ Missing");
  throw new Error(
    "Missing Supabase environment variables. Please check your .env file."
  );
}

const supabase = createClient(supabaseUrl, supabaseKey);
const getSupabaseData = async function (tableName) {
  try {
    const { error, data } = await supabase.from(tableName).select();

    if (error) {
      throw new Error(`💣 ${error.message}`);
    }
    if (data) {
      return data;
    }
  } catch (e) {
    console.error(e);
  }
};

export { supabase, getSupabaseData };
