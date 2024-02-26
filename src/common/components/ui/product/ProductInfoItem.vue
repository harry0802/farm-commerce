<template>
    <div v-if="productInfo" class="prduct-info__wrapper ">
        <EmblaDraggableProductPic :imgpath="productInfo.photoPath" />
        <ProductInfomation />
    </div>
</template>

<script setup>

import EmblaDraggableProductPic from "../../ui/content/product/EmblaDraggableProductPic.vue";
import ProductInfomation from "../../ui/content/product/ProductInfomation.vue";

import { inject } from 'vue'
const productInfo = inject('productInfo')


</script>
<style scoped>
@media only screen and (min-width:950px) {
    .prduct-info__wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;

    }

}
</style>

