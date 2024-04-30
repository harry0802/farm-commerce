<template>
    <section v-for="( pageitem, i) in renderPage  " :key="i">
        <div ref="target" class="category__id" :id="!!pageitem.title[1] ? pageitem.title[1] : pageitem.title[0]" />
        <ProductPageTitle :titles="pageitem.title" />
        <div class="category__product ">
            <shop-main-produt-item-card v-for=" item in pageitem.dataCollection" :key="item.product_id" :data="item" />
        </div>
    </section>
</template>

<script setup>
import { inject, ref } from "vue";
import ShopMainProdutItemCard from "../../ui/card/ShopMainProdutItemCard.vue";
import ProductPageTitle from "../../ui/title/ProductPageTitle.vue";
import { tryOnMounted, useIntersectionObserver } from '@vueuse/core'

const { renderPage, setBbserverCurrentID } = inject('ProductPageSection')





const target = ref(null)
tryOnMounted(() => {
    useIntersectionObserver(target, (api) => {
        const [IntersectionObserverEntry] = api
        if (IntersectionObserverEntry.isIntersecting) {
            const currentId = IntersectionObserverEntry.target.id
            setBbserverCurrentID(currentId)
        }
    },)

})

</script>

<style scoped>
.category__nav-title {
    font-family: cjkfonts;
    font-weight: bold;
}
</style>
