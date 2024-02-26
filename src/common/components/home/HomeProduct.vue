<template>
  <home-title class="text-white" :title="'農場快遞，你的口袋農場！'">
  </home-title>

  <base-section>
    <base-center>
      <home-product-item :title="'現在就買'"></home-product-item>
      <home-product-item :title="'現在就買'"></home-product-item>
      <home-product-item :title="'現在就買'"></home-product-item>
    </base-center>
  </base-section>

  <base-section>
    <base-center>
      <home-product-item :title="'現在就買'"> </home-product-item>
    </base-center>
  </base-section>
</template>

<script setup>
import HomeTitle from "../ui/title/HomeTitle.vue";
import BaseSection from "../ui/section/BaseSection.vue";
import BaseCenter from "../ui/content/base/BaseContent.vue";
import HomeProductItem from "../ui/product/HomeProductItem.vue";
</script>

<style></style>
