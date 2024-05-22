<template>
    <button v-if="productInfo.Subscribe"
        :class="{ 'bg-b-color-green-light': isSubscribe, 'border-b-color-green-light': isSubscribe }"
        class="u-subscribe-btn w-full min-h-14 sm:max-w-[276px] mr:max-w-[180px]  group">
        <p>定期配送</p>
        <Icon :class="{ 'group-hover:-rotate-180': !isSubscribe, 'text-xl': isSubscribe, }"
            :icon="isSubscribe ? 'pixelarticons:frame-check' : 'entypo:cycle'" />
    </button>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { inject, } from "vue";
const { isSubscribe } = inject('tdOrderInfo')
const productInfo = inject('productInfo')
</script>

<style scoped>
.u-pirmary-button {
    background: transparent;
    max-width: 100%;
    border: .8px solid;
    @apply text-color-primary-light border-color-grey-dark gap-2
}

.u-pirmary-button:active {
    transform: scale(0.99) translateX(1px);
}

.iconify--entypo {
    transition: transform .5s;
}

.iconify--entypo {
    stroke-width: 1px;
    stroke: currentColor;
}
</style>
