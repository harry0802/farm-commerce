import { toRefs, provide } from "vue";
import { creatOrderList } from "@/Plugins/day.js";
import { isSameOrBeforeDate } from "@/store/modules/order/helpers.js";
import useCartStore from "@/store/modules/cart/cartStore.js";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { useOrderStore } from "@/store/modules/order/index.js";
import {
  findIndexByProductID,
  clearEmptyOrder,
} from "@/store/modules/order/helpers.js";

//////////// 創建訂單 //////////

const createOrderConstruction = function () {
  // 創建 訂單的基礎結構
  const createOrder = function (date) {
    const order = {
      order_id: uuidv4(),
      products: [],
      order_date: date,
    };
    return order;
  };
  // 創建 操作訂單的工具
  const createOrderManipulate = async () => {
    const { workDayList, specificWeekDay } =
      await creatOrderList().filteredDates();
    const { selectionDay } = toRefs(useCartStore());

    const orderDate =
      selectionDay.value.orderDate === null
        ? workDayList[0].date
        : selectionDay.value.orderDate;

    const index = workDayList.findIndex((i) => i.date === orderDate);
    const calcUserSelectDay = workDayList[index];
    return { calcUserSelectDay, workDayList, specificWeekDay };
  };

  // 創建 商品的資料
  const createProductData = (item) => {
    const qty = item.quantity || 1;
    const calcProductPrice = () => item.price * qty;
    return {
      product_id: item.product_id || item.id,
      product_name: item.product_name || item.name,
      price: calcProductPrice(),
      image_url: item.image_url || item.photoPath,
      quantity: qty,
      weight: item.weight,
      supplier_name: item.supplier_name || item.producer,
      Subscribe: item.Subscribe || null,
      product_code: item.product_code || item.code,
    };
  };

  // 創建 訂閱商品的資料
  const createSubscribeData = (data, delivery, range) => {
    return {
      product_id: data.product_id || data.id,
      Quantity: data.quantity,
      Frequency: data.frequency,
      DeliveryDay: delivery.dayOfWeek,
      NextDelivery_Date: delivery.date,
      Delivery_List: range,
    };
  };

  // 提出 pinia 的 State
  const getIndexState = () => {
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

  return {
    createOrder,
    createOrderManipulate,
    createProductData,
    createSubscribeData,
    getIndexState,
  };
};

// 訂單金額相關邏輯

//////////操作訂單函數////////////

// 訂單處理器
const processOrder = function (orders, date, product) {
  const { createOrder } = createOrderConstruction();
  // 查詢或是創建訂單
  const findOrCreateOrder = (orders, date) => {
    const index = orders.findIndex(
      (order) => order.order_date.date === date.date
    );

    const createOrde = () => {
      const newOrder = createOrder(date);
      orders.push(newOrder);
      return newOrder;
    };

    return ~index ? orders[index] : createOrde();
  };
  // 更新或是創建產品
  const updateOrCreateProduct = (products, product) => {
    const index = findIndexByProductID(products, product.product_id);
    ~index ? (products[index] = product) : products.push(product);
  };

  const { products } = findOrCreateOrder(orders, date);
  updateOrCreateProduct(products, product);
};

// 移除過期訂單//
const removeExpiredOrders = (dayList, orderSp, order) => {
  const currentDay = dayjs(dayList[0].date);
  return (order.value = orderSp.filter(
    (pd) => !currentDay.isAfter(dayjs(pd.order_date.date))
  ));
};
// 移除訂單
const removeOrder = function () {
  // 移除訂單 (訂閱產品)
  const removeProductAndEmptyOrders = (orders, productId) => {
    // 移除产品
    orders.value.forEach((order) => {
      const index = findIndexByProductID(order.products, productId);
      if (~index) order.products.splice(index, 1);
    });

    // 最後返回清理空白訂單
    return clearEmptyOrder(orders);
  };

  // 移除訂單 （指定產品）
  const removeProductAndEmptyOrdersByDate = (orders, date, productId) => {
    const order = orders.value.find((order) => order.order_date.date === date);

    // 如果找到了订单
    if (order) {
      order.products = order.products.filter(
        (pd) => pd.product_id !== productId
      );
      if (order.products.length === 0) {
        orders.value = orders.value.filter((o) => o.order_date.date !== date);
      }
    }
    return order.products;
  };

  return {
    removeProductAndEmptyOrders,
    removeProductAndEmptyOrdersByDate,
  };
};

// 根據日期排序訂單
const orderDataSorter = (orderA, orderB) => {
  const dateA = dayjs(orderA.order_date.date).unix();
  const dateB = dayjs(orderB.order_date.date).unix();
  return dateA - dateB;
};

// 清理 排序訂單
const clearEmptyAndSortOrder = function (order) {
  order.value = clearEmptyOrder(order);
  order.value.sort(orderDataSorter);
  return order;
};

// 普通商品的處理
const createGeneralOrderConstruction = async function (data, order) {
  const { createOrderManipulate, createProductData } =
    createOrderConstruction();
  const product = createProductData(data);
  const { calcUserSelectDay } = await createOrderManipulate();
  processOrder(order.value, calcUserSelectDay, product);
};

// 訂閱商品的處理
const createSubscribeConstruction = function () {
  // 創建 處理訂閱商品的資料
  const generatedSubscriptionOrder = function (sendData, range, td) {
    const everyWeek = (range, filterFn) => filterFn(range);
    const otherWeek = (range, td, filterFn) => {
      const otherWeekRange = range[td + 2]
        ? [range[td], range[td + 2]]
        : [range[td]];
      return filterFn(otherWeekRange);
    };
    const onceAMonth = (range, td, filterFn) => filterFn([range[td]]);

    // Frequency find and create
    const frequencies = {
      每周一次: (range, _, filterFn) => everyWeek(range, filterFn),
      隔週一次: (range, td, filterFn) => otherWeek(range, td, filterFn),
      每月一次: (range, td, filterFn) => onceAMonth(range, td, filterFn),
    };
    const filterFn = isSameOrBeforeDate(range[td].date);

    return frequencies[sendData](range, td, filterFn);
  };

  // 創建 訂閱商品的資料
  const generatedSubscribeData = async function (data, order) {
    const { createOrderManipulate, createProductData, createSubscribeData } =
      createOrderConstruction();

    const { calcUserSelectDay, specificWeekDay } =
      await createOrderManipulate();

    const range = specificWeekDay(calcUserSelectDay.dayOfWeek);
    const indexDate = range.findIndex((d) => d.date === calcUserSelectDay.date);
    const delivery = range[indexDate];
    const sendData = createSubscribeData(data, delivery, range);
    const product = createProductData(data);

    // 訂閱商品
    const loopFq = generatedSubscriptionOrder(data.frequency, range, indexDate);

    // 訂閱商品日期的替換，如果不一樣，刪除所有重新添加
    const dateSet = new Set(range.map((i) => i.date));

    order.value = order.value.map((d) => {
      if (dateSet.has(d.order_date.date)) {
        d.products = d.products.filter(
          (pd) => pd.product_id !== data.product_id
        );
      }
      return d;
    });

    //循環添加訂單
    loopFq.forEach((d) => {
      processOrder(order.value, d, product);
    });

    return { sendData };
  };

  return {
    generatedSubscribeData,
  };
};

// 預設第一天訂單
const setDefaultFirstOrder = function (order, workDayLists) {
  if (order.value.length === 0) return;
  const { setSelection } = useCartStore();
  const indx = workDayLists.findIndex(
    (d) => d.date === order.value[0].order_date.date
  );

  const { date, dayOfWeek } = order.value[0].order_date;
  setSelection(date, indx, `${date.slice(5)}/${dayOfWeek}`);
};

// 取得訂單的資料的商業邏輯
const getOrderConstruction = function (data) {
  const { getIndexState } = createOrderConstruction();
  const { myorder, subscription } = getIndexState();
  const productId = data.product_id || data.id;
  // 查詢對應到 id 的訂單
  const findingSubscription = () =>
    subscription.value.find((item) => item.product_id === productId);

  // 檢查是否訂閱
  const checkingIsSubscribe = function (td) {
    const getSubScribeList = findingSubscription();
    if (getSubScribeList) {
      return getSubScribeList.Delivery_List.some((d) => d.date === td);
    }
  };

  // 查詢今天的訂單
  const findingTdOder = (td) => {
    const findDate = myorder.value.find((d) => d.order_date.date === td);
    if (!findDate) return;
    const [result] = findDate.products.filter(
      (p) => p.product_id === productId
    );
    return result;
  };

  return {
    findingSubscription,
    checkingIsSubscribe,
    findingTdOder,
  };
};

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
};
