<template>
    <main id="main">
        <ProducerCard class="bg-b-color-browm">
            <template #producerInfo>
                <div class="text-color-primary u-text-giant w-full text-center  my-8 ">
                    尋找 : {{ getPageTitle }}
                </div>
            </template>
            <template #producerItem>
                <LoadingCatOverlayer v-if="loading" />

                <div v-else class="w-full">
                    <div class="category__product" v-if="productData">
                        <ShopMainProdutItemCard v-for="product, i in productData" :key="i" :data="product" />
                    </div>
                    <div v-fade-in v-else class=" w-full text-center text-color-primary">
                        <figure class="flex flex-col gap-y-10  overflow-hidden">
                            <figcaption class="font-[RiiPopkkR] u-text-large"><span class="u-text-giant">OPPS</span>
                                目前沒有相關產品 , 不過別擔心 !
                                或許你可以來我們市集找找
                            </figcaption>
                            <img loading="lazy" class="rounded-3xl w-full h-full object-cover"
                                src="@/assets/imgs/homePage/farmmarkets.jpg" alt="">
                        </figure>
                    </div>
                </div>
            </template>
        </ProducerCard>
        <slot name="sidebar"></slot>
    </main>
</template>

<script setup>
import ProducerCard from "@/common/components/ui/card/ProducerCard.vue";
import ShopMainProdutItemCard from "@/common/components/ui/card/ShopMainProdutItemCard.vue";
import { getSearchData } from "@/Plugins/SupabasePruductsData.js";
import { watchEffect, computed, ref } from "vue";
import { useRoute } from "vue-router";
import LoadingCatOverlayer from "@/common/components/ui/animat/LoadingCat2.vue";
const route = useRoute()
const theFind = ref(false)
const productData = ref(null)
const loading = ref(false)

const getQuery = computed(() => route.query.search.replaceAll('+', ' ').split(' '))
const getPageTitle = computed(() => route.query.search.replaceAll('+', ' , '))

const setDataPage = async function () {
    try {
        loading.value = true
        const response = await getSearchData(getQuery.value)
        if (response.length === 0) {
            productData.value = null
            return theFind.value = false
        }
        productData.value = response
        theFind.value = true
    } finally {
        loading.value = false
    }
}
watchEffect(() => {
    setDataPage()
})


</script>

<style scoped></style>
