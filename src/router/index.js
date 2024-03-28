import { accountStore } from "@/common/composables/profileData.js";
import { createRouter, createWebHashHistory } from "vue-router";

import useAccountStore from "@/store/modules/account/accountStore.js";

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
          path: ":id",
          props: true,
          component: FarmShop,
        },
      ],
    },

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
          beforeEnter: (to, from) => {
            console.log(accountStore.allow);

            console.log(to);
            console.log(from);
          },
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
            if (!accountStore.hasUserEmail) return { name: "home" };
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
  const store = useAccountStore();

  // 未登入不可訪問
  if (to.meta.requiresAuth && !accountStore.isaAuthenticated) {
    return { name: "login" };
  }

  if (to.meta.entryControl && !store.allow) {
    return { name: "home" };
  }

  // // 以完成註冊不可訪問頁面
  // if (to.meta.isjoin && accountStore.getRegistration) {
  //   return { name: "home" };
  // }

  console.log(store.isaAuthenticated);

  // 需要完成上一步驟才能進入
});

// router.afterEach((to, from) => {
//   console.log(accountStore.allow);
// });
const aa = function () {
  if (to.meta.entryControl && !to.meta.allow) {
    return { name: "home" };
  }
};

export default router;
