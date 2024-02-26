<template>
    <section v-for=" item in renderPage" :key="item.product_id">
        <h1 class="category__nav-title u-text-large ml-4 mb-2">
            {{ item.subcategory ? item.subcategory : item.category }}
        </h1>
        <div class="category__product  ">
            <shop-main-produt-item-card :item__photo="item.image_url" :supplier="item.supplier_name"
                :pdinfo="item.product_name" :weight="item.weight" :price="item.price" />
        </div>
    </section>
</template>

<script setup>

import { inject, ref, } from "vue";
import ShopMainProdutItemCard from "../../ui/card/ShopMainProdutItemCard.vue";
const { renderPage } = inject('ProductPageSection')

const pageTitile = ref('')
pageTitile











</script>

<style scoped></style>
