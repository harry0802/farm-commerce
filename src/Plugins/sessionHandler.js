import { supabase } from "@/config/FarmPruductsItemManage.js";
import { useThrottleFn } from "@vueuse/core";
import {
  getAccountInfo,
  accountStore,
  store as profileStore,
} from "@/common/composables/profileData.js";
// setAuthenticated

// userState;
const throttledLoginHandler = useThrottleFn((event, session) => {
  if (event === "SIGNED_IN" || (event === "INITIAL_SESSION" && session)) {
    accountStore.setAuthenticated(session.user);
    getAccountInfo();
  }

  if (event === "SIGNED_IN") {
    accountStore.setAuthenticated(session.user);
    getAccountInfo();
  }
  // 处理登录状态的变化
  if (event === "SIGNED_OUT") {
    console.log("User signed out");
    accountStore.$reset();
    profileStore.$reset();
  }
}, 1000);

function startAuthStateListener() {
  supabase.auth.onAuthStateChange((event, session) => {
    throttledLoginHandler(event, session);
  });
}

export { startAuthStateListener };
