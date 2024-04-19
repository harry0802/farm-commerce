import { defineStore } from "pinia";
import { ref, toRefs, computed } from "vue";
import { getClientOrder, upDateOrder } from "@/Plugins/supabaseOrder.js";
import { useDebounceFn } from "@vueuse/core";
import { creatOrderList } from "@/Plugins/day.js";
import dayjs from "dayjs";
import useCartStore from "@/store/modules/cart/cartStore.js";
import { v4 as uuidv4 } from "uuid";
import {
  removeExpiredOrders,
  createOrderManipulate,
  removeProductAndEmptyOrders,
  removeProductAndEmptyOrdersByDate,
  processOrder,
  frequencyFindAndCreate,
  orderDataSorter,
} from "@/store/modules/order/orderContext.js";

// .uuid({ message: "Invalid UUID" })
export const useOrderStore = defineStore(
  "order",
  () => {
    const myfavorite = ref([]);
    const myorder = ref([]);
    const subscription = ref([]);
    const recentlyViewed = ref([]);
    const workDayLists = ref(null);
    const productCart = ref(null);
    // getter

    const calcOrderState = computed(() => myorder.value.length !== 0);

    //  helper FN
    const debonseUpDateOrder = useDebounceFn(() => {
      return upDateOrder({ favorite: myfavorite.value });
    }, 500);
    const checkContent = (item, condition) => item.findIndex(condition);

    //  init
    const initializeOrderStore = async function () {
      const [reponse, { workDayList }] = await Promise.all([
        await getClientOrder(),
        await creatOrderList().filteredDates(),
      ]);
      myfavorite.value = reponse.favorite;
      subscription.value = reponse.subscription;
      recentlyViewed.value = reponse.recently_viewed;
      workDayLists.value = workDayList;
      removeExpiredOrders(workDayList, reponse.order, myorder);
    };

    // userhandle
    const addMyfavorite = async function (item) {
      const index = checkContent(
        myfavorite.value,
        (arr) => arr.product_id === item.product_id
      );

      ~index ? myfavorite.value.splice(index, 1) : myfavorite.value.push(item);
      const reponse = await debonseUpDateOrder();
      myfavorite.value = reponse;
    };

    const addrecentlyVie = async function (item) {
      const index = checkContent(
        recentlyViewed.value,
        (arr) => arr.product_id === item.product_id
      );

      if (~index) recentlyViewed.value.splice(index, 1);
      recentlyViewed.value.unshift(item);

      const response = await upDateOrder({
        recently_viewed: recentlyViewed.value,
      });
      recentlyViewed.value = response;
    };

    const addSubscribe = async function (item) {
      const { getToday } = await creatOrderList().filteredDates();

      const sendData = {
        product_id: item.product_id,
        Quantity: item.quantity,
        Frequency: item.frequency,
        DeliveryDay: getToday.dayOfWeek,
        NextDelivery_Date: getToday.date,
      };

      const index = checkContent(
        subscription.value,
        (arr) => arr.product_id === sendData.product_id
      );

      ~index
        ? (subscription.value[index] = sendData)
        : subscription.value.push(sendData);

      const [subscriptionSp] = await Promise.all([
        upDateOrder({
          subscription: subscription.value,
        }),
        handleOrderAdd(item),
      ]);

      subscription.value = subscriptionSp;
    };

    const handleOrderAdd = async function (item) {
      const { calcUserSelectDay, workDayList } = await createOrderManipulate(
        myorder
      );

      // 添加訂單
      const product = {
        product_id: item.product_id,
        product_name: item.product_name,
        price: item.price,
        image_url: item.image_url,
        quantity: item.quantity || "1",
        weight: item.weight,
        supplier_name: item.supplier_name,
        Subscribe: item.supplier_name,
      };

      // 確認選擇日期與配送週期是否有衝突
      const isSameOrBeforeDate = (target) => {
        const date1 = dayjs(calcUserSelectDay.date);
        const date2 = dayjs(target);
        return date1.isSameOrBefore(date2);
      };

      // 訂閱商品
      if (item && item.frequency) {
        const loopFq = frequencyFindAndCreate(item.frequency);
        for (let i = 0; i < loopFq; i++) {
          const filterDay = workDayList[5 * i];
          isSameOrBeforeDate(filterDay.date)
            ? processOrder(myorder.value, filterDay, product)
            : "";
        }
      } else {
        // 使用的是普通商品
        processOrder(myorder.value, calcUserSelectDay, product);
      }
      // 最後把日期重新整理
      myorder.value.sort(orderDataSorter);

      myorder.value = await upDateOrder({
        order: myorder.value,
      });
    };

    //
    const setProductCart = function (item) {
      productCart.value = item;
    };

    const handleSelectionDay = (day) => {
      const indx = workDayLists.value.findIndex(
        (d) => d.date === day.order_date.date
      );
      const { selectionDay, showProductItem } = toRefs(useCartStore());
      const { date, dayOfWeek } = day.order_date;
      selectionDay.value.currentWorkDay = `${date.slice(5)}/${dayOfWeek}`;
      selectionDay.value.selectionIndex = indx;
      showProductItem.value = !showProductItem.value;
      setProductCart(day.products);
    };

    // 移除商品
    const handleOrderRemoveSubScribe = async function (item) {
      const orders = myorder.value;
      removeProductAndEmptyOrders(myorder.value, item.id);
      console.log(orders);
    };

    const handleOrderRemoveItem = async function (item) {
      const orders = myorder.value;
      // orders, date, productId
      removeProductAndEmptyOrdersByDate(
        myorder.value,
        "1991113",
        item.productId
      );

      console.log(test);
    };

    const resetOrder = function () {
      myfavorite.value = [];
      myorder.value = [];
      subscription.value = [];
      recentlyViewed.value = [];
      workDayLists.value = null;
      productCart.value = null;
    };

    return {
      //state
      myfavorite,
      myorder,
      subscription,
      recentlyViewed,
      workDayLists,
      productCart,
      // getter
      calcOrderState,
      // fn
      initializeOrderStore,
      createOrderManipulate,
      addMyfavorite,
      addrecentlyVie,
      addSubscribe,
      handleOrderAdd,
      handleOrderRemoveItem,
      handleOrderRemoveSubScribe,
      setProductCart,
      handleSelectionDay,
      resetOrder,
      //
    };
  },
  {
    persist: {
      storage: sessionStorage,
    },
  }
);
