<template>
    <nav v-if="productPageBreadcrumbs" class="breadcrumbs p-1 pb-2 mb-2 ">
        <ul class="flex">
            <li v-for=" (items, i) in productPageBreadcrumbs" :key="i" class="flex items-center justify-end ">
                <RouterLink class="text-color-primary" :to="items.link">{{ items.label }}</RouterLink>
                <Icon v-if="productPageBreadcrumbs.length - 1 > i" icon="pixelarticons:chevron-right"
                    class="ml-4 text-color-grey-dark" />
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { Icon, } from '@iconify/vue';
import { inject } from "vue";
import { RouterLink } from 'vue-router';
const productPageBreadcrumbs = inject('productPageBreadcrumbs')

</script>

<style scoped>
* {
    font-family: SentyGoldSand;

}

li:not(:first-child) {
    @apply ml-4
}

@media screen and (min-width: 950px) {
    .breadcrumbs {
        margin-bottom: 24px;
    }
}
</style>
