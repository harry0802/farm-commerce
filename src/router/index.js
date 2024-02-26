import { createRouter, createWebHashHistory } from "vue-router";

import FarmHome from "@/views/FarmHome.vue";
import FarmShop from "@/views/FarmShop.vue";
import FarmProduct from "@/views/FarmProduct.vue";
import FarmProducers from "@/views/FarmProducers.vue";
import FarmJoin from "@/views/FarmJoin.vue";
import FarmAccount from "@/views/FarmAccount.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "home" },

    {
      path: "/home",
      name: "home",
      component: FarmHome,
    },

    {
      path: "/shop",
      name: "shop",
    },
    {
      path: "/shop/:id",
      props: true,
      component: FarmShop,
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
    },
    {
      path: "/producers/:id",
      props: true,
      component: FarmProducers,
    },
    {
      path: "/login",
      props: true,
      // component: FarmProducers,
    },
    {
      path: "/join",
      name: "join",
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
          component: () =>
            import("@/common/components/join/JoinPersonalInfo.vue"),
        },
        {
          path: "verify-email-otp",
          name: "verify-email-otp",
          component: () =>
            import("@/common/components/join/JoinVerifyEmailOtp.vue"),
        },

        {
          path: "delivery-address",
          name: "delivery-address",
          component: () =>
            import("@/common/components/join/JoinDeliveryAddress.vue"),
        },
        {
          path: "payment-info",
          name: "payment-info",
        },
      ],
    },

    {
      path: "/account",
      component: FarmAccount,
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

export default router;
