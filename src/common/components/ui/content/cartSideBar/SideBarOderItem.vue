<template>
  <!-- 商品內容，與數量 -->
  <div class="order__item  overflow-hidden">
    <ul class="item__list p-4 relative " v-if="productCart && productCart.length > 0" v-for="product in productCart">

      <li class=" imgArea item__list--photo w-[90px] h-[90px] rounded-md overflow-hidden">
        <img @load="loading = true" loading="lazy" :class="{ 'opacity-100': loading }"
          class=" w-full h-full object-cover img__load" :src="product.image_url" alt="" />
      </li>
      <li class="infoArea item__list--info">
        <div class="info__detail">
          <router-link class="btn__linkUnderline--animate line-clamp-2"
            :to="`/product/${product.product_name}-${product.product_code}`">
            {{ product.product_name }}
          </router-link>
          <router-link class="btn__linkUnderline--animate text-color-eva-dark-yellow"
            :to="`/producers/${product.supplier_name}`">
            {{ product.supplier_name }}
          </router-link>
          <span class="mt-2">{{ product.weight }}</span>

        </div>
      </li>

      <product-edit-control class="editArea " v-bind="product" :send-data="product" />
    </ul>
  </div>
</template>


<script setup>
import ProductEditControl from "../../../cartsidebar/cartProdut/productItem/ProductEditControl.vue";
import { inject, ref } from "vue";
const { productCart } = inject('orderStore')
const loading = ref(false)
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
  grid-template-areas: "img  info  edit";
  ;

  grid-template-columns: auto 1fr;
  grid-template-areas:
    "img  info"
    "edit edit"
  ;
  gap: var(--xs-grid-colm-gap);
  row-gap: 0;
  align-items: flex-start;
}

.imgArea {
  grid-area: img;

}

.infoArea {
  grid-area: info;
  @apply max-[360px]:text-end;
}

.editArea {
  grid-area: edit;

  @apply max-[360px]:justify-self-end max-[360px]:col-start-2
}




img {
  max-width: 90px
}

.info__detail {
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width:360px) {
  .item__list {
    grid-template-columns: auto 1fr auto;
    grid-template-areas: "img  info  edit";
    ;
  }

}
</style>
