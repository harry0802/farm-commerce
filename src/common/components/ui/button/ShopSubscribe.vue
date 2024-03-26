<template>
    <button
        class=" group flex items-center u-pirmary-button  transition-colors duration-300  hover:bg-b-color-green-light">
        定期配送
        <Icon class=" group-hover:-rotate-180" icon="entypo:cycle" />
    </button>
</template>

<script setup>
import { Icon } from '@iconify/vue';

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
