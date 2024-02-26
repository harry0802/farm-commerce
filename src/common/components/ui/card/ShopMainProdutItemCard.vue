<template>
  <div class="product-item__wrapper p-0.5 pb-10 ">
    <div class="product-item__container p-1.5 flex flex-col h-full ">
      <div class="product-item__photo">
        <RouterLink class="photo__links" :to="`/product/${data.product_name + '-' + data.product_code}`">
          <img :src=data.image_url alt="" />
        </RouterLink>
      </div>
      <shop-product-itemText :supplier="data.supplier_name" :pdinfo="data.product_name" :weight="data.weight"
        :price="data.price" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, } from "vue";
import ShopProductItemText from "../../ui/text/ShopProductItemText.vue";
import { RouterLink } from "vue-router";

defineProps({
  data: Object
});




</script>

<style scoped>
@media screen and (max-width: 350px) {

  .product-item__wrapper {
    width: 183px;
    height: 340px;
  }

}

@media screen and (min-width: 350px) {

  .product-item__wrapper {
    width: 100%;
    height: 100%;
  }

}



@media only screen and (min-width: 599px) {
  .product-item__wrapper {
    padding: 2px;

  }

  .product-item__container {
    padding: .5rem;
  }

}
</style>
