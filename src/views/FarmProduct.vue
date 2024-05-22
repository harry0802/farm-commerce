<template>
    <main id="main">
        <div v-if="loading">
            <ProductInfo />
            <ProductSupplier />
        </div>
        <LoadingDelicious v-else />
        <slot name="sidebar" />
    </main>
</template>

<script setup>
import { provide, onMounted, ref, watch, computed } from "vue";
import { useRoute } from 'vue-router'
import ProductInfo from '@/common/components/product/ProductInfo.vue'
import ProductSupplier from '@/common/components/product/ProductSupplier.vue'
import useCartStore from "@/store/modules/cart/cartStore.js";
import { useProduct } from "@/store/modules/product/useProduct.js";
import { storeToRefs } from 'pinia'
import { useOrderStore } from "@/store/modules/order/index.js";

import LoadingDelicious from "@/common/components/ui/animat/LoadingDelicious.vue";
const poduct = useProduct()
const {
    productInfo,
    productPageBreadcrumbs,
    productInfoPageData,
    productPageNavBtnBar,
} = storeToRefs(poduct);

const {
    addSubscribe,
    handleOrderAdd,
    getOrderConstruction
} = useOrderStore()
const { myorder } = storeToRefs(useOrderStore())

const { selectionDay } = storeToRefs(useCartStore());
const route = useRoute()
const loading = ref(true)
const product = computed(() => productInfo.value)
const getProductOnlyNumber = (id) => id.slice(-4)




watch(route.params.id, (newid) => {
    if (route.params.id !== newid) {
        const code = getProductOnlyNumber(newid)
        console.log(code);
        poduct.setProducPageData(code)
        loading.value = false
    }

})

const getOrderSubscription = ref(null)
const getOderFrequency = ref(null)
const isSubscribe = ref(null)

watch([product, selectionDay, myorder], ([newpd, newsDay]) => {
    if (newpd.id === '' || newsDay.orderDate == null) return
    const tdOrder = newsDay.orderDate
    const {
        findingSubscription,
        checkingIsSubscribe,
        findingTdOder,
    } = getOrderConstruction(newpd)
    getOrderSubscription.value = findingSubscription(tdOrder)
    getOderFrequency.value = findingTdOder(tdOrder)
    isSubscribe.value = checkingIsSubscribe(tdOrder)
}, { deep: true })




const provideDataGroup = function () {
    provide('productInfo', productInfo.value)
    provide('productPageBreadcrumbs', productPageBreadcrumbs.value)
    provide('ProdictSupplier', productInfoPageData.value)
    provide('productPageNavBtnBar', productPageNavBtnBar.value)
    provide('getOrderSubscription', getOrderSubscription,)
    provide('tdOrderInfo', { isSubscribe, getOderFrequency })
    provide('sendSubScript', { addSubscribe })
    provide('handleOrderAdd', handleOrderAdd)
}


onMounted(() => {
    const code = getProductOnlyNumber(route.params.id)
    poduct.setProducPageData(code)

    provideDataGroup()
    setTimeout(() => {
        loading.value = false
    }, 1000)


})


</script>

<style scoped></style>
