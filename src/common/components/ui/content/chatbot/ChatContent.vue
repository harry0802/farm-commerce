<template>
    <ul class="chatbox overflow-y-auto h-[510px] pt-[30px] pb-5 px-[10px]">
        <li class="chat incoming flex list-none">
            <Icon
                class="w-8 h-8  bgcbloc text-white text-5xl cursor-default text-center self-center bg-color-eva-light-purple rounded mr-2.5 mb-[7px]  "
                icon="emojione:robot-face" />

            <p class="max-w-[75%] bg-color-grey-light  whitespace-pre-wrap py-3 px-4 rounded-[10px] rounded-b-none ">
                你好👋
                <br />
                請輸入你想提問的訊息
            </p>

        </li>
    </ul>
</template>

<script setup>
import { Icon } from '@iconify/vue';




</script>

<style scoped></style>
