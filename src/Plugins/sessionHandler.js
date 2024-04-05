import { supabase } from "@/config/FarmPruductsItemManage.js";
import { pinia } from "@/store/pinia.js";
import { useThrottleFn } from "@vueuse/core";
import useAccountStore from "@/store/modules/account/accountStore.js";
import { useOrderStore } from "@/store/modules/order/index.js";
import { getAccountInfo } from "@/common/composables/profileData.js";

const throttledLoginHandler = useThrottleFn((event, session) => {
  const store = useAccountStore(pinia);
  const { initializeOrderStore } = useOrderStore();

  if (event === "SIGNED_IN" || (event === "INITIAL_SESSION" && session)) {
    store.setAuthenticated(session.user);
    initializeOrderStore();
    getAccountInfo();
  }

  if (event === "SIGNED_IN") {
    store.setAuthenticated(session.user);
    getAccountInfo();
    initializeOrderStore();
  }
  // 处理登录状态的变化
  if (event === "SIGNED_OUT") {
    console.log("User signed out");
    store.$reset();
  }
}, 1000);

function startAuthStateListener() {
  supabase.auth.onAuthStateChange((event, session) => {
    throttledLoginHandler(event, session);
  });
}

export { startAuthStateListener };
