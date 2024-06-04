import { defineStore } from "pinia";
import { ref } from "vue";
import { getKeyWord } from "@/Plugins/SupabasePruductsData.js";
import { useThrottleFn } from "@vueuse/core";

export const useSearch = defineStore(
  "search",
  () => {
    const userEnter = ref("");
    const searchState = ref(false);
    const searchArearKeyword = ref([
      "地下城",
      "驅魔",
      "新鮮",
      "料理",
      "零食",
      "雞蛋",
    ]);

    const searchArearProduct = ref([]);

    const createSearchProduct = (data) => {
      console.log(data);

      return {
        imgurl: data.image_url,
        supplierName: data.supplier_name,
        productCode: data.product_code,
        productName: data.product_name,
      };
    };

    const handleUserinput = (enter) => {
      const inputValue = enter.target.value;
      return throttleFn(inputValue);
    };

    const throttleFn = useThrottleFn(
      async (key) => {
        const wordsArray = key.trim().split(" ");
        console.log(wordsArray);

        const repose = await getKeyWord(wordsArray);
        if (repose) {
          searchArearProduct.value = [];
          console.log(repose);

          repose.forEach((item) => {
            searchArearProduct.value.push(createSearchProduct(item));
          });
        }
      },
      1000,
      { maxWait: 1500 }
    );

    const openSearch = function () {
      searchState.value = true;
    };

    const closeSearch = function () {
      searchState.value = false;
    };

    return {
      userEnter,
      searchState,
      openSearch,
      closeSearch,
      searchArearKeyword,
      handleUserinput,
      userEnter,
      searchArearProduct,
    };
  },

  {
    persist: {
      storage: sessionStorage,
    },
  }
);
