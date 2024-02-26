<template>
    <main id="main">
        <div v-if="!loading">
            <ProductInfo />
            <ProductSupplier />
        </div>
        <slot name="sidebar"></slot>
    </main>
</template>

<script setup>
import { provide, onMounted, ref, watch } from "vue";
import { useRoute } from 'vue-router'

import ProductInfo from '@/common/components/product/ProductInfo.vue'
import ProductSupplier from '@/common/components/product/ProductSupplier.vue'
import { useProduct } from "@/store/modules/product/useProduct.js";

import { storeToRefs } from 'pinia'
const poduct = useProduct()
const route = useRoute()
const loading = ref(true)

const {
    productInfo,
    productPageBreadcrumbs,
    productInfoPageData,
    productPageNavBtnBar,
} = storeToRefs(poduct);


const getProductOnlyNumber = (id) => id.slice(-4)

const provideDataGroup = function () {
    provide('productInfo', productInfo.value)
    provide('productPageBreadcrumbs', productPageBreadcrumbs.value)
    provide('ProdictSupplier', productInfoPageData.value)
    provide('productPageNavBtnBar', productPageNavBtnBar.value)

}
watch(route.params.id, (newid) => {
    if (route.params.id !== newid) {
        const code = getProductOnlyNumber(newid)
        poduct.setProducPageData(code)
        loading.value = false

    }

})
onMounted(() => {
    const code = getProductOnlyNumber(route.params.id)
    poduct.setProducPageData(code)
    provideDataGroup()
    loading.value = false

})
</script>

<style scoped></style>

