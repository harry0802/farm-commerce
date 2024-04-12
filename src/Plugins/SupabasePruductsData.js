import { getSupabaseData, supabase } from "../config/FarmPruductsItemManage.js";

const dataSort = ["Farm Boxes", "Produce", "Bakery", "Dairy&Eggs"];
export const callbackStack = {};

export const getShopData = async function () {
  try {
    const data = await getSupabaseData("shop");
    const projectMap = new Map();

    data.forEach((item) => {
      const { project, category, subcategory } = item;

      if (!projectMap.has(project)) {
        projectMap.set(project, {
          project,
          categories: new Map(),
          keywords: new Set(),
        });
      }

      const projectObject = projectMap.get(project);

      if (!projectObject.categories.has(category)) {
        projectObject.categories.set(category, {
          category,
          subcategories: [],
        });
        projectObject.keywords.add(category);
      }

      const categoryObject = projectObject.categories.get(category);

      if (subcategory && !categoryObject.subcategories.includes(subcategory)) {
        categoryObject.subcategories.push(subcategory);
        projectObject.keywords.add(subcategory);
      }
    });

    dataSort.forEach((item) => {
      if (projectMap.has(item)) {
        const projectObject = projectMap.get(item);
        const categories = Array.from(projectObject.categories.values());
        const keywords = Array.from(projectObject.keywords);

        callbackStack[item] = {
          project: item,
          categories,
          keywords,
        };
      }
    });
    return callbackStack;
  } catch (err) {
    console.error(err);
  }
};

export const renderingPageData = async function (request, value) {
  try {
    const { error, data } = await supabase
      .from("shop")
      .select("*")
      .eq(request ? request : "", value ? value : "");

    if (error) {
      throw new Error(`💣 ${error.message}`);
    }
    if (data) {
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const keywordSearch = async function (tag) {
  try {
    const { data, error } = await supabase
      .from("shop")
      .select()
      .contains("keyword", [tag]);
    if (error) {
      throw new Error(`💣 ${error.message}`);
    }

    if (data) {
      const uniqueData = [];

      const uniqueTitles = new Set(
        data.map((item) => item.subcategory || item.category)
      );

      uniqueTitles.forEach((title) => {
        const internalDataCollection = [];
        let uniqueCategory, uniqueSubcategory;

        data.forEach((mapData) => {
          const currentTitle = mapData.subcategory || mapData.category;

          if (title === currentTitle) {
            uniqueCategory = mapData.category;
            uniqueSubcategory = mapData.subcategory;
            internalDataCollection.push(mapData);
          }
        });

        const sendData = {
          title: [uniqueCategory, uniqueSubcategory],
          dataCollection: internalDataCollection,
        };

        if (sendData.dataCollection.length > 0) {
          uniqueData.push(sendData);
        }
      });

      return uniqueData;
    }
  } catch (err) {
    console.error(err);
  }
};

export const requestProducer = async function (search) {
  try {
    let { data, error } = await supabase
      .from("supplier")
      .select("*")
      .eq("producer__name", search);

    if (error) {
      throw new Error(`💣💥 ${error.message}`);
    }
    if (data) {
      return data;
    }
  } catch (err) {
    console.error(err);
  }
};
