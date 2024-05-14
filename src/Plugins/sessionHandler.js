import { supabase } from "@/config/FarmPruductsItemManage.js";
import { pinia } from "@/store/pinia.js";
import { useThrottleFn } from "@vueuse/core";
import useAccountStore from "@/store/modules/account/accountStore.js";
import { useOrderStore } from "@/store/modules/order/index.js";
import { getAccountInfo } from "@/common/composables/profileData.js";
import { creatOrderList } from "@/Plugins/day.js";
import cartStore from "@/store/modules/cart/cartStore.js";

const throttledLoginHandler = useThrottleFn(async (event, session) => {
  const accountStore = useAccountStore(pinia);
  const cart = cartStore(pinia);
  const { initializeOrderStore, resetOrder } = useOrderStore();
  cart.workDay = await creatOrderList().filteredDates();

  if (event === "SIGNED_IN") {
    accountStore.setAuthenticated(session.user);
    getAccountInfo();
    initializeOrderStore();
  }
  // 处理登录状态的变化
  if (event === "SIGNED_OUT") {
    console.log("User signed out");
    accountStore.$reset();
    // cart.$reset();
    resetOrder();
  }
}, 1000);

function startAuthStateListener() {
  supabase.auth.onAuthStateChange((event, session) => {
    throttledLoginHandler(event, session);
  });
}

export { startAuthStateListener };
