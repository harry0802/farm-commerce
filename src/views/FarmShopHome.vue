<template>

    <div class="category__page w-full px-4">
        <div class="category__container m-auto">
            <ShopHomeNavSide v-model:observerCurrentID="observerCurrentID" :data="personalStyle" />
            <router-view />
            <slot name="sidebar" />
        </div>
    </div>
</template>
<script setup>

import ShopHomeNavSide from "@/common/components/shop/home/ShopHomeNavSide.vue";
import { provide, toRefs, watch, ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useProduct } from "@/store/modules/product/useProduct.js";
import { useOrderStore } from "@/store/modules/order/index.js";
import { useRoute } from "vue-router";


const store = useProduct()
const route = useRoute()
const { observerCurrentID } = storeToRefs(store)
const { personalStyle } = toRefs(useOrderStore())
const renderPage = ref([]);


const findRenderPage = function (routeId) {
    const { categories } = personalStyle.value;
    if (routeId === 'foryou') return renderPage.value = categories;
    renderPage.value = categories.filter((i) => routeId === i.path);
    store.setBbserverCurrentID(routeId)
};

watch(() => route.params.id, (newId) => {
    findRenderPage(newId);
});

onMounted(() => {
    findRenderPage(route.params.id);

});

provide('ProductPageSection', { renderPage, setBbserverCurrentID: store.setBbserverCurrentID });

</script>
<style scoped>
.category__container {
    min-height: 300px;
    max-width: 1350px;
}

@media only screen and (min-width: 950px) {
    .category__container {
        display: grid;
        grid-template-columns: 200px 1fr;
        gap: 2rem;
    }
}
</style>
