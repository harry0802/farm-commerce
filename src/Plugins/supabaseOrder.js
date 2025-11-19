import { supabase } from "@/config/FarmPruductsItemManage.js";
import useAccountStore from "@/store/modules/account/accountStore.js";
import { toRefs } from "vue";
const getUserID = () => {
  const { userState } = toRefs(useAccountStore());
  return userState.value.id;
};

const getClientOrder = async function () {
  try {
    let {
      data: [order],
      error,
    } = await supabase.from("order").select("*").eq("clients_id", getUserID());
    if (error) throw error;
    if (order) return order;
  } catch (error) {
    console.error(`Handle_SupabaseAPI_GETDATA_ERROR 💣:${error.message}`);
  }
};

const upDateOrder = async function (column) {
  try {
    const [select] = Object.keys(column);
    const {
      data: [order],
      error,
    } = await supabase
      .from("order")
      .update(column)
      .eq("clients_id", getUserID())
      .select(select);
    if (error) throw error;
    if (order) return order[select];
  } catch (error) {
    console.error(`Handle_SupabaseAPI_UPDATE_ERROR 💣:${error.message}`);
  }
};

const requiresPromocode = async function (code) {
  let {
    data: [orderPromoCode],
    error,
  } = await supabase
    .from("orderPromoCode")
    .select(`promo_code,amount`)
    .eq("promo_code", code);
  if (error) throw error;
  if (orderPromoCode) return orderPromoCode;
};

export { getClientOrder, upDateOrder, requiresPromocode };
