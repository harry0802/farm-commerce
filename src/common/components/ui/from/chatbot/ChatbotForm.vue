<template>
    <div
        class="chat-input flex gap-1.5 absolute bottom-0 w-full bg-white py-0.5  px-5 border-t-[1px] border-solid border-color-grey-light">
        <textarea ref="elementTextarea" v-model.trim="enterTextarea" @input="autoAdjustTextareaHeight"
            @keydown="test($event)"
            class="h-[55px]  w-full max-h-[180px] p-4 pl-0 max-[490px]:py-1 max-[490px]:px-4 text-[15px] border-none outline-none resize-none peer "
            placeholder="輸入訊息 ..." spellcheck="false" required></textarea>

        <Icon id="send-btn"
            class="flex  h-[55px] place-items-center  text-xl self-end invisible cursor-pointer peer-valid:visible hover:scale-125 hover:text-color-eva-dark-yellow transition-all"
            icon="lets-icons:send-hor-duotone-line" />
    </div>

</template>


<script setup>
import { Icon } from '@iconify/vue';
import { ref, onMounted } from "vue";
import { useElementSize } from '@vueuse/core'

const userMessage = ref('')
const elementTextarea = ref(null)
let inputInitHeight

const autoAdjustTextareaHeight = () => {
    const setHeight = (height) => elementTextarea.value.style.height = `${height}px`
    userMessage.value === '' ? setHeight(inputInitHeight) : setHeight(textareaHight), setHeight(elementTextarea.value.scrollHeight)
}

const handleEnterKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        console.log(123);

        // handleChat();
    }
}



// const handleChats = () => {
//     if (!userMessage.value) return;

//     // Clear the input textarea and set its height to default
//     userMessage.value = "";
//     chatInput.style.height = `${inputInitHeight}px`;

//     // Append the user's message to the chatbox

//     chatbox.appendChild(createChatLi(userMessage, "outgoing"));
//     chatbox.scrollTo(0, chatbox.scrollHeight);

//     setTimeout(() => {
//         //Display "Thinking..." message while waiting for the response
//         const incomingChatLi = createChatLi("Thinking...", "incoming");
//         chatbox.appendChild(incomingChatLi);
//         chatbox.scrollTo(0, chatbox.scrollHeight);
//         generateResponse(incomingChatLi);
//     }, 600);

// };


onMounted(() => {
    inputInitHeight = elementTextarea.value.scrollHeight;
})


</script>

<style scoped></style>
