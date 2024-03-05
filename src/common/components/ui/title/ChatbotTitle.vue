<template>
    <div class="chatbot__title relative py-1 text-center  bg-color-primary-light">
        <h2 class="text-2xl  text-white">小幫手</h2>

        <div @click="() => isChat = !isChat"
            class=" absolute flex text-white  w-[20px] h-[20px]   place-content-center place-items-center right-4 top-1/2  cursor-pointer -translate-y-1/2 rounded-sm  hover:bg-white hover:text-color-primary-light transition-colors">
            <Icon class="  text-sm close-btn " icon='pixelarticons:close' />
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
const isChat = defineModel('isChat')
</script>

<style scoped></style>
