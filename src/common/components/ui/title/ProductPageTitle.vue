<template>
    <div class="category__nav-title flex flex-col u-text-large ml-4 mb-2   text-color-primary min-[950px]:flex-row">
        <h2 v-for=" (title, i) in titles " :key="i" class="flex">
            <Icon v-if="i > 0 && !!title && isLargeScreen" class="w-5 m-auto mx-4" icon="pixelarticons:chevron-right" />
            {{ title }}

        </h2>
    </div>
</template>

<script setup>
import { defineProps, } from "vue";
import { Icon } from '@iconify/vue';
import { useMediaQuery } from '@vueuse/core'


defineProps({
    titles: Array
})

const isLargeScreen = useMediaQuery('(min-width: 950px)')


</script>

<style scoped>
h2 {
    font-family: Maca;
}
</style>
