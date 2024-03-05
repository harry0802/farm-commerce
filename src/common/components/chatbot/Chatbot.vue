<template>
    <ChatbotButton v-model:isChat="isChat" />

    <ChatbotContent v-model:isChat="isChat">
        <template #title>
            <ChatbotTitle v-model:isChat="isChat" />
        </template>

        <template #chatbox>
            <ChatContent />
        </template>

        <template #ChatbotForm>
            <ChatbotForm />
        </template>
    </ChatbotContent>
</template>

<script setup>
import ChatbotContent from "@/common/components/ui/content/chatbot/ChatbotContent.vue";
import ChatbotButton from "@/common/components/ui/button/ChatbotButton.vue";
import ChatbotForm from "@/common/components/ui/from/chatbot/ChatbotForm.vue";
import ChatbotTitle from "@/common/components/ui/title/ChatbotTitle.vue";
import ChatContent from "@/common/components/ui/content/chatbot/ChatContent.vue";
import { ref } from "vue";
const isChat = ref(true);


</script>
