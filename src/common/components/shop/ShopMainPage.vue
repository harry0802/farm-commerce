<template>
  <main id="main" class="category__content py-6 place-content-center">
    <ProductPageSection />
  </main>
</template>

<script setup>
import ProductPageSection from "../ui/section/ProductPageSection.vue";
defineProps({
  overview: Boolean,
});
</script>

<style scoped>
.category__content {
  width: 100%;
  height: 100%;
}
</style>
