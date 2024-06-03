<template>
    <div class="grid-line">
        <div class="col-span-full sm:col-span-6 lg:col-span-4 flex" v-for="product, i in displayedProducts" :key="i">
            <figure class="flex gap-x-4 ">
                <div class="max-w-11 max-h-11 aspect-square border border-color-grey-light rounded-md overflow-hidden">
                    <img @load="setIsLoad" loading="lazy" :class="{ isLoading: isLoad && i < 3 }"
                        class="isLoaded w-full h-full object-cover " :src="product.image_url"
                        :alt="product.product_name">
                </div>
                <figcaption class="flex flex-col  gap-y-1 text-color-primary">
                    <span class="font-[Macacjkfonts] font-semibold tracking-wider ">{{ product.product_name }}</span>
                    <span class="font-[Macacjkfonts]  tracking-wider">數量 : {{ product.quantity }}</span>
                </figcaption>
            </figure>
        </div>
    </div>
    <button v-if="products.length > 3 && !showMore" class="mt-3.5 text-color-primary-light underline "
        @click="setShowMore">顯示更多</button>


</template>

<script setup>
import { ref, computed, nextTick } from "vue";
const props = defineProps({
    products: {
        type: Object,
    }
})



const showMore = ref(false)
const isLoad = ref(false)
const displayedProducts = computed(() => showMore.value ? props.products : props.products.slice(0, 3));

const setIsLoad = () => isLoad.value = true

const setShowMore = () => {
    showMore.value = true
    nextTick(() => document.querySelectorAll('.isLoaded').forEach((e) => (e.classList.add('isLoading'))))
}

</script>

<style scoped>
.isLoaded {
    opacity: 0;
}

.isLoading {
    opacity: 1;
    transition: opacity .7s ease-in-out;
}
</style>
