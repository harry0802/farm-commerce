<template>
  <!-- 商品內容，與數量 -->
  <div class="order__item">
    <ul class="item__list p-4" v-if="productCart && productCart.length > 0" v-for="product in productCart">

      <li class="item__list--photo w-[90px] h-[90px] rounded-md overflow-hidden">
        <img class="w-full h-full object-cover" :src="product.image_url" alt="" />
      </li>
      <li class="item__list--info">
        <div class="info__detail">
          <router-link class="btn__info--link line-clamp-2"
            :to="`/product/${product.product_name}-${product.product_code}`">
            {{ product.product_name }}
          </router-link>
          <router-link class="btn__info--link text-color-eva-dark-yellow" :to="`/producers/${product.supplier_name}`">
            {{ product.supplier_name }}
          </router-link>
          <span class="mt-2">{{ product.weight }}</span>
        </div>
      </li>
      <product-edit-control v-bind="product" />
    </ul>
  </div>
</template>


<script setup>
import ProductEditControl from "../../../cartsidebar/cartProdut/productItem/ProductEditControl.vue";
import { inject, } from "vue";
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

.btn__info--link {
  text-decoration: transparent;
  @apply text-sm leading-6 underline underline-offset-4 hover:decoration-white transition-colors duration-300
}
</style>
