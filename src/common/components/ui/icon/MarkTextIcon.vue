<template>
    <div class="mark__text  absolute h-8 leading-8 px-4 rounded-full " :class="saleStyle">
        {{ saleText }}
    </div>
</template>

<script setup>
import { computed } from "vue";


const props = defineProps({
    SALE: Object
})
const saleText = computed(() => props.SALE.sale === 'onsale' ? '特惠 !' : props.SALE.sale)
const saleStyle = computed(() => props.SALE.sale === 'onsale' ? 'onsale' : 'promotion')




</script>

<style scoped>
* {
    font-family: RiiT_F;
}

/* ON SALE */
.onsale {
    @apply bg-color-eva-dark-yellow text-color-eva-dark-green
}

.promotion {
    @apply bg-white
}
</style>
