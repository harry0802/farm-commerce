import { toRefs, ref, watchEffect, provide } from "vue";
import { creatOrderList } from "@/Plugins/day.js";
import { isSameOrBeforeDate } from "@/store/modules/order/helpers.js";
import { upDateOrder } from "@/Plugins/supabaseOrder.js";
import useCartStore from "@/store/modules/cart/cartStore.js";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { useOrderStore } from "@/store/modules/order/index.js";
import {
  findIndexByProductID,
  clearEmptyOrder,
} from "@/store/modules/order/helpers.js";
import { orderAmount } from "@/store/modules/order/getter/index.js";
import { requiresPromocode } from "@/Plugins/supabaseOrder.js";
import { toast } from "vue-sonner";

//////////// 創建訂單 //////////

const createOrderConstruction = function () {
  // 創建 訂單的基礎結構
  const createOrder = function (date) {
    const order = {
      order_id: uuidv4(),
      products: [],
      order_date: date,
      promoCode: null,
      order_amount: {},
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
    return {
      product_id: item.product_id || item.id,
      product_name: item.product_name || item.name,
      price: item.price,
      image_url: item.image_url || item.photoPath,
      quantity: item.quantity || 1,
      weight: item.weight,
      supplier_name: item.supplier_name || item.producer,
      Subscribe: item.Subscribe || null,
      product_code: item.product_code || item.code,
      SALE: item.SALE || null,
    };
  };

  // 創建 訂閱商品的資料
  const createSubscribeData = (data, delivery, range) => {
    return {
      product_id: data.product_id || data.id,
      image_url: data.image_url || data.photoPath,
      product_name: data.product_name || data.name,
      product_code: data.product_code || data.code,
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
  // 最後計算金額 , 並檢查是否使用折扣碼
  const { products, order_amount, promoCode } = toRefs(
    findOrCreateOrder(orders, date)
  );
  updateOrCreateProduct(products.value, product);
  order_amount.value = orderAmount(products.value, promoCode.value?.amount);
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
  const removeProductAndEmptyOrders = (orders, subscription, product) => {
    // 找到 week 訂單 , 移除對應的 id
    const removeId = product.product_id;
    const removeDay = product.DeliveryDay;

    orders.value.forEach((order) => {
      if (order.order_date.dayOfWeek === removeDay) {
        const index = order.products.findIndex((d) => d.product_id, removeId);
        ~index ? order.products.splice(index, 1) : order;
      }
    });

    // 移除訂閱商品
    subscription.value.forEach((order, i) => {
      if (order.DeliveryDay === removeDay && order.product_id === removeId)
        subscription.value.splice(i, 1);
    });
  };

  // 移除訂單 （指定產品）
  const removeProductAndEmptyOrdersByDate = (orders, date, productId) => {
    // 找出訂單
    const data = orders.value.find((order) => order.order_date.date === date);

    const { products, order_amount, promoCode } = toRefs(data);
    // 移除目標
    products.value = products.value.filter((pd) => pd.product_id !== productId);

    // 重新計算金額
    order_amount.value = orderAmount(products.value, promoCode.value?.amount);
    return products.value;
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
      每週一次: (range, _, filterFn) => everyWeek(range, filterFn),
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

// 處理訂閱商品
const createGeneralSubScribeConstruction = function () {
  const { getIndexState, createOrder } = createOrderConstruction();
  const { subscription, myorder } = getIndexState();
  const { specificWeekDay } = useCartStore();

  // 替換日期 (全部訂單)

  const changDeliveryDayAll = (data) => {
    const { oldWeek, newWeek } = data;

    const newDeliveryList = specificWeekDay(newWeek).map((d) => d.date);

    // 過濾要比對的陣列
    const oldWeekProducts = subscription.value.filter(
      (d) => d.DeliveryDay === oldWeek
    );
    const newWeekProducts = subscription.value.filter(
      (d) => d.DeliveryDay === newWeek
    );

    // 更新指定產品的週期
    const updatedOldWeekProducts = oldWeekProducts.map((product) => ({
      ...product,
      DeliveryDay: newWeek,
      Delivery_List: newDeliveryList,
    }));

    // 排除 所有操作日期訂單
    const finalSubscribe = subscription.value.filter(
      (d) => d.DeliveryDay !== oldWeek && d.DeliveryDay !== newWeek
    );

    // 使用 map 設定唯一值 -> 取數量最大
    const productMap = new Map();
    const mergeProducts = (products) => {
      products.forEach((product) => {
        if (productMap.has(product.product_id)) {
          const existingProduct = productMap.get(product.product_id);
          if (product.Quantity > existingProduct.Quantity) {
            productMap.set(product.product_id, product);
          }
        } else {
          productMap.set(product.product_id, product);
        }
      });
    };
    // 合併

    [newWeekProducts, updatedOldWeekProducts].forEach((item) =>
      mergeProducts(item)
    );
    // 更新訂閱商品
    subscription.value = finalSubscribe.concat([...productMap.values()]);

    //------- 更新訂單 -----------
    // 取出舊的訂單日期
    const oldOrder = myorder.value.filter(
      (od) => od.order_date.dayOfWeek === data.oldWeek
    );

    // 只對舊訂單原有訂單操作，如果舊的空白不添加任何，如果有就添加存在的
    if (oldOrder.length === 0) return;
    const prepareAddTask = new Map();
    // 清理訂單, 清理存在的
    oldOrder.forEach((item) => {
      const filterPd = [];
      item.products.forEach((pd) => {
        !productMap.has(pd.product_id)
          ? filterPd.push(pd)
          : prepareAddTask.set(pd.product_id, pd);
      });
      item.products = filterPd;
    });
    // 被添加的訂單 ，存在就查找。不存在就創建
    const newOrder = myorder.value.filter(
      (od) => od.order_date.dayOfWeek === data.newWeek
    );
    // 創建新訂單
    if (newOrder.length === 0) {
      const dateList = specificWeekDay(newWeek);
      const task = [];
      dateList.forEach((date) => {
        const order = createOrder(date);
        order.products = [...prepareAddTask.values()];
        // 從新計算金額
        order.order_amount = orderAmount(order.products);
        task.push(order);
      });

      myorder.value = [...myorder.value, ...task];
    } else {
      // 每一筆訂單都添加轉移的訂單
      newOrder.forEach((item) => {
        const filterPd = new Map();
        item.products.forEach((pd) => {
          const id = pd.product_id;
          prepareAddTask.forEach((val) => {
            const taskId = val.product_id;
            if (val.product_id === id) {
              pd.Quantity >= val.Quantity
                ? filterPd.set(taskId, pd)
                : filterPd.set(taskId, val);
            } else {
              filterPd.set(taskId, val);
            }
          });
        });
        item.products = [...filterPd.values()];
      });
    }
    upDateOrder({
      subscription: subscription.value,
      order: clearEmptyAndSortOrder(myorder).value,
    });
  };

  // 替換日期 (個別操作)
  return {
    changDeliveryDayAll,
  };
};

////// 訂單金額相關邏輯 //////

// 取得訂單的資料的商業邏輯
const getOrderConstruction = function (data) {
  const { getIndexState } = createOrderConstruction();
  const { myorder, subscription } = getIndexState();
  const { selectionDay, getFirstDay, getTheWeek } = toRefs(useCartStore());
  const productId = ref(data.product_id || data.id);

  const tdOrder = ref(null);
  const getOrderSubscription = ref(null);
  const getOderFrequency = ref(null);
  const isSubscribe = ref(null);
  const week = ref(null);

  const findingSubscription = () =>
    subscription.value.find(
      (item) =>
        item.product_id === productId.value && item.DeliveryDay === week.value
    );
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
      (p) => p.product_id === productId.value
    );
    return result;
  };

  // 手動更改參數
  const handleParams = (pd) => (productId.value = pd.product_id || pd.id);

  const sendProvide = () => {
    provide("getOrderSubscription", getOrderSubscription);
    provide("tdOrderInfo", { isSubscribe, getOderFrequency });
  };

  watchEffect(() => {
    tdOrder.value = selectionDay.value.orderDate || getFirstDay.value();
    week.value =
      dayjs(selectionDay.value.orderDate).format("dddd") ||
      dayjs(getFirstDay.value()).format("dddd");
    getOrderSubscription.value = findingSubscription(tdOrder.value);
    getOderFrequency.value = findingTdOder(tdOrder.value);
    isSubscribe.value = checkingIsSubscribe(tdOrder.value);
  });

  return {
    tdOrder,
    getOrderSubscription,
    isSubscribe,
    getOderFrequency,
    handleParams,
    sendProvide,
  };
};

// 計算金額
const calcSubtotal = function (pd) {
  const subtotal = pd.reduce((acc, pd) => {
    let pdSubtotal = Math.trunc(pd.price * pd.quantity);
    if (pd.SALE?.sale && pd.SALE?.discount_price) {
      const normalAmount = pd.price * (pd.quantity % pd.SALE.discount_amount);
      const discountAmount =
        pd.SALE.discount_price *
        Math.trunc(pd.quantity / pd.SALE.discount_amount);
      pdSubtotal = normalAmount + discountAmount;
    }
    acc += +pdSubtotal;
    return acc;
  }, 0);

  return subtotal;
};

// 處理折扣碼
const promoCodeConstruction = function (data) {
  const { getIndexState } = createOrderConstruction();
  const { myorder } = getIndexState();
  let { products, promoCode, order_amount, order_id } = toRefs(data.value);

  // 更新訂單
  const upSpDate = async () => {
    const index = myorder.value.findIndex((i) => i.order_id === order_id);
    myorder.value[index] = data.value;
    await upDateOrder({
      order: myorder.value,
    });
  };

  // 查詢則扣碼
  const lookingOutPromoCode = async (code) => {
    const discount = await requiresPromocode(code);
    if (!discount) {
      toast.error("查無該優惠碼 ");
      return;
    }
    return discount;
  };

  // 檢查是否在別的訂單中使用折購碼
  const checkUsingPromoCode = (codeName) =>
    myorder.value.some((i) => i.promoCode?.promo_code === codeName);

  // 添加折扣碼
  const addDiscount = async function (code) {
    const discount = await lookingOutPromoCode(code);
    if (!discount) return;
    if (checkUsingPromoCode(discount.promo_code)) {
      toast.error(`${discount.promo_code.toUpperCase()} 已被您其他訂單使用!!`);
      return;
    }
    promoCode.value = discount;
    order_amount.value = orderAmount(products.value, discount.amount);
    await upSpDate();
    toast.success(`已成功添加優惠碼 ${discount.promo_code.toUpperCase()}!!`);
  };

  // 刪除折扣碼
  const removeDiscount = async function () {
    promoCode.value = null;
    order_amount.value = orderAmount(products.value);
    await upSpDate();
    toast.success("成功移除!");
  };

  return {
    addDiscount,
    removeDiscount,
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
  calcSubtotal,
  promoCodeConstruction,
  createGeneralSubScribeConstruction,
};
