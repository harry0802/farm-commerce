<template>
    <div class="chatbot__title relative py-3 text-center bg-color-primary-light shadow-sm">
        <h2 class="text-2xl text-white font-medium">小幫手</h2>

        <button @click="chatbotToggler"
            class="absolute flex text-white w-[36px] h-[36px] min-w-[44px] min-h-[44px] place-content-center place-items-center right-2 top-1/2 cursor-pointer -translate-y-1/2 rounded-full hover:bg-white/20 active:bg-white/30 transition-all active:scale-95"
            aria-label="關閉聊天">
            <Icon class="text-xl close-btn" icon='pixelarticons:close' />
        </button>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { inject } from "vue";
const { isChat, chatbotToggler } = inject('store')
</script>
