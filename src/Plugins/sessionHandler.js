import { supabase } from "@/config/FarmPruductsItemManage.js";
import { pinia } from "@/store/pinia.js";
import { useThrottleFn } from "@vueuse/core";
import useAccountStore from "@/store/modules/account/accountStore.js";
import { useOrderStore } from "@/store/modules/order/index.js";
import { getAccountInfo } from "@/common/composables/profileData.js";
import { creatOrderList } from "@/Plugins/day.js";
import cartStore from "@/store/modules/cart/cartStore.js";

const getPiniaState = () => {
  const accountStore = useAccountStore(pinia);
  const { initializeOrderStore } = useOrderStore();
  const { resetOrder } = useOrderStore();

  return {
    accountStore,
    initializeOrderStore,
    resetOrder,
  };
};

const throttledLoginHandler = useThrottleFn(async (event, session) => {
  const { accountStore, initializeOrderStore, resetOrder } = getPiniaState();

  if (event === "SIGNED_IN" && accountStore.userState.aud !== "authenticated") {
    accountStore.setAuthenticated(session.user);
    getAccountInfo();
    initializeOrderStore();
  }
  // 处理登录状态的变化
  if (event === "SIGNED_OUT") {
    const { resetOrder } = useOrderStore();
    accountStore.$reset();
    resetOrder();
  }
}, 1000);

function startAuthStateListener() {
  supabase.auth.onAuthStateChange((event, session) => {
    throttledLoginHandler(event, session);
  });

  window.addEventListener("load", async () => {
    const { accountStore, initializeOrderStore } = getPiniaState();
    const cart = cartStore(pinia);
    cart.workDay = await creatOrderList().filteredDates();
    if (accountStore.userState.aud === "authenticated") {
      getAccountInfo();
      initializeOrderStore();
    }
  });
}

export { startAuthStateListener };
