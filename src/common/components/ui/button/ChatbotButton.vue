<template>
    <button class="chatbot-toggler  ">
        <span class="material-symbols-rounded">
            mode_comment
            <Icon icon="tabler:message-chatbot" />
            <Icon icon="game-icons:megabot" />
        </span>
        <span class="material-symbols-outlined">
            close
            <Icon icon="pixelarticons:close" />
        </span>
    </button>
</template>

<script setup>
import { Icon } from '@iconify/vue';

</script>

<style scoped>
.chatbot-toggler {
    position: fixed;
    display: flex;
    justify-content: center;
    height: 50px;
    width: 50px;
    align-items: center;
    bottom: 30px;
    left: 35px;
    background: #724ae8;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.2s ease;
}

.show-chatbot .chatbot-toggler {
    transform: rotate(90deg);
}

.show-chatbot .chatbot-toggler span:first-child {
    opacity: 0;
}

.show-chatbot .chatbot-toggler span:last-child {
    opacity: 1;
}
</style>
