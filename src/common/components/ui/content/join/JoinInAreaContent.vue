<template>
    <div class="join-page__contnet">
        <JoinAreaMap />
        <div class="join-page__title">
            <h1 class="u-text-giant">歡迎!!</h1>
            <p class="text-color-primary max-w-[272px] mx-auto mt-6">你在我們配送範圍內</p>
        </div>
        <div class="submit__container">
            <RouterLink @click="checkAllow" class="u-pirmary-button" :to="{ name: 'personal-info' }">下一步
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import JoinAreaMap from "../../../ui/map/JoinAreaMap.vue";
import { inject } from "vue";
const { checkAllow } = inject('personall')


</script>

<style scoped></style>
