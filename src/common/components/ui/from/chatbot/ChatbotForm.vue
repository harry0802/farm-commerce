<template>
    <div
        class="chat-input flex gap-2 absolute bottom-0 w-full bg-white py-2 px-5 border-t-[1px] border-solid border-color-grey-light safe-area-bottom">
        <textarea ref="elementTextarea" v-model.trim="userMessage" @input.prevent="autoAdjustTextareaHeight()"
            @keydown.enter="handleEnterKeyPress($event)"
            class="h-[55px] w-full max-h-[180px] p-4 pl-2 text-[15px] border-none outline-none resize-none peer rounded-lg focus:bg-gray-50 transition-colors max-[490px]:text-base max-[490px]:p-3"
            placeholder="輸入訊息 ..." spellcheck="false" required />

        <button id="send-btn"
            class="flex h-[55px] w-[55px] min-w-[44px] min-h-[44px] place-items-center place-content-center text-2xl self-end invisible cursor-pointer peer-valid:visible hover:scale-110 active:scale-95 hover:text-color-eva-dark-yellow transition-all rounded-full"
            @click="sendQuestion"
            :disabled="!userMessage || userMessage.length === 0">
            <Icon icon="lets-icons:send-hor-duotone-line" />
        </button>
    </div>

</template>


<script setup>
import { Icon } from '@iconify/vue';
import { ref, onMounted, inject, nextTick } from "vue";
const elementTextarea = ref(null)
const { setInputInitHeight, setElementTextarea, userMessage, autoAdjustTextareaHeight, handleEnterKeyPress, handleChat, setElementCahtbox } = inject('store')

const sendQuestion = function () {
    if (userMessage.value === '') return
    handleChat.value()
}

// 處理手機鍵盤彈出
const handleFocus = () => {
    nextTick(() => {
        if (setElementCahtbox.value) {
            setElementCahtbox.value.value.scrollTop = setElementCahtbox.value.value.scrollHeight;
        }
    });
};

// 處理手機鍵盤收起
const handleBlur = () => {
    // iOS Safari 修正視窗高度
    window.scrollTo(0, 0);
};

onMounted(() => {
    setInputInitHeight.value = elementTextarea.value.scrollHeight;
    setElementTextarea.value = elementTextarea.value

    // 監聽鍵盤事件
    if (elementTextarea.value) {
        elementTextarea.value.addEventListener('focus', handleFocus);
        elementTextarea.value.addEventListener('blur', handleBlur);
    }
})
</script>
