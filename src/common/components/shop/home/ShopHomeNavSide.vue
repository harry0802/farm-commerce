<template>
    <shop-side-card>
      <template #title>
        <h1  class="pb-2 u-text-medium border-b border-color-grey-light">
          <RouterLink :to="`/shop/home/foryou`">
            {{ data.project }}
          </RouterLink>
        </h1>
      </template>
      <template #navlist>
    <div class="category__nav--container pt-6 overflow-auto">
     <ul class="category__nav--list category__nav--grid">
      <ShopHomeListItems v-for=" item, i in data.categories" 
        v-bind="item"
        :productItem="item.category"
        :currentIndex="i" 
         />
      </ul>
      </div>
      </template>
    </shop-side-card>
  </template>
  
  
  <script setup>
  import { defineProps, inject } from "vue";
  import { RouterLink } from "vue-router";
  import ShopSideCard from "@/common/components/ui/card/ShopSideCard.vue";
  import ShopHomeListItems from "@/common/components/ui/product/ShopHomeListItems.vue";

  

  defineProps({
    data: Object
  });
  
  
  
  
  
  
  
  // const prodcutData = computed(() =>
  //   localDataKey(props.data)
  // )
  
  
  // console.log(prodcutData.value);
  
  
  
  
  
  
  
  </script>
  
  <style scoped></style>
  