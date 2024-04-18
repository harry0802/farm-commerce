import { defineStore } from "pinia";
import { ref, toRefs, computed } from "vue";
import { getClientOrder, upDateOrder } from "@/Plugins/supabaseOrder.js";
import { useDebounceFn } from "@vueuse/core";
import { creatOrderList } from "@/Plugins/day.js";
import dayjs from "dayjs";
import useCartStore from "@/store/modules/cart/cartStore.js";
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
  const workDayLists = ref(null);
  // getter

  const calcOrderState = computed(() => myorder.value.length !== 0);

  //  helper FN
  const debonseUpDateOrder = useDebounceFn(() => {
    return upDateOrder({ favorite: myfavorite.value });
  }, 500);

  const checkContent = (item, condition) => item.findIndex(condition);

  const frequencyFindAndCreate = (sendData) => {
    const frequency = ["每周一次", "隔週一次", "每月一次"];
    const index = checkContent(frequency, (fq) => fq === sendData);
    return Math.floor(31 / (7 * (index + 1)));
  };

  //---------- helperFn Order Data ----------

  const createOrder = function (date) {
    const order = {
      order_id: uuidv4(),
      products: [],
      order_date: date,
    };
    return order;
  };
  // Find an order for the given date, create a new one if not found
  const findOrCreateOrder = (orders, date) => {
    const index = orders.findIndex(
      (order) => order.order_date.date === date.date
    );

    if (index !== -1) {
      return orders[index];
    } else {
      const newOrder = createOrder(date);
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
  //
  const processOrder = async (orders, date, product) => {
    const { products } = findOrCreateOrder(orders, date);
    updateOrCreateProduct(products, product);
  };
  const removeProductAndEmptyOrders = (orders, productId) => {
    // 移除产品
    orders.forEach((order) => {
      const index = order.products.findIndex(
        (product) => product.product_id === productId
      );
      if (index !== -1) {
        order.products.splice(index, 1);
      }
    });

    // 移除空订单
    const filteredOrders = orders.filter(
      (order) => order.products.length !== 0
    );
    return filteredOrders;
  };
  const removeProductAndEmptyOrdersByDate = (orders, date, productId) => {
    const order = orders.find((order) => order.order_date === date);

    // 如果找到了订单
    if (order) {
      // 移除订单中指定产品
      const index = order.products.findIndex(
        (product) => product.product_id === productId
      );

      if (index !== -1) {
        order.products.splice(index, 1);
      }

      if (order.products.length === 0) {
        const indexToRemove = orders.findIndex((o) => o.order_date === date);
        if (indexToRemove !== -1) {
          orders.splice(indexToRemove, 1);
        }
      }
    }

    return orders;
  };

  // 移除過期訂單
  const removeExpiredOrders = (dayList, order) => {
    const currentDay = dayjs(dayList[0].date);
    myorder.value = order.filter((pd) =>
      currentDay.isSameOrBefore(dayjs(pd.order_date.date))
    );
  };
  //  init
  const initializeOrderStore = async function () {
    const [reponse, { workDayList }] = await Promise.all([
      await getClientOrder(),
      await creatOrderList().filteredDates(),
    ]);
    myfavorite.value = reponse.favorite;
    // myorder.value = reponse.order;
    subscription.value = reponse.subscription;
    recentlyViewed.value = reponse.recently_viewed;
    workDayLists.value = workDayList;
    removeExpiredOrders(workDayList, reponse.order);
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

  // 創建操作order的基本資料
  const createOrderManipulate = async () => {
    const { workDayList } = await creatOrderList().filteredDates();
    const { selectionDay } = toRefs(useCartStore());
    const selectIndex = selectionDay.value.selectionIndex;
    const calcUserSelectDay = workDayList[selectIndex];
    const orders = myorder.value;
    return { calcUserSelectDay, orders, workDayList };
  };
  // item -> 產品資料， callback ->  需要做什麼操作
  const handleOrderAdd = async function (item) {
    const { calcUserSelectDay, workDayList } = await createOrderManipulate();

    // 添加訂單
    const product = {
      product_id: item.product_id,
      product_name: item.product_name,
      price: item.price,
      image_url: item.image_url,
      quantity: item.quantity || "1",
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
      processOrder(myorder.value, calcUserSelectDay, product);
    }

    // 使用的是普通商品
    myorder.value = await upDateOrder({
      order: myorder.value,
    });
  };

  // 移除商品
  const handleOrderRemoveSubScribe = async function (item) {
    const orders = myorder.value;
    removeProductAndEmptyOrders(orders, item.id);
    console.log(orders);
  };

  const handleOrderRemoveItem = async function (item) {
    let test = [
      {
        order_id: "123",
        products: [
          {
            price: 0,
            quantity: "被刪除",
            product_id: "456",
          },
          {
            price: 0,
            quantity: "被保留",
            product_id: "459",
          },
        ],
        order_date: "1991113",
      },
      {
        order_id: "223",
        products: [
          {
            price: 0,
            quantity: "",
            product_id: "416",
          },
        ],
        order_date: "1991112",
      },
    ];
    // orders, date, productId
    test = removeProductAndEmptyOrdersByDate(test, "1991113", "456");

    console.log(test);
  };

  return {
    //state
    myfavorite,
    myorder,
    subscription,
    recentlyViewed,
    workDayLists,
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
    //
  };
});
