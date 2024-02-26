import {
  requestProducer,
  renderingPageData,
} from "@/Plugins/SupabasePruductsData.js";

export default {
  setCategoryIndex(i) {
    this.observerCurrentID = "";
    this.categoryIndex = i;
  },
  setShopUrlId(id) {
    this.shopUrlId = id;
  },
  setCheckpoint(key) {
    this.checkpoint = key;
  },

  setBbserverCurrentID(id) {
    this.observerCurrentID = id;
  },

  async setProducPageData(code) {
    try {
      this.initProducPageData();
      const [pageData] = await renderingPageData("product_code", code);
      const supplierData = await requestProducer(pageData.supplier_name);

      if (!pageData && supplierData.length === 0) {
        throw new Error("💥 Supplier not founding");
      }
      const { productInfo, productInfoPageData } = this;

      this.setProductPageBreadcrumbs(pageData);
      this.setProductSupplier(productInfoPageData, pageData, supplierData);
      this.setProductInfo(productInfo, pageData);
      this.initproductPageNavBtnBar(
        pageData.Storage_tips,
        pageData.Ingredients_and_Nutrition
      );
    } catch (err) {
      console.error(err);
    }
  },

  setProductSupplier(page, data, producer) {
    const productSupplier = page.productSupplier;
    page.productStorage = data.Storage_tips;
    page.productIngredients = data.Ingredients_and_Nutrition;
    for (const key in producer) {
      if (Object.hasOwnProperty.call(producer, key)) {
        const currentProducer = producer[key];
        productSupplier.id = currentProducer.id;
        productSupplier.supplierimg = currentProducer.producer__imge;
        productSupplier.supplierName = currentProducer.producer__name;
        productSupplier.supplierLocation = currentProducer.producer__location;
        productSupplier.supplierIntroduce =
          currentProducer.producer__description;
      }
    }
  },
  setProductInfo(page, data) {
    const {
      product_name,
      supplier_name,
      weight,
      product_description,
      image_url,
      product_id,
      price,
    } = data;

    Object.assign(page, {
      name: product_name,
      producer: supplier_name,
      weight,
      descripttion: product_description,
      photoPath: image_url,
      id: product_id,
      price,
    });
  },
  initProducPageData() {
    this.productInfoPageData = {
      productStorage: null,
      productIngredients: null,
      productSupplier: {
        supplierimg: null,
        supplierName: "",
        supplierLocation: "",
        supplierIntroduce: "",
      },
    };
    this.productInfo = {
      id: "",
      name: "",
      photoPath: "",
      producer: "",
      weight: 0,
      price: 0,
      descripttion: "",
    };
    this.productPageBreadcrumbs = [{ label: "首頁", link: "/home" }];
  },
  initproductPageNavBtnBar(storage, ingredients) {
    const PageNavBtnBar = this.productPageNavBtnBar;
    const productStorageLength = storage ? storage.length : 0;
    const productIngredientsLength = ingredients ? ingredients.length : 0;
    const calcBoolean = (length) => length > 0;
    PageNavBtnBar.storagetips.state = calcBoolean(productStorageLength);
    PageNavBtnBar.ingredicents.state = calcBoolean(productIngredientsLength);
  },

  setProductPageBreadcrumbs(data) {
    const conditionData = [data].reduce((_, item) => {
      const findingCategory = item.category ? item.category : null;
      const subCategory = item.subcategory ? item.subcategory : null;
      return [findingCategory, subCategory];
    }, []);

    conditionData.forEach((item, i) => {
      if (item) {
        this.productPageBreadcrumbs[i + 1] = {
          label: item,
          link: `/shop/${item}`,
        };
      }
    });
  },
};
