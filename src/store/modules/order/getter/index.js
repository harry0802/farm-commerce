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

const calcSubtotalFn = (pd) => () => calcSubtotal(pd.value);
const calcTotalFn = (amount) =>
  calcOverDiliverFree(amount) ? amount : amount + diliverCharge.value;

const calcOverDiliverFree = (tarGet) => tarGet > diliverFree.value;

// 計算購物車的金額
const orderGetter = function () {
  const { productCart } = toRefs(getOrderState());

  const getSubtotal = computed(calcSubtotalFn(productCart));
  const getFree = computed(() =>
    calcOverDiliverFree(getSubtotal.value) ? 0 : diliverCharge.value
  );
  const getTotal = computed(() => calcTotalFn(getSubtotal.value));
  return { getSubtotal, getTotal, getFree };
};

const orderAmount = function (pd, discount) {
  const subtotal = calcSubtotal(pd);
  const deliveryFee = calcOverDiliverFree(subtotal) ? 0 : diliverCharge.value;
  const total = discount
    ? calcTotalFn(subtotal) - discount
    : calcTotalFn(subtotal);
  return { subtotal, deliveryFee, total };
};

export { orderGetter, diliverCharge, diliverFree, orderAmount };
