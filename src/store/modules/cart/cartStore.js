import { defineStore } from "pinia";
import { toast } from "vue-sonner";

const store = defineStore("cartStore", {
  state() {
    return {
      showCart: false,
      existenceProduct: null,
      showProductItem: true,
      showList: true,
      currentDay: { currentWorkDay: null, selectionIndex: 0 },
      selectionDay: { currentWorkDay: null, selectionIndex: 0 },
      workDay: {},
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

    setSelectionDay() {
      if (this.currentDay.currentWorkDay) {
        this.selectionDay = { ...this.currentDay };
        this.currentDay = { currentWorkDay: null, selectionIndex: 0 };
        this.showProductItem = !this.showProductItem;
      } else {
        toast.warning("請選擇日期");
      }
    },
  },
});

export default store;
