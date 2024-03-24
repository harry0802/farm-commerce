import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_APP_FARM_PRODUCTS_URL;
const supabaseKey = import.meta.env.VITE_APP_FARM_PRODUCTS_KEY;
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
