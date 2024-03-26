<template>
    <div @click="toggleFavorite"
        class="mark__Favorite  absolute  flex w-8 h-8  rounded-full bg-white    cursor-pointer hover:scale-110 active:scale-90 transition-transform duration-300 ">
        <Icon :class="{ Favorite: isFavorite }" class=" w-6 h-6 m-auto text-color-grey-light "
            icon="lets-icons:favorite-fill" />
    </div>

</template>

<script setup>
import { ref } from "vue";
import { Icon, } from '@iconify/vue';

const isFavorite = ref(false)
const toggleFavorite = () => isFavorite.value = !isFavorite.value
</script>

<style scoped>
.Favorite {
    @apply text-color-primary-light
}
</style>
