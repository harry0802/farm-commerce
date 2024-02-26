<template>
  <div class="product-item__details details__content flex flex-col h-full">
    <div class="details__texts flex flex-col grow h-full">
      <div class="texts__supplier-and-pdinfo flex flex-col ">
        <a href="#" class="supplier-and-pdinfo--supplier">{{ supplier }}</a>
        <a href="#" class="supplier-and-pdinfo--pdinfo"> {{ pdinfo }}</a>
      </div>
      <div class="texts__price-and-weight flex justify-between pt-1.5 pb-2.5 mt-auto ">
        <p class="price-and-weight--weight">{{ weight }}</p>
        <p class="price-and-weight--price font-bold">{{ price }} 元</p>
      </div>
    </div>
    <!-- 切割組件 多種按鈕 -->
    <shop-product-item-buttoon />
  </div>
</template>

<script setup>
import ShopProductItemButtoon from "../../ui/button/ShopProductItemButtoon.vue";
import { defineProps } from "vue";
defineProps({
  supplier: String,
  pdinfo: String,
  weight: String,
  price: Number
})

</script>






<style scoped>
.roduct-item__details {
  height: 100%;
}

.supplier-and-pdinfo--supplier,
.supplier-and-pdinfo--pdinfo {
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.supplier-and-pdinfo--supplier {
  -webkit-line-clamp: 1;
}

.supplier-and-pdinfo--pdinfo {
  font-size: 16px;
  font-weight: 100;
  font-family: cjkfonts;
  -webkit-line-clamp: 2;
}

.price-and-weight--weight {
  font-size: 11px;
}

*[class*="texts"] {
  font-size: 14px;
}
</style>
