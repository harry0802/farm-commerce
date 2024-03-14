<template>
    <button @click="chatbotToggler"
        class="chatbot-toggler fixed flex h-[50px] w-[50px] place-content-center place-items-center bottom-[30px] left-9 bg-color-eva-dark-yellow  cursor-pointer rounded-full  transition-all">
        <Icon class="u-text-small absolute" :class="{
        'toggleChatbot': !isChat,
    }" :icon="isChat ? 'tabler:message-chatbot' : 'pixelarticons:close'" />
    </button>

</template>

<script setup>
import { Icon, } from '@iconify/vue';
import { inject } from "vue";
const { isChat, chatbotToggler } = inject('store')
</script>

<style scoped>
.iconify {
    transform: rotate(0deg);
    transition: all .2s ease-out;
}

.toggleChatbot.iconify {
    transform: rotate(90deg);
}
</style>
