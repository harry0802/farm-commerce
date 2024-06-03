import { keywordSearch } from "@/Plugins/SupabasePruductsData.js";

// const shops = await getShopData();
export const initData = async function (obj, urlKey) {
  if (!obj || !urlKey) return;

  for (const key in obj) {
    const currentData = obj[key];
    let isCategorys;

    if (Object.hasOwnProperty.call(obj, key)) {
      if (key === urlKey) {
        const pageData = await keywordSearch(urlKey);
        return {
          currentData,
          pageData,
        };
      }
    }

    isCategorys = currentData.keywords.includes(urlKey);
    if (isCategorys) {
      const pageData = await keywordSearch(urlKey);
      return {
        currentData,
        pageData,
      };
    }

    if (typeof currentData === "object") {
      initData(currentData);
    }
  }
};
