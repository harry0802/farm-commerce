<template>
    <ChatbotButton v-model:isChat="isChat" />
    <div class="chatbot z-10 fixed w-[420px] left-9 bottom-[90px]  bg-white rounded-2xl overflow-hidden opacity-0 pointer-events-none scale-50 origin-bottom-left  transition-all  "
        :class="{ 'show-chatbot': !isChat }">

        <div class="chatbot__title relative py-1 text-center  bg-color-primary-light">
            <h2 class="text-2xl  text-white">小幫手</h2>

            <div @click="() => isChat = !isChat"
                class=" absolute flex text-white  w-[20px] h-[20px]   place-content-center place-items-center right-4 top-1/2  cursor-pointer -translate-y-1/2 rounded-sm  hover:bg-white hover:text-color-primary-light transition-colors">
                <Icon class="  text-sm close-btn " icon='pixelarticons:close' />
            </div>
        </div>

        <ul class="chatbox overflow-y-auto h-[510px] pt-[30px] pb-5 px-[10px]">
            <li class="chat incoming flex list-none  ">
                <Icon
                    class="w-8 h-8  bgcbloc text-white text-5xl cursor-default text-center self-center bg-color-eva-light-purple rounded mr-2.5 mb-[7px]  "
                    icon="emojione:robot-face" />
                <p
                    class="max-w-[75%] bg-color-eva-light-purple caret-white whitespace-pre-wrap py-3 px-4 rounded-[10px] rounded-b-none ">
                    你好👋
                    <br />
                    請輸入你想提問的訊息
                </p>
            </li>
        </ul>

        <ChatbotForm />
    </div>
</template>

<script setup>
import ChatbotButton from "@/common/components/ui/button/ChatbotButton.vue";
import ChatbotForm from "@/common/components/ui/from/chatbot/ChatbotForm.vue";
import { Icon } from '@iconify/vue';
import { ref } from "vue";
const isChat = ref(true)



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



.chatbox .chat p.error {
    color: #721c24;
    background: #f8d7da;
}

.chatbox .incoming p {
    color: #000;
    background: #f2f2f2;
}




@media (max-width: 490px) {
    .chatbot-toggler {
        right: 20px;
        bottom: 20px;
    }

    .chatbot {
        left: 0;
        bottom: 0;
        height: 100%;
        border-radius: 0;
        width: 100%;
    }

    .chatbot .chatbox {
        height: 90%;
        padding: 25px 15px 100px;
    }

    .chatbot .chat-input {
        padding: 5px 15px;
    }

    .chatbot header span {
        display: block;
    }
}
</style>
