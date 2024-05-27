import useCartStore from "@/store/modules/cart/cartStore.js";
import { defineStore } from "pinia";
import { toRefs, computed } from "vue";
import { getClientOrder, upDateOrder } from "@/Plugins/supabaseOrder.js";
import { useDebounceFn } from "@vueuse/core";
import { creatOrderList } from "@/Plugins/day.js";
import { findIndexByProductID } from "@/store/modules/order/helpers.js";
import {
  generatedOrderState,
  createSubscribeConstruction,
  clearEmptyAndSortOrder,
  createGeneralOrderConstruction,
  removeOrder,
  removeExpiredOrders,
  setDefaultFirstOrder,
  getOrderConstruction,
  calcSubtotal,
  promoCodeConstruction,
} from "@/store/modules/order/model/index.js";
export const useOrderStore = defineStore(
  "order",
  () => {
    const {
      myfavorite,
      myorder,
      subscription,
      recentlyViewed,
      reorder,
      recommendedSubscriptions,
      workDayLists,
      productCart,
    } = generatedOrderState();

    const personalStyle = {
      project: "For You",
      categories: [
        {
          category: "已訂購的項目",
          path: "reorder",
          renderPage: reorder,
          emptyPage: {
            title: "您之前訂購過的商品列表是空的",
            text: "您可以在這裡找到之前訂購過的商品。",
          },
        },
        {
          category: "最近瀏覽過的項目",
          path: "recently-viewed",
          renderPage: recentlyViewed,
          emptyPage: {
            title: "您的最近觀看的商品列表是空的",
            text: "請點擊您喜歡的產品上來收集你得點閱商品。",
          },
        },
        {
          category: "收藏夾",
          path: "favorites",
          renderPage: myfavorite,
          emptyPage: {
            title: "您的收藏夾是空的",
            text: "請點擊您喜歡的產品上的心形圖標來收集您的喜愛之物。",
            guidePic: [
              "src/assets/imgs/personalStyle/guidePicFv1.png",
              "src/assets/imgs/personalStyle/guidePicFv2.png",
            ],
          },
        },
        {
          category: "推薦訂閱",
          path: "recommended-subscriptions",
          renderPage: recommendedSubscriptions,
          emptyPage: {
            title: " 您的推薦訂閱列表是空的",
            text: "請點擊您喜歡的產品上的心形圖標來收集您的喜愛之物。",
          },
        },
      ],
    };

    // getter
    const calcOrderState = computed(() => myorder.value.length !== 0);

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
      setDefaultFirstOrder(myorder, workDayList);
    };

    // 添加我的最愛
    const addMyfavorite = useDebounceFn(async (item) => {
      const index = findIndexByProductID(myfavorite.value, item.product_id);
      ~index ? myfavorite.value.splice(index, 1) : myfavorite.value.push(item);
      await upDateOrder({ favorite: myfavorite.value });
    }, 500);

    // 添加最近瀏覽
    const addrecentlyVie = async function (item) {
      const index = findIndexByProductID(recentlyViewed.value, item.product_id);
      if (~index) {
        recentlyViewed.value.splice(index, 1);
        recentlyViewed.value.unshift(item);
      } else {
        recentlyViewed.value.unshift(item);
      }
      await upDateOrder({
        recently_viewed: recentlyViewed.value,
      });
    };
    // 添加訂閱商品
    const addSubscribe = async function (item) {
      const { generatedSubscribeData } = createSubscribeConstruction();
      const { sendData } = await generatedSubscribeData(item, myorder);
      const id = item.product_id || item.id;
      const index = findIndexByProductID(subscription.value, id);
      ~index
        ? (subscription.value[index] = sendData)
        : subscription.value.push(sendData);
      await upDateOrder({
        subscription: subscription.value,
        order: clearEmptyAndSortOrder(myorder).value,
      });
    };
    // 普通商品添加
    const handleOrderAdd = async function (item) {
      await createGeneralOrderConstruction(item, myorder);
      await upDateOrder({
        order: clearEmptyAndSortOrder(myorder).value,
      });
    };
    // 設定購物車的訂單
    const setProductCart = function (item) {
      productCart.value = item;
    };
    //
    const handleSelectionDay = (day) => {
      const { showProductItem, setSelection } = toRefs(useCartStore());
      const indx = workDayLists.value.findIndex(
        (d) => d.date === day.order_date.date
      );
      const { date, dayOfWeek } = day.order_date;
      setSelection.value(date, indx, `${date.slice(5)}/${dayOfWeek}`);
      showProductItem.value = true;
    };

    // 刪除單一商品
    const handleOrderRemoveItem = async function (item, orderdate) {
      const { removeProductAndEmptyOrdersByDate } = removeOrder();
      const result = removeProductAndEmptyOrdersByDate(
        myorder,
        orderdate.date,
        item
      );

      setProductCart(result);
      await upDateOrder({
        order: clearEmptyAndSortOrder(myorder).value,
      });
    };
    // 刪除整個訂閱商品
    const handleOrderRemoveSubScribe = async function (item) {
      const { removeProductAndEmptyOrders } = removeOrder();
      removeProductAndEmptyOrders(myorder.value, item.id);
    };

    // 登出設定
    const resetOrder = function () {
      myfavorite.value = [];
      myorder.value = [];
      subscription.value = [];
      recentlyViewed.value = [];
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
      personalStyle,
      // getter
      calcOrderState,
      // fn
      initializeOrderStore,
      addMyfavorite,
      addrecentlyVie,
      addSubscribe,
      handleOrderAdd,
      handleOrderRemoveItem,
      handleOrderRemoveSubScribe,
      setProductCart,
      handleSelectionDay,
      resetOrder,
      getOrderConstruction,
      calcSubtotal,
      promoCodeConstruction,
    };
  },
  {
    persist: {
      storage: sessionStorage,
    },
  }
);
