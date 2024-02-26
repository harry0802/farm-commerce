<template>
    <div class="account-profile__card supplier__content  col-span-12 md:col-span-6 ">
        <h2 class="u-text-small card__title mb-6">{{ title }}</h2>
        <slot></slot>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
    title: String,

})

</script>

<style scoped>
.account-profile__card {
    @apply min-h-[296px] flex flex-col
}
</style>
