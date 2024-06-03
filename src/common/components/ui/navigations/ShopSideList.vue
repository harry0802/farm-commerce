<template>
  <div class="category__nav--container pt-6 overflow-auto">
    <ul class="category__nav--list category__nav--grid">
      <shop-nav-list-items v-for=" item, i in data" :key="i" :productItem="item.category"
        :isSubItem="item.subcategories" :currentIndex="i" />
    </ul>
  </div>
</template>

<script setup>
import ShopNavListItems from "../../ui/product/ShopNavListItems.vue";
defineProps({
  data: Array,
  categoryTitle: String
});



</script>

<style scoped></style>
