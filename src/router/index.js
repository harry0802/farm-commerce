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
import FarmLoggedInHome from "@/views/FarmLoggedInHome.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: FarmHome },

    {
      path: "/home",
      name: "home",
      component: FarmHome,
    },
    {
      path: "/test",
      name: "test",
      component: FarmLoggedInHome,
    },

    {
      path: "/shop",
      name: "shop",
      children: [
        {
          path: "/shop/home",
          props: true,
          component: () => import("@/views/FarmShopHome.vue"),
          children: [
            {
              path: ":id",
              component: () =>
                import(
                  "@/common/components/shop/home/page/ShopHomeMainPage.vue"
                ),
            },
          ],
        },
        {
          path: ":id",
          props: true,
          component: FarmShop,
        },
      ],
    },

    ,
    {
      path: "/product/:id",
      props: true,
      component: FarmProduct,
    },

    {
      path: "/producers",
      props: true,
      component: FarmProducers,
      children: [
        {
          path: ":id",
          props: true,
          component: FarmProducers,
        },
      ],
    },

    {
      path: "/login",
      name: "login",
      meta: { isjoin: true },
      props: true,
      component: FarmLogin,
    },
    {
      path: "/join",
      name: "join",
      meta: { isjoin: true },
      component: FarmJoin,
      children: [
        {
          path: "zip-check",
          name: "zip-check",
          component: () => import("@/common/components/join/JoinZipCode.vue"),
        },
        {
          path: "in-area",
          name: "in-area",
          component: () => import("@/common/components/join/JoinInArea.vue"),
        },
        {
          path: "out-area",
          name: "out-area",
          component: () => import("@/common/components/join/JoinOutArea.vue"),
        },
        {
          path: "personal-info",
          name: "personal-info",
          meta: {
            entryControl: true,
          },
          component: () =>
            import("@/common/components/join/JoinPersonalInfo.vue"),
        },
        {
          path: "verify-email-otp",
          name: "verify-email-otp",
          component: () =>
            import("@/common/components/join/JoinVerifyEmailOtp.vue"),
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
          },
          component: () =>
            import("@/common/components/join/JoinDeliveryAddress.vue"),
        },
        {
          path: "payment-info",
          name: "payment-info",
          meta: {
            entryControl: true,
          },
          component: () =>
            import("@/common/components/join/JoinPaymentInfo.vue"),
        },
        {
          path: "welcome",
          name: "welcome",
          component: () => import("@/common/components/join/JoinWelcome.vue"),
        },
      ],
    },
    {
      path: "/account",
      component: FarmAccount,
      meta: { requiresAuth: true },
      children: [
        {
          path: "subscriptions",
          name: "subscriptions",
          component: () =>
            import("@/common/components/account/AccountSubscriptions.vue"),
        },
        {
          path: "delivery-schedule",
          name: "delivery-schedule",
          component: () =>
            import("@/common/components/account/AccountDeliveryschedule.vue"),
        },
        {
          path: "profile",
          name: "profile",
          component: () =>
            import("@/common/components/account/AccountProfile.vue"),
        },
        {
          path: "order-history",
          name: "order-history",
          component: () =>
            import("@/common/components/account/AccountOrderHistory.vue"),
        },
        {
          path: "referrals",
          name: "referrals",
          component: () =>
            import("@/common/components/account/AccountReferrals.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from) => {
  const store = useAccountStore(pinia);
  // 未登入不可訪問頁面

  if (to.meta.requiresAuth && !store.isaAuthenticated) {
    return { name: "login" };
  }
  // // 不可隨意訪問頁面
  if (to.meta.entryControl && !store.allow) {
    return { name: "home" };
  }
  // //已註冊不可訪問
  if (to.meta.isjoin && store.getRegistration) {
    return { name: "home" };
  }
});

export default router;
