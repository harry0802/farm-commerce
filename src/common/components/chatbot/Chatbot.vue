<template>
    <div
        class="chatbot fiex w-[420px] right-9 bottom-[90px]  bg-white rounded-2xl overflow-hidden opacity-0 pointer-events-none scale-50 origin-bottom-right ">
        <ChatbotButton />
        <div class="chatbot__title relative py-1 text-center caret-white bg-color-eva-light-purple ">
            <h2 class="text-2xl">聊天機器人</h2>
            <span
                class="close-btn material-symbols-outlined absolute  left-4 top-1/2 hidden cursor-pointer translate-y-1/2 ">close</span>
        </div>

        <ul class="chatbox overflow-y-auto h-[510px] pt-[30px] pb-5 px-[100px]">
            <li class="chat incoming flex list-none  ">
                <span
                    class="material-symbols-outlined w-8 h-8  caret-white cursor-default text-center self-center bg-color-eva-light-purple rounded mr-2.5 mb-[7px]  ">smart_toy</span>
                <p
                    class="max-w-[75%] bg-color-eva-light-purple caret-white whitespace-pre-wrap py-3 px-4 rounded-[10px] rounded-b-none ">
                    Hi there
                    👋<br />How can I help you
                    today?</p>
            </li>
        </ul>

        <div
            class="chat-input flex gap-1.5 absolute bottom-0 w-full bg-white py-0.5  px-5 border border-solid border-color-grey-dark">
            <textarea class="h-[55px] " placeholder="輸入訊息 ..." spellcheck="false" required></textarea>
            <span id="send-btn" class="material-symbols-rounded">傳送</span>
        </div>
    </div>
</template>

<script setup>
import ChatbotButton from "@/common/components/ui/button/ChatbotButton.vue";
</script>

<style scoped>
.chatbot {
    /* position: fixed;
    right: 35px;
    bottom: 90px;
    width: 420px; */
    /* background: #fff;
    border-radius: 15px;
    overflow: hidden; */
    /* opacity: 0; */
    /* pointer-events: none; */
    /* transform: scale(0.5); */
    /* transform-origin: bottom right; */
    box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),
        0 32px 64px -48px rgba(0, 0, 0, 0.5);
    transition: all 0.1s ease;
}

.show-chatbot .chatbot {
    opacity: 1;
    pointer-events: auto;
    transform: scale(1);
}

.chatbot.chatbot__title {
    /* padding: 16px 0;
    position: relative;
    text-align: center;
    color: #fff;
    background: #724ae8; */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* .chatbot .chatbot__title span {
    position: absolute;
    right: 15px;
    top: 50%;
    display: none;
    cursor: pointer;
    transform: translateY(-50%);
} */

.chatbox .chat p.error {
    color: #721c24;
    background: #f8d7da;
}

.chatbox .incoming p {
    color: #000;
    background: #f2f2f2;
}

.chat-input textarea {
    height: 55px;
    width: 100%;
    border: none;
    outline: none;
    resize: none;
    max-height: 180px;
    padding: 15px 15px 15px 0;
    font-size: 0.95rem;
}

.chat-input textarea {
    height: 55px;
    width: 100%;
    border: none;
    outline: none;
    resize: none;
    max-height: 180px;
    padding: 15px 15px 15px 0;
    font-size: 0.95rem;
}

.chat-input span {
    align-self: flex-end;
    color: #724ae8;
    cursor: pointer;
    height: 55px;
    display: flex;
    align-items: center;
    visibility: hidden;
    font-size: 1.35rem;
}

.chat-input textarea:valid~span {
    visibility: visible;
}

@media (max-width: 490px) {
    .chatbot-toggler {
        right: 20px;
        bottom: 20px;
    }

    .chatbot {
        right: 0;
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
}</style>
