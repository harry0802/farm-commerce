<template>
  <main id="main" class="category__content py-6 place-content-center">
    <!-- <shop-produt-description v-if="!productDescription" /> -->
    <ProductPageSection />
    <!-- <ProductPageSection /> -->
  </main>
</template>


<script setup>
import { defineProps } from "vue";
// import ShopProdutDescription from "../ui/text/ShopProdutDescription.vue";
import ProductPageSection from "../ui/section/ProductPageSection.vue";
// import ProductOverviewPageSection from '../ui/section/ProductOverviewPageSection.vue'

defineProps({
  overview: Boolean
});


</script>

<style scoped>
.category__content {
  width: 100%;
  height: 100%;
}
</style>
