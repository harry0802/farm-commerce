import { supabase } from "@/config/FarmPruductsItemManage.js";
// import { toast } from "vue-sonner";
// import { date } from "zod";

const getClientOrder = async function () {
  try {
    let {
      data: [order],
      error,
    } = await supabase
      .from("order")
      .select("*")
      .eq("clients_id", "c32a1e24-58bf-4714-b0a4-5e8e7e3421c9");
    if (error) throw error;
    if (order) return order;
  } catch (error) {
    console.error(`Handle_SupabaseAPI_GETDATA_ERROR 💣:${error.message}`);
  }
};

getClientOrder();

const upDateOrder = async function (column) {
  try {
    const [select] = Object.keys(column);
    const {
      data: [order],
      error,
    } = await supabase
      .from("order")
      .update(column)
      .eq("clients_id", "c32a1e24-58bf-4714-b0a4-5e8e7e3421c9")
      .select(select);
    if (error) throw error;
    if (order) return order[select];
  } catch (error) {
    console.error(`Handle_SupabaseAPI_UPDATE_ERROR 💣:${error.message}`);
  }
};

export { getClientOrder, upDateOrder };
