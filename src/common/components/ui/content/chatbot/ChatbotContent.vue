<template>

    <div class="chatbot z-10 fixed w-[420px] left-9 bottom-[90px]  bg-white rounded-2xl overflow-hidden opacity-0 pointer-events-none scale-50 origin-bottom-left  transition-all duration-300 ease-in-out  "
        :class="{ 'show-chatbot': !isChat }">

        <slot name="title" />

        <slot name="chatbox" />

        <slot name="ChatbotForm" />

    </div>

</template>

<script setup>
import { inject } from "vue";
const { isChat } = inject('store')
</script>

<style scoped>
.chatbot {
    box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),
        0 32px 64px -48px rgba(0, 0, 0, 0.5);
}

.show-chatbot.chatbot {
    opacity: 1;
    pointer-events: auto;
    transform: scale(1);
}

.chatbot.chatbot__title {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}






@media (max-width: 490px) {
    .chatbot-toggler {
        right: 20px;
        bottom: 20px;
    }

    .chatbot {
        left: 0;
        bottom: 0;
        height: 100dvh;
        height: 100vh;
        border-radius: 0;
        width: 100%;
        transform-origin: center;
        overscroll-behavior: contain;
        -webkit-overflow-scrolling: touch;
    }

    .show-chatbot.chatbot {
        animation: slideUp 0.3s ease-out;
    }

    .chatbot .chatbox {
        height: calc(100% - 120px);
        padding: 20px 16px 100px;
        overscroll-behavior: contain;
    }

    .chatbot .chat-input {
        padding: 8px 16px;
        padding-bottom: max(8px, env(safe-area-inset-bottom));
    }

    .chatbot header span {
        display: block;
    }
}

@keyframes slideUp {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
