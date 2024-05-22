<template>
    <ProducerCard>
        <template #breadcrumbs>
            <div class="back___container p-1 pb-2 mb-2">
                <a class="flex items-center" @click="router.go(-1)">
                    <Icon class="mr-4" icon="pixelarticons:chevron-left" />
                    Back
                </a>
            </div>
        </template>

        <template #producerInfo>
            <div class="producer__container  grid gap-6 ">
                <ProducerPhoto :photoPath="currentProducer.producer__imge" />
                <ProducerInfo />
            </div>
        </template>

        <template #producerItem>
            <div class="category__product">
                <shop-main-produt-item-card v-for=" product, i in currentProduct " :key=i :data="product" />
            </div>
        </template>

    </ProducerCard>
</template>

<script setup>
import { ref, onMounted, provide } from "vue";
import { useRouter } from 'vue-router';
import { useRouteParams } from '@vueuse/router'
import { requestProducer, renderingPageData } from "@/Plugins/SupabasePruductsData.js";
import { Icon } from '@iconify/vue';
import ProducerCard from '../ui/card/ProducerCard.vue'
import ProducerInfo from "../ui/content/producer/ProducerInfo.vue";
import ProducerPhoto from '../ui/content/producer/ProducerPhoto.vue'
import ShopMainProdutItemCard from "../ui/card/ShopMainProdutItemCard.vue";
import { promise } from "zod";

const router = useRouter();
const id = useRouteParams('id')
const isloading = ref(true)
const currentProducer = ref([])
const currentProduct = ref([])


provide('producerInfo', currentProducer)






onMounted(async () => {
    const [[data], product] = await Promise.all([
        requestProducer(id.value),
        renderingPageData('supplier_name', id.value)
    ])
    currentProduct.value = product
    currentProducer.value = data

})


</script>

<style scoped>
@media only screen and (min-width: 950px) {
    .producer__container {
        grid-template-columns: 5fr 7fr;
        gap: 40px;
    }

}
</style>
