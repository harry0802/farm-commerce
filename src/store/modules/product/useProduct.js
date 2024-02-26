import { defineStore } from "pinia";
import productActions from "@/store/modules/product/actions.js";
import { callbackStack } from "@/Plugins/SupabasePruductsData.js";

export const useProduct = defineStore("useProduct", {
  state() {
    return {
      sideListData: callbackStack,
      categoryIndex: -1,
      shopUrlId: null,
      checkpoint: null,
      observerCurrentID: "",
      productInfoPageData: {
        productStorage: null,
        productIngredients: null,
        productSupplier: {
          supplierimg: null,
          supplierName: "",
          supplierLocation: "",
          supplierIntroduce: "",
        },
      },
      productInfo: {
        id: "",
        name: "",
        photoPath: "",
        producer: "",
        weight: 0,
        price: 0,
        descripttion: "",
      },
      productPageNavBtnBar: {
        producer: {
          title: "生產商介紹",
          state: true,
          components: "SupplierInfomation",
        },
        storagetips: {
          title: "儲藏的小技巧",
          state: true,
          components: "SupplierInfoStorage",
        },
        ingredicents: {
          title: "營養與原物料標示",
          state: true,
          components: "SupplierInfoIngredientsAndNutrition",
        },
      },
      productPageBreadcrumbs: [{ label: "首頁", link: "/home" }],
    };
  },
  getters: {},
  actions: productActions,
  persist: {
    storage: window.sessionStorage,
    paths: [
      "sideListData",
      "categoryIndex",
      "checkpoint",
      "shopUrlId",
      "observerCurrentID",
    ],
  },
});
