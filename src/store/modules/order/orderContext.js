import { toRefs } from "vue";
import { creatOrderList } from "@/Plugins/day.js";
import useCartStore from "@/store/modules/cart/cartStore.js";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

// 創建操作order的基本資料
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

// set UserSelection default firstOrder
const setDefaultFirstOrder = function (order, workDayLists) {
  const { setSelection } = useCartStore();
  if (order.value.length === 0) return;
  const indx = workDayLists.findIndex(
    (d) => d.date === order.value[0].order_date.date
  );
  const { date, dayOfWeek } = order.value[0].order_date;
  setSelection(date, indx, `${date.slice(5)}/${dayOfWeek}`);
};

// 移除過期訂單
const removeExpiredOrders = (dayList, orderSp, order) => {
  const currentDay = dayjs(dayList[0].date);
  return (order.value = orderSp.filter(
    (pd) => !currentDay.isAfter(dayjs(pd.order_date.date))
  ));
};
// 尋找產品訂單
const findOrderDate = function (pd) {
  const select = selectionDay.value.orderDate;
  pd = myorder.value.find((i) => i.order_date.date === select);
  if (product.value) setProductCart.value(product.value.products);
};

// 訂閱商品變動
const findSubscribe = function (newPd, oldPd) {
  return oldPd.value.find((pd) => pd.id === newPd.id);
};

// Find an order for the given date, create a new one if not found
const createOrder = function (date) {
  const order = {
    order_id: uuidv4(),
    products: [],
    order_date: date,
  };
  return order;
};

//////////////////////////////////////////////////////////// helper FN ////////////////////////////////////////////////////////////
// 確認選擇日期與配送週期是否有衝突
// const isSameOrBeforeDate = (td) => {
//   const date1 = dayjs(td);
//   return (target) => {
//     if (target.length > 1) {
//       const orderDate = [];
//       target.forEach((d) =>
//         date1.isSameOrBefore(dayjs(d.date)) ? orderDate.push(d) : d
//       );
//       return orderDate;
//     } else {
//       return target;
//     }
//   };
// };
// //frequency fns
// const everyWeek = (range, filterFn) => filterFn(range);
// const oherWeek = (range, td, od, filterFn) =>
//   filterFn(range[td + od] ? [range[td], range[td + od]] : range[td]);
// const moonOnce = (range, td, filterFn) => filterFn(range[td]);

// const frequencyFindAndCreate = (sendData, range, td) => {
//   const frequency = ["每周一次", "隔週一次", "每月一次"];
//   const filterFn = isSameOrBeforeDate(range[td].date);
//   const index = frequency.findIndex((fq) => fq === sendData);

//   return [
//     () => everyWeek(range, filterFn),
//     () => oherWeek(range, td, index, filterFn),
//     () => moonOnce(range, td, filterFn),
//   ][index]();
// };
const isSameOrBeforeDate = (td) => {
  const date1 = dayjs(td);
  return (targets) =>
    targets.filter((d) => date1.isSameOrBefore(dayjs(d.date)));
};

// Frequency functions
const everyWeek = (range, filterFn) => filterFn(range);
const otherWeek = (range, td, filterFn) => {
  const otherWeekRange = range[td + 2]
    ? [range[td], range[td + 2]]
    : [range[td]];
  return filterFn(otherWeekRange);
};
const onceAMonth = (range, td, filterFn) => filterFn([range[td]]);

// Frequency find and create
const frequencyFindAndCreate = (sendData, range, td) => {
  const frequencies = {
    每周一次: (range, _, filterFn) => everyWeek(range, filterFn),
    隔週一次: (range, td, filterFn) => otherWeek(range, td, filterFn),
    每月一次: (range, td, filterFn) => onceAMonth(range, td, filterFn),
  };
  const filterFn = isSameOrBeforeDate(range[td].date);
  return frequencies[sendData](range, td, filterFn);
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
  const index = products.findIndex((p) => p.product_id === product.product_id);
  if (index !== -1) {
    products[index] = product;
  } else {
    products.push(product);
  }
};

//  OrderDataSorter
const orderDataSorter = (orderA, orderB) => {
  const dateA = dayjs(orderA.order_date.date).unix();
  const dateB = dayjs(orderB.order_date.date).unix();
  return dateA - dateB;
};

// handle Fn helper
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
  const filteredOrders = orders.filter((order) => order.products.length !== 0);
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

export {
  createOrderManipulate,
  removeExpiredOrders,
  removeProductAndEmptyOrders,
  removeProductAndEmptyOrdersByDate,
  processOrder,
  frequencyFindAndCreate,
  orderDataSorter,
  setDefaultFirstOrder,
  findSubscribe,
};
