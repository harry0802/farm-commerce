<template>
    <div v-if="productInfo" class="product-info__description mt-8">

        <div class="rich-text w-[80%] ">
            <p class=" mt-3 tracking-widest" v-for=" (text, i) in richText " :key="i">{{ text }}</p>
        </div>

    </div>
</template>

<script setup>
import { inject, computed } from "vue";

const productInfo = inject('productInfo')
const richText = computed(() => {
    const { descripttion } = productInfo.value
    const [text] = descripttion
    return text

})
</script>

<style scoped>
p {
    font-family: SentyGoldSand;
    font-size: 18px;
    /* letter-spacing: 2px; */
    line-height: 1.8;
    /* font-weight: 900; */
    @apply text-color-primary
}
</style>
