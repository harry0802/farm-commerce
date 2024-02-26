<template>
    <div v-if="productInfo" class="product-info__description mt-8">

        <div class="rich-text">
            <p v-for=" (text, i) in productInfo.descripttion " :key="i">{{ text.description }}</p>
            <!-- <ul>
                <li v-for=" (list, i) in paragraph " :key="i">{{ list }}</li>
            </ul> -->
        </div>

    </div>
</template>

<script setup>
import { inject } from "vue";

const productInfo = inject('productInfo')
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
