import { ref } from "vue";

// 所有的 State
export function generatedOrderState() {
  const myfavorite = ref([]);
  const myorder = ref([]);
  const subscription = ref([]);
  const recentlyViewed = ref([]);
  const reorder = ref([]);
  const recommendedSubscriptions = ref([]);
  const workDayLists = ref(null);
  const productCart = ref(null);

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
}

export {
  createOrderConstruction,
  removeExpiredOrders,
  processOrder,
  orderDataSorter,
  removeOrder,
  createSubscribeConstruction,
  clearEmptyAndSortOrder,
  createGeneralOrderConstruction,
  setDefaultFirstOrder,
  getOrderConstruction,
  calcSubtotal,
  promoCodeConstruction,
  createGeneralSubScribeConstruction,
} from "./orderModel.js";
