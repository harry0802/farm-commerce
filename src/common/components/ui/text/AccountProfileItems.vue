<template>
    <div class="profile__items grid sm:grid-cols-3 gap-8">
        <div class="place-self-start" v-for="infos, i in profileInfo" :key="i">
            <h3 class=" sm:text-lg">{{ infos.title }}</h3>
            <p class="text-base indent-2 text-color-primary">{{ infos.val }}</p>
        </div>
    </div>
</template>
<script setup>

import { defineProps } from "vue";
defineProps(['profileInfo'])
</script>

<style scoped>
.profile__items>div:nth-child(3) {
    @apply col-start-1
}
</style>