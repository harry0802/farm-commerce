import dayjs from "dayjs";
import { getSupabaseData } from "@/config/FarmPruductsItemManage.js";

const theWeek = ["週末", "週一", "週二", "週三", "週四", "週五", "週六"];
const currentDate = dayjs();

const creatCartList = function () {
  const dateArr = [];

  for (let i = 0; i < 31; i++) {
    const formattedDate = currentDate.add(1, "y").add(i, "day");
    const dayOfWeek = formattedDate.day();

    const output = {
      date: formattedDate.format("YYYY/M/D"),
      dayOfWeek: theWeek[dayOfWeek],
    };
    dateArr.push(output);
  }
  return dateArr;
};

const filterHolidayDay = async function (date) {
  try {
    const createDate = date();
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

export const getToday = async function () {
  const createDate = await filterHolidayDay(creatCartList);

  const firstday = createDate[0];
  const { date, dayOfWeek } = firstday;
  return `${date.slice(5)}/${dayOfWeek}`;
};

export const createDate = await filterHolidayDay(creatCartList);
