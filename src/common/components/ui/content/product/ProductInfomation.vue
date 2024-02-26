<template>
    <div class="prduct-info__info--wrapper pt-5">
        <ProductInfomationDetail :productInfo="productInfo" />
        <ProductInfomationBtnbar />
    </div>
</template>

<script setup>
import { inject } from "vue";
import ProductInfomationDetail from "../../../ui/content/product/ProductInfomationDetail.vue";
import ProductInfomationBtnbar from "../../../ui/content/product/ProductInfomationBtnbar.vue";
const productInfo = inject('productInfo');

</script>
