<template>
    <div class="info__details">
        <div class="name-and-producer  flex flex-col">
            <a src="#" class="name u-text-giant text-color-primary">{{ productInfo.name }}</a>
            <RouterLink class="producer mt-2 u-text-medium sm:u-text-large" :to="`/producers/${productInfo.producer}`"> {{
                productInfo.producer }}</RouterLink>
        </div>
        <div class="price-and-weight">
            <div class="price  u-text-small">{{ productInfo.price }}元</div>
            <div class="weight">{{ productInfo.weight }}</div>
        </div>
    </div>
</template>

<script setup>

import { defineProps } from "vue";
import { RouterLink } from "vue-router";
defineProps({
    productInfo: Object
})

</script>

<style scoped>
* {
    font-family: RiiT_F;
    @apply text-color-primary
}

.name {
    font-family: SentyGoldSand;
}

a.producer {
    color: #7F7F7F;
    margin-top: .5rem;
}

.name-and-producer>a:not(:first-of-type),
.price-and-weight>div {
    margin-top: .5rem;
}
</style>
