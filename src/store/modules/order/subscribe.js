import dayjs from "dayjs";
import {
  processOrder,
  frequencyFindAndCreate,
  findSubscribe,
} from "@/store/modules/order/orderContext.js";

const createCatagory = function () {};

const weekDayOrdersCollect = function (item) {
  // 確認選擇日期與配送週期是否有衝突
  const isSameOrBeforeDate = (target) => {
    const date1 = dayjs(calcUserSelectDay.date);
    const date2 = dayjs(target);
    return date1.isSameOrBefore(date2);
  };

  // 訂閱商品的整理

  if (item && item.frequency) {
    // 檢查商品在不在？ 在的話如果沒有變動返回 ，有變動移除添加 / 不存在就添加
    // const isSub = findSubscribe(item, subscription);
    // if (isSub.Frequency === item.frequency) return;

    const loopFq = frequencyFindAndCreate(item.frequency);
    const indexDate = workDayList.findIndex(
      (d) => d.date === calcUserSelectDay.date
    );
    for (let i = 0; i < loopFq; i++) {
      let filterDay;
      if (~indexDate) {
        filterDay = workDayList[(indexDate + 5) * i];
      } else {
        filterDay = workDayList[5 * i];
      }
      isSameOrBeforeDate(filterDay.date)
        ? processOrder(myorder.value, filterDay, product)
        : "";
    }
  }
};

/*

[
    {
     weeken: '週二',
    pd:[
        {
      "Quantity": 1,
      "Frequency": "每月一次",
      "product_id": "315b42fc-8f53-4494-9555-31189a9ae439",
    },
    range:[ "2024/5/14", "2024/5/14", "2024/5/14", "2024/5/14"]
    },
    ],
        {
     weeken: '週三',
    pd:{
      "Quantity": 1,
      "Frequency": "每月一次",
      "product_id": "315b42fc-8f53-4494-9555-31189a9ae439",
    },
    range:[ "2024/5/14", "2024/5/14", "2024/5/14", "2024/5/14"]
    }
  ]
*/
