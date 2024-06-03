import { defineStore } from "pinia";
import { toast } from "vue-sonner";

const store = defineStore("cartStore", {
  state() {
    return {
      showCart: false,
      existenceProduct: null,
      showProductItem: true,
      showList: true,
      currentDay: { currentWorkDay: null, selectionIndex: 0, orderDate: null },
      selectionDay: {
        currentWorkDay: null,
        selectionIndex: 0,
        orderDate: null,
      },
      workDay: {},
      product: null,
    };
  },
  getters: {
    getshowCart: (state) => state.showCart,
    getExistenceProduct: (state) => state.existenceProduct,
    getshowList: (state) => state.showList,
    calcUserSelectDay: (state) => {
      if (!state.workDay.getToday) return;
      const { date, dayOfWeek } = state.workDay.getToday;
      return state.selectionDay.currentWorkDay
        ? state.selectionDay.currentWorkDay
        : `${date.slice(5)}/${dayOfWeek}`;
    },
  },
  actions: {
    openCart() {
      this.showCart = true;
    },
    closeCart() {
      this.showCart = false;
    },
    toggleCart() {
      this.showCart = !this.showCart;
    },

    closeList() {
      this.showList = false;
    },
    openList() {
      this.showList = true;
    },
    setSelection(date, index, clickedItemTitle) {
      this.selectionDay.currentWorkDay = clickedItemTitle;
      this.selectionDay.selectionIndex = index;
      this.selectionDay.orderDate = date;
    },

    setCurrentDay(date, index, clickedItemTitle) {
      this.currentDay.currentWorkDay = clickedItemTitle;
      this.currentDay.selectionIndex = index;
      this.currentDay.orderDate = date;
    },

    setSelectionDay() {
      if (this.currentDay.currentWorkDay) {
        this.selectionDay = { ...this.currentDay };
        this.currentDay = {
          currentWorkDay: null,
          selectionIndex: 0,
          orderDate: null,
        };
        this.showProductItem = !this.showProductItem;
      } else {
        toast.warning("請選擇日期");
      }
    },

    getFirstDay() {
      if (!this.workDay.getToday) return;
      const { date } = this.workDay.getToday;
      return date;
    },
    getTheWeek() {
      if (!this.workDay.getToday) return;
      const { dayOfWeek } = this.workDay.getToday;
      return dayOfWeek;
    },
    specificWeekDay(week) {
      if (!this.workDay.getToday) return;
      const { workDayList } = this.workDay;
      return workDayList.filter((item) => item.dayOfWeek === week);
    },
  },
});

export default store;
