<template>
    <li class="">
        <RouterLink class="item--link" :class="{ active: store.observerCurrentID === path }"
            :exact-active-class="'active'" :to="`/shop/home/${path}`">
            {{
                productItem
            }}
        </RouterLink>
    </li>
</template>
<script setup>
import { defineProps, } from "vue";
import { useProduct } from '@/store/modules/product/useProduct.js'
const store = useProduct()
const props = defineProps({
    productItem: String,
    isActive: Boolean,
    currentIndex: Number,
    path: String,
});
</script>

<style scoped>
a {
    font-family: SentyGoldSand;
}

.item--link {
    @apply text-color-primary-light pb-1
}

.active.item--link {
    font-weight: bold;
    @apply text-color-primary
}
</style>