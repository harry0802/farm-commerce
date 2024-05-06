<template>
  <div class="category__page w-full px-4">
    <div class="category__container m-auto">
      <shop-nav-side v-if="navigator" :data="navigator" />
      <shop-main-page v-if="renderPage" :overview="overview" />
      <slot name="sidebar" />
    </div>
  </div>
</template>

<script setup>

import { useRoute } from "vue-router";
import ShopNavSide from "../common/components/shop/ShopNavSide.vue";
import ShopMainPage from "../common/components/shop/ShopMainPage.vue";
import { useProduct } from "@/store/modules/product/useProduct.js";
import { initData } from '@/Plugins/Initialization.js'
import { tryOnMounted } from "@vueuse/core";
import { ref, watch, provide, } from "vue";
import { storeToRefs } from "pinia";
import { getShopData } from "@/Plugins/SupabasePruductsData.js";


const route = useRoute()
const store = useProduct()
const { setShopUrlId, setCheckpoint, setBbserverCurrentID } = store
const { observerCurrentID } = storeToRefs(store)
const urlId = ref(route.params.id)
const navigator = ref(null)
const renderPage = ref(null)
const overview = ref(false)
const productData = ref(null)


const init = async function (urlId) {
  const init = await initData(productData.value, urlId)
  navigator.value = init.currentData
  setCheckpoint(navigator.value.keywords)
  renderPage.value = init.pageData
  overview.value = navigator.value.project === urlId
}
provide('ProductPageSection', { renderPage, setBbserverCurrentID: setBbserverCurrentID })
provide('observerCurrentID', observerCurrentID)


watch(() => route.params.id, async (newId, oldId) => {
  if (newId !== oldId) {
    urlId.value = newId
    setShopUrlId(newId)
    init(newId)
  }
})



tryOnMounted(() => {
  (async () => {
    productData.value = await getShopData()
    setShopUrlId(urlId.value)
    init(urlId.value)
  })()
})


</script>

<style scoped>
.category__container {
  min-height: 300px;
  max-width: 1350px;
}

@media only screen and (min-width: 950px) {
  .category__container {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 2rem;
  }
}
</style>
