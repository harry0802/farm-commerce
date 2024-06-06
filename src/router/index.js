import { pinia } from "@/store/pinia.js";
import useAccountStore from "@/store/modules/account/accountStore.js";
import { createRouter, createWebHashHistory } from "vue-router";
import FarmHome from "@/views/FarmHome.vue";
import FarmShop from "@/views/FarmShop.vue";
import FarmProduct from "@/views/FarmProduct.vue";
import FarmProducers from "@/views/FarmProducers.vue";
import FarmJoin from "@/views/FarmJoin.vue";
import FarmAccount from "@/views/FarmAccount.vue";
import FarmLogin from "@/views/FarmLogin.vue";
import FarmSearch from "@/views/FarmSearch.vue";
import catchAll from "@/views/CatchAll.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: FarmHome,
      meta: { title: "農場美食販賣部" },
    },

    {
      path: "/home",
      name: "home",
      component: FarmHome,
      meta: { title: "農場美食販賣部" },
    },

    {
      path: "/shop",
      name: "shop",
      meta: { title: "農產品商店" },
      children: [
        {
          path: "/shop/home",
          props: true,
          component: () => import("@/views/FarmShopHome.vue"),
          meta: { title: "商店首頁" },
          children: [
            {
              path: ":id",
              component: () =>
                import(
                  "@/common/components/shop/home/page/ShopHomeMainPage.vue"
                ),
              meta: { title: "商店主頁" },
            },
          ],
        },
        {
          path: ":id",
          props: true,
          component: FarmShop,
          meta: { title: "農產品商店" },
        },
      ],
    },

    {
      path: "/product/:id",
      props: true,
      component: FarmProduct,
      meta: { title: "農產品詳情" },
    },

    {
      path: "/producers",
      props: true,
      component: FarmProducers,
      meta: { title: "生產者" },
      children: [
        {
          path: ":id",
          props: true,
          component: FarmProducers,
          meta: { title: "生產者詳情" },
        },
      ],
    },

    {
      path: "/login",
      name: "login",
      meta: { isjoin: true, title: "登入" },
      props: true,
      component: FarmLogin,
    },
    {
      path: "/join",
      name: "join",
      meta: { isjoin: true, title: "加入我們" },
      component: FarmJoin,
      children: [
        {
          path: "zip-check",
          name: "zip-check",
          component: () => import("@/common/components/join/JoinZipCode.vue"),
          meta: { title: "郵遞區號檢查" },
        },
        {
          path: "in-area",
          name: "in-area",
          component: () => import("@/common/components/join/JoinInArea.vue"),
          meta: { title: "區域內" },
        },
        {
          path: "out-area",
          name: "out-area",
          component: () => import("@/common/components/join/JoinOutArea.vue"),
          meta: { title: "區域外" },
        },
        {
          path: "personal-info",
          name: "personal-info",
          meta: {
            entryControl: true,
            title: "個人資訊",
          },
          component: () =>
            import("@/common/components/join/JoinPersonalInfo.vue"),
        },
        {
          path: "verify-email-otp",
          name: "verify-email-otp",
          component: () =>
            import("@/common/components/join/JoinVerifyEmailOtp.vue"),
          meta: { title: "驗證郵箱" },
          beforeEnter: () => {
            const store = useAccountStore(pinia);
            if (!store.hasUserEmail) return { name: "home" };
          },
        },

        {
          path: "delivery-address",
          name: "delivery-address",
          meta: {
            entryControl: true,
            title: "送貨地址",
          },
          component: () =>
            import("@/common/components/join/JoinDeliveryAddress.vue"),
        },
        {
          path: "payment-info",
          name: "payment-info",
          meta: {
            entryControl: true,
            title: "支付資訊",
          },
          component: () =>
            import("@/common/components/join/JoinPaymentInfo.vue"),
        },
        {
          path: "welcome",
          name: "welcome",
          component: () => import("@/common/components/join/JoinWelcome.vue"),
          meta: { title: "歡迎" },
        },
      ],
    },
    {
      path: "/account",
      component: FarmAccount,
      meta: { requiresAuth: true, title: "帳戶" },
      children: [
        {
          path: "subscriptions",
          name: "subscriptions",
          component: () =>
            import("@/common/components/account/AccountSubscriptions.vue"),
          meta: { title: "訂閱" },
        },
        {
          path: "delivery-schedule",
          name: "delivery-schedule",
          component: () =>
            import("@/common/components/account/AccountDeliveryschedule.vue"),
          meta: { title: "配送時間" },
        },
        {
          path: "profile",
          name: "profile",
          component: () =>
            import("@/common/components/account/AccountProfile.vue"),
          meta: { title: "個人資料" },
        },
        {
          path: "order-history",
          name: "order-history",
          component: () =>
            import("@/common/components/account/AccountOrderHistory.vue"),
          meta: { title: "訂單歷史" },
        },
        {
          path: "referrals",
          name: "referrals",
          component: () =>
            import("@/common/components/account/AccountReferrals.vue"),
          meta: { title: "推薦" },
        },
      ],
    },

    {
      path: "/search",
      name: "search",
      component: FarmSearch,
      meta: { title: "搜尋" },
    },

    {
      path: "/:catchAll(.*)",
      component: catchAll,
      meta: { title: "找不到頁面" },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0, behavior: "smooth" };
    }
  },
});

router.beforeEach((to, from) => {
  const store = useAccountStore();
  // 未登入不可訪問頁面

  if (to.meta.requiresAuth && !store.isaAuthenticated) {
    return { name: "login" };
  }
  // 不可隨意訪問頁面
  if (to.meta.entryControl && !store.allow) {
    return { name: "home" };
  }
  // 已註冊不可訪問
  if (to.meta.isjoin && store.getRegistration) {
    return { name: "home" };
  }
  // 註冊到一半 引導完成註冊
  if (to.meta.requiresAuth && !store.regDeliveryaddress) {
    store.checkAllow();
    return { name: "delivery-address" };
  }

  // 設定頁面 title
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
