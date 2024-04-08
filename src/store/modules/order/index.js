import { defineStore } from "pinia";
import { ref } from "vue";
import { getClientOrder, upDateOrder } from "@/Plugins/supabaseOrder.js";
import { useDebounceFn } from "@vueuse/core";
import { creatOrderList } from "@/Plugins/day.js";
import { v4 as uuidv4 } from "uuid";

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
  const uid = uuidv4();
  // getter

  //  helper FN
  const debonseUpDateOrder = useDebounceFn(() => {
    return upDateOrder({ favorite: myfavorite.value });
  }, 500);

  const checkContent = (item, condition) => item.findIndex(condition);

  const frequencyFindAndCreate = (sendData) => {
    const frequency = ["每周一次", "隔週一次", "每月一次"];
    const index = checkContent(frequency, (fq) => fq === sendData.Frequency);
    return Math.floor(31 / (7 * (index + 1)));
  };

  //---------- helperFn Order Data ----------

  const createOrder = function (date) {
    const uid = uuidv4();
    const order = {
      order_id: uid,
      products: [],
      order_date: date,
    };
    return order;
  };

  const findOrCreateOrder = (orders, date) => {
    const index = orders.findIndex((order) => order.order_date === date);

    if (index !== -1) {
      return orders[index];
    } else {
      const newOrder = createOrder(date); // 假設這裡有一個創建新訂單的函式
      orders.push(newOrder);
      return newOrder;
    }
  };
  const updateOrCreateProduct = (products, product) => {
    const index = products.findIndex(
      (p) => p.product_id === product.product_id
    );
    if (index !== -1) {
      products[index] = product;
    } else {
      products.push(product);
    }
  };

  const processOrder = (orders, date, product) => {
    const order = findOrCreateOrder(orders, date);
    updateOrCreateProduct(order.products, product);
  };

  //  init
  const initializeOrderStore = async function () {
    const reponse = await getClientOrder();
    myfavorite.value = reponse.favorite;
    myorder.value = reponse.order;
    subscription.value = reponse.subscription;
    recentlyViewed.value = reponse.recently_viewed;
  };

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

    const response = await upDateOrder({
      subscription: subscription.value,
    });

    subscription.value = response;
  };

  const addOrder = async function (item) {
    // {
    //   order_id: '123',
    //   products: [ { price: 0, quantity: '', product_id: '456' } ],
    //   order_date: ''
    // }

    // ['每周一次', '隔週一次', '每月一次']
    // 取得添加的次數
    // 31  / 7 基底 尋找陣列中的符合值 用索引乘法   最後 - 31 取模 (索引需要 +1)

    // 添加訂單
    const product = {
      product_id: "456",
      price: 3,
      quantity: "",
    };
    const orders = myorder.value;

    const loopFq = frequencyFindAndCreate(item);

    // 循環次數進行判斷添加 ，循環過程中需要 透過週期天數設定日期 ,這部分是設定預設行為 設定今天日期
    // 必須得知用戶目前選擇的日期

    //   7 * i[1] etc

    /*
     * 1. 把所有週期取出來
     * 2. 比對用戶的日期，只取之後的
     */

    for (let i = 0; i <= loopFq; i++) {
      const element = array[index];
      console.log(7 * i);
    }

    // -----循環中--------
    // outsild Data

    // processOrder(orders, getToday.date, product);
  };

  const test = async () => {
    const { getToday, workDayList } = await creatOrderList().filteredDates();
    const orders = myorder.value;
    const product = {
      product_id: "456",
      price: 3,
      quantity: "",
    };

    processOrder(orders, getToday.date, product);
    console.log(orders);
  };

  // test();
  // 添加到訂單

  /* 兩種商品的判斷

       -查閱是否有該日期 ? 預設第一個工作天, 透過改變行程，更改工作天
       -查閱是否有該日期 ? 使用日期檢查 * 格式需要統一


   * 1. 直接添加 -> 查閱是否有該日期？ 創建新日期 : 添加到該日期的行列
 


   * 2. 訂閱 -> 判斷訂閱的週期  
       * 由於是使用預設添加所以都會是週一 (每週的第一個工作天)
        每周一次 ?  添加到訂單， 到月底前的每週一筆 （1）
        隔週一次 ?  添加到訂單， 到月底前的每隔週一筆 (7)
        每月一次 ?  添加到訂單， 到月底前的每隔週一筆 (14)
   */

  return {
    //state
    myfavorite,
    myorder,
    subscription,
    recentlyViewed,
    // getter

    // fn
    initializeOrderStore,
    addMyfavorite,
    addrecentlyVie,
    addSubscribe,
  };
});
