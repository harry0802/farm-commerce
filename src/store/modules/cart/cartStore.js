import { defineStore } from "pinia";

const store = defineStore("cartStore", {
  state() {
    return {
      showCart: false,
      existenceProduct: null,
      showProductItem: true,
      showList: true,
    };
  },
  getters: {
    getshowCart: (state) => state.showCart,
    getExistenceProduct: (state) => state.existenceProduct,
    getshowList: (state) => state.showList,
  },
  actions: {
    openCart() {
      this.showCart = true;
    },
    closeCart() {
      this.showCart = false;
    },
    closeList() {
      this.showList = false;
    },
    openList() {
      this.showList = true;
    },
  },
});

export default store;
