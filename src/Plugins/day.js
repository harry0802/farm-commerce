import dayjs from "dayjs";
import { getSupabaseData } from "@/config/FarmPruductsItemManage.js";
import updateLocale from "dayjs/plugin/updateLocale";
dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
  months: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ],
  weekdays: ["週末", "週一", "週二", "週三", "週四", "週五", "週六"],
});

const currentDate = dayjs();
const currentMonth = currentDate.startOf("month");

// 創建日期數量函數
const creatCartList = function () {
  const dateArr = [];
  const limit = currentMonth.daysInMonth();
  for (let i = 0; i < limit; i++) {
    const formattedDate = currentDate.add(0, "y").add(i, "day");
    const output = {
      date: formattedDate.format("YYYY/M/D"),
      dayOfWeek: formattedDate.format("dd"),
    };
    dateArr.push(output);
  }
  return dateArr;
};

//過濾假日
const filterHolidayDay = async function (date) {
  try {
    const createDate = typeof date === "function" ? date() : date;
    const holiday = await getSupabaseData("vacation");
    const holidayArr = [];

    holiday.forEach((vacation, i) => {
      holidayArr[i] = vacation["Start Date"];
    });

    const filteredDates = createDate.filter((work) => {
      return !holidayArr.includes(work.date);
    });

    return filteredDates;
  } catch (e) {
    console.error(e);
  }
};

// 暴露函數
const getToday = async function () {
  const createDate = await filterHolidayDay(creatCartList);
  const firstday = createDate[0];
  const { date, dayOfWeek } = firstday;
  return `${date.slice(5)}/${dayOfWeek}`;
};

const creatOrderList = function () {
  const formattedDate = currentDate;

  const creatSpecificList = async () => {
    const dateArr = [];
    const limit = currentMonth.daysInMonth() - currentDate.day();

    for (let i = 0; i < limit; i++) {
      const formattedDate = currentDate.add(0, "y").add(i, "day");
      const output = {
        date: formattedDate.format("YYYY/M/D"),
        dayOfWeek: formattedDate.format("dd"),
      };
      dateArr.push(output);
    }
    return await filterHolidayDay(dateArr);
  };

  const filteredDates = async () => {
    const createDate = await creatSpecificList();

    const getToday = createDate[0];
    const specificWeekDay = (week) =>
      createDate.filter((item) => item.dayOfWeek === week);
    return {
      specificWeekDay,
      getToday,
    };
  };

  return {
    filteredDates,
  };
};

const createDate = await filterHolidayDay(creatCartList);

export { getToday, createDate, creatOrderList };
