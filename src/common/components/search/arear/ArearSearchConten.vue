<template>
    <div class="search-group  text-sm mt-5 ">
        <div class="search-group-wrap text-color-primary">
            <p class=" search-title mb-2.5 leading-[150%] font-bold sm:text-base">每日推薦</p>
            <p v-for=" text, i in searchArearKeyword"
                class=" cursor-pointer search-item text-sm flex items-center text-center tracking-wider sm:text-base  "
                :key=i>
                <Icon class="text-color-grey-dark mr-5" icon="memory:search" />
                {{ text }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { inject } from "vue";
const { searchArearKeyword } = inject('useSearch')
</script>

<style scoped>
.arear-search-group {
    grid-area: search-group;
}

.search-item {
    line-height: 240%;
}
</style>
