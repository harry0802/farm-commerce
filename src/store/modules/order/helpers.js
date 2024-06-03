////////////////// 與日期有關的 //////////////////////
import dayjs from "dayjs";
const isSameOrBeforeDate = (td) => {
  const date1 = dayjs(td);
  return (targets) =>
    targets.filter((d) => date1.isSameOrBefore(dayjs(d.date)));
};

// 創建 要操作的 state函數

const checkContent = (item, condition) => item.findIndex(condition);

const findIndexByProductID = (item, id) =>
  item.findIndex((i) => i.product_id === id);

const clearEmptyOrder = (od) =>
  od.value.filter((order) => order.products.length !== 0);

export {
  isSameOrBeforeDate,
  findIndexByProductID,
  checkContent,
  clearEmptyOrder,
};
