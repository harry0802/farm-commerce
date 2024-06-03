<template>
    <BaseMainPage :loading="loading">
        <template #page>
            <ProductInfo />
            <ProductSupplier />
        </template>

        <template #sidebar>
            <slot name="sidebar" />
        </template>
    </BaseMainPage>

</template>

<script setup>
import { provide, onMounted, ref, watch, watchEffect } from "vue";
import { useRoute } from 'vue-router'
import ProductInfo from '@/common/components/product/ProductInfo.vue'
import ProductSupplier from '@/common/components/product/ProductSupplier.vue'
import { useProduct } from "@/store/modules/product/useProduct.js";
import { storeToRefs } from 'pinia'
import { useOrderStore } from "@/store/modules/order/index.js";
import BaseMainPage from "@/common/components/ui/card/BaseMainPage.vue";

const poduct = useProduct()
const {
    productInfo,
    productPageBreadcrumbs,
    productInfoPageData,
    productPageNavBtnBar,
} = storeToRefs(useProduct());

const {
    addSubscribe,
    handleOrderAdd,
    getOrderConstruction
} = useOrderStore()

const {
    handleParams,
    sendProvide
} = getOrderConstruction(productInfo.value)


const route = useRoute()
const loading = ref(true)
const getProductOnlyNumber = (id) => id.slice(-4)






const watchingProductInfo = ref(productInfo)
const watchingProductPageBreadcrumbs = ref(productPageBreadcrumbs)
const watchingProductInfoPageData = ref(productInfoPageData)
const watchingProductPageNavBtnBar = ref(productPageNavBtnBar)


watchEffect(() => {
    watchingProductInfo.value = productInfo.value
    watchingProductPageBreadcrumbs.value = productPageBreadcrumbs.value
    watchingProductInfoPageData.value = productInfoPageData.value
    watchingProductPageNavBtnBar.value = productPageNavBtnBar.value
    handleParams(productInfo.value)
})


provide('productInfo', watchingProductInfo)
provide('productItem', watchingProductInfo.value)
provide('productPageBreadcrumbs', watchingProductPageBreadcrumbs.value)
provide('ProdictSupplier', watchingProductInfoPageData)
provide('productPageNavBtnBar', watchingProductPageNavBtnBar.value)
provide('sendSubScript', { addSubscribe })
provide('handleOrderAdd', handleOrderAdd)

sendProvide()


watch(route, (newid,) => {
    loading.value = true
    const code = getProductOnlyNumber(newid.params.id)
    poduct.setProducPageData(code)
    if (newid.params.id) {
        setTimeout(() => {
            loading.value = false
        }, 1000)
    }
})

onMounted(() => {
    const code = getProductOnlyNumber(route.params.id)
    poduct.setProducPageData(code)
})




</script>

<style scoped>
.fade-enter-active {
    transition: opacity 0.3s ease-in-out;
    transition-delay: .3s;

}

.fade-leave-active {
    transition: opacity 0.4s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
