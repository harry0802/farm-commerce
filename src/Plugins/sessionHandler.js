import { supabase } from "@/config/FarmPruductsItemManage.js";
import { useThrottleFn } from "@vueuse/core";
import { getAccountInfo } from "@/common/composables/profileData.js";

const throttledLoginHandler = useThrottleFn((event, session) => {
  // 处理登录状态的变化
  if (event === "INITIAL_SESSION") {
    console.log("User logged in:", session.user);
    getAccountInfo();
    // 处理用户登录状态变化，例如更新全局状态或执行其他操作
  } else if (event === "SIGNED_OUT") {
    console.log("User signed out");
    // 处理用户登出状态，例如重置全局状态或执行其他操作
  }
}, 1000);

function startAuthStateListener() {
  supabase.auth.onAuthStateChange((event, session) => {
    throttledLoginHandler(event, session);
  });
}

export { startAuthStateListener };
