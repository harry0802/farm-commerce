<template>
    <button @click="chatbotToggler"
        class="chatbot-toggler fixed flex h-[50px] w-[50px] place-content-center place-items-center bottom-[30px] left-9 bg-color-eva-dark-yellow  cursor-pointer rounded-full  transition-all">
        <Icon class="u-text-small absolute" :class="{
        'showChatbot': !isChat,
        'closeChatbot': isChat
    }" :icon="isChat ? 'tabler:message-chatbot' : 'pixelarticons:close'" />
    </button>

</template>

<script setup>
import { Icon, } from '@iconify/vue';
import { inject } from "vue";
const { isChat, chatbotToggler } = inject('store')
</script>

<style scoped>
.iconify,
.showChatbot,
.closeChatbot {
    transition: opacity .2s, transform .3s;
}

.showChatbot.iconify {
    opacity: 1;
    transform: rotate(90deg);
}

.closeChatbot.iconify {
    opacity: 1;
    transform: rotate(0deg);
}
</style>
