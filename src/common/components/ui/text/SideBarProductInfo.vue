<template>
  <li class="item__list--info">
    <div class="info__detail">
      <a :href="productPage">{{ productName }}</a>
      <a :href="supplierPage">{{ supplier }}</a>
      <span>{{ quantity }}g</span>
    </div>
  </li>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  productName: {
    type: String,
    default: "商品名稱",
  },
  productPage: {
    type: String,
    default: "#",
  },

  supplier: {
    type: String,
    default: "供應商",
  },
  supplierPage: {
    type: String,
    default: "#",
  },
  weight: {
    type: Number,
    default: 0,
  },
});

defineProps;
</script>

<style></style>
