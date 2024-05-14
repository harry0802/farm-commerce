<template>
  <!-- 商品內容，與數量 -->
  <div class="oder__item ">
    <ul class="item__list p-4" v-for="products  in productCart" :key="products.product_id">
      <li class="item__list--photo w-full max-w-[90px] h-[90px] rounded-md overflow-hidden ">
        <img class="w-full  h-full object-cover" :src="products.image_url" alt="" />
      </li>
      <li class="item__list--info">
        <div class="info__detail">
          <a class="u-text-omit-2" href="#">{{ products.product_name }}</a>
          <a class="u-text-omit-1" href="#">{{ products.supplier_name }}</a>
          <span class="mt-2">{{ products.weight }}</span>
        </div>
      </li>
      <product-edit-control v-bind="products" />
    </ul>
  </div>
</template>

<script setup>
import ProductEditControl from "../../../cartsidebar/cartProdut/productItem/ProductEditControl.vue";
import { inject } from "vue";
const { productCart } = inject('orderStore')




</script>

<style scoped>
* {
  font-family: GalmuriMono9;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 2px;
}

.oder__item {
  position: relative;
  border-radius: 2px;
  box-shadow: 0rem 0px 4px 0px #efefef;
}

.item__list {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--xs-grid-colm-gap);
  align-items: flex-start;
}

img {
  max-width: 90px
    /* aspect-ratio: 21/21; */
}

.info__detail {
  display: flex;
  flex-direction: column;
}
</style>
