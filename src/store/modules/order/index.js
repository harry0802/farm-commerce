import { defineStore } from "pinia";
import { ref } from "vue";
import { getClientOrder, upDateOrder } from "@/Plugins/supabaseOrder.js";
import { useDebounceFn } from "@vueuse/core";
import { creatOrderList } from "@/Plugins/day.js";
// .uuid({ message: "Invalid UUID" })
export const useOrderStore = defineStore("order", () => {
  /*
 {
    id: '0a07951d-3acb-458b-b12b-6df5d17f528b',
    created_at: '2024-03-28T10:24:12.079887+00:00',
    favorite: [
[
  {
    "product_id": "",
    "favorite_date": ""
  },
  {
    "product_id": "ㄧ二三",
    "favorite_date": ""
  }
]
    ],
    subscription: [
      {
        Quantity: '',
        Frequency: '',
        product_id: '',
        DeliveryDay: '',
        'NextDelivery Date': '',
        subscription_date: ''
      }
    ],
    recently_viewed: [ { view_date: '', product_id: '' } ],
    clients_id: 'c32a1e24-58bf-4714-b0a4-5e8e7e3421c9',
    order: [
      {
        order_id: '123',
        products: [ { price: 0, quantity: '', product_id: '456' } ],
        order_date: ''
      }
    ]
  }
*/

  const myfavorite = ref([]);
  const myorder = ref([]);
  const subscription = ref([]);
  const recentlyViewed = ref([]);

  const initializeOrderStore = async function () {
    const reponse = await getClientOrder();
    myfavorite.value = reponse.favorite;
    myorder.value = reponse.order;
    subscription.value = reponse.subscription;
    recentlyViewed.value = reponse.recently_viewed;
  };
  initializeOrderStore();

  // getter

  //  helper FN
  const debonseUpDateOrder = useDebounceFn(() => {
    return upDateOrder({ favorite: myfavorite.value });
  }, 500);

  const checkContent = (item, condition) => item.findIndex(condition);

  // added Array
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
      product_id: item.orderid,
      Quantity: item.quantity,
      Frequency: item.frequencyv,
      DeliveryDay: getToday.dayOfWeek,
      NextDelivery_Date: getToday.date,
    };
    const response = await upDateOrder({
      subscription: sendData,
    });

    subscription.value = response;
  };

  return {
    myfavorite,
    myorder,
    subscription,
    recentlyViewed,
    // getter

    // fn
    addMyfavorite,
    addrecentlyVie,
    addSubscribe,
  };
});
