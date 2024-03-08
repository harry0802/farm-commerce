<template>
    <ChatbotButton />

    <ChatbotContent>
        <template #title>
            <ChatbotTitle />
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
import { provide, toRefs, } from "vue";
import useChatbotStore from "@/store/modules/chatbot/chatbotStore.js";
const {
    isChat
    , chatbotToggler
    , inputInitHeight
    , elementTextarea
    , userMessage
    , autoAdjustTextareaHeight
    , handleEnterKeyPress
    , elementCahtbox
    , createChatLi
    , test
    , addMessage
} = toRefs(useChatbotStore())



provide('store', {
    isChat: isChat
    , chatbotToggler: chatbotToggler
    , setInputInitHeight: inputInitHeight
    , setElementTextarea: elementTextarea
    , setElementCahtbox: elementCahtbox
    , userMessage
    , autoAdjustTextareaHeight
    , handleEnterKeyPress
    , createChatLi
    , test
})

</script>
