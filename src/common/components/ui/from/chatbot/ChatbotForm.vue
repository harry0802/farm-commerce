<template>
    <div
        class="chat-input flex gap-1.5 absolute bottom-0 w-full bg-white py-0.5  px-5 border-t-[1px] border-solid border-color-grey-light">
        <textarea ref="elementTextarea" v-model.trim="userMessage" @input="autoAdjustTextareaHeight"
            @keydown.enter="handleEnterKeyPress($event)"
            class="h-[55px]  w-full max-h-[180px] p-4 pl-0 max-[490px]:py-1 max-[490px]:px-4 text-[15px] border-none outline-none resize-none peer "
            placeholder="輸入訊息 ..." spellcheck="false" required />

        <Icon id="send-btn"
            class="flex  h-[55px] place-items-center  text-xl self-end invisible cursor-pointer peer-valid:visible hover:scale-125 hover:text-color-eva-dark-yellow transition-all"
            icon="lets-icons:send-hor-duotone-line" />
    </div>

</template>


<script setup>
import { Icon } from '@iconify/vue';
import { ref, onMounted, inject } from "vue";


const { setInputInitHeight, setElementTextarea, userMessage, autoAdjustTextareaHeight, handleEnterKeyPress } = inject('store')
const elementTextarea = ref(null)
onMounted(() => {
    setInputInitHeight.value = elementTextarea.value.scrollHeight;
    setElementTextarea.value = elementTextarea.value
})
</script>
