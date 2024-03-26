import { supabase } from "@/config/FarmPruductsItemManage.js";
import { useThrottleFn } from "@vueuse/core";
import { getAccountInfo } from "@/common/composables/profileData.js";

const throttledLoginHandler = useThrottleFn((event, session) => {
  if (event === "SIGNED_IN" || (event === "INITIAL_SESSION" && session.user)) {
    getAccountInfo();
  }

  if (event === "SIGNED_IN") {
  }
  // 处理登录状态的变化
  if (event === "SIGNED_OUT") {
    console.log("User signed out");
  }
}, 1000);

function startAuthStateListener() {
  supabase.auth.onAuthStateChange((event, session) => {
    throttledLoginHandler(event, session);
  });
}

document.addEventListener("login", async () => {
  // 在用戶登錄時觸發 'getAccountInfo' 函數來獲取用戶資訊並更新 store
  console.log(123);
});

export { startAuthStateListener };
