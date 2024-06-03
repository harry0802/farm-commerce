import { useOrderStore } from "@/store/modules/order/index.js";
import { calcSubtotal } from "@/store/modules/order/model/orderModel.js";
import { computed, toRefs, ref } from "vue";

const diliverFree = ref(1200);
const diliverCharge = ref(120);
// 取得 order pinia State
const getOrderState = () => {
  const {
    myfavorite,
    myorder,
    subscription,
    recentlyViewed,
    reorder,
    recommendedSubscriptions,
    workDayLists,
    productCart,
  } = toRefs(useOrderStore());
  return {
    myfavorite,
    myorder,
    subscription,
    recentlyViewed,
    reorder,
    recommendedSubscriptions,
    workDayLists,
    productCart,
  };
};

const calcTotalFn = (amount) =>
  calcOverDiliverFree(amount) ? amount : amount + diliverCharge.value;
const calcOverDiliverFree = (tarGet) => tarGet >= diliverFree.value;

// 計算購物車的金額

const orderAmount = function (pd, discount) {
  let subtotal = calcSubtotal(pd);
  let deliveryFee = calcOverDiliverFree(subtotal) ? 0 : diliverCharge.value;
  let total = calcTotalFn(subtotal);
  if (discount) {
    deliveryFee = calcOverDiliverFree(subtotal) ? 0 : diliverCharge.value;
    total = calcTotalFn(subtotal) - discount;
  }

  return { subtotal, deliveryFee, total };
};

export { getOrderState, diliverCharge, diliverFree, orderAmount };
