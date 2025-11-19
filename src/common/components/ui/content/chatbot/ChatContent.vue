<template>
  <ul
    ref="elementCahtbox"
    class="chatbox overflow-y-auto h-[510px] pt-[30px] px-5 pb-[100px]"
  >
    <li
      v-for="(chatList, index) in createChatLi"
      :key="index"
      class="chat incoming flex list-none"
      :class="{ outgoing: chatList.role === 'user' }"
    >
      <div class="flex w-full">
        <Icon
          v-if="chatList.role === 'bot'"
          class="w-8 h-8 text-white text-5xl cursor-default text-center self-start bg-color-eva-light-purple rounded mr-2.5 mb-[7px]"
          icon="emojione:robot-face"
        />

        <p
          v-if="!chatList.wait"
          class="max-w-[75%] bg-color-grey-light whitespace-pre-wrap py-3 px-4 rounded-[10px] rounded-bl-none"
          :class="{ error: chatList.error }"
        >
          {{ chatList.message }}
        </p>

        <p
          v-else-if="chatList.role === 'bot' && chatList.wait"
          class="max-w-[75%] bg-color-grey-light whitespace-pre-wrap py-3 px-4 rounded-[10px] rounded-bl-none"
        >
          <Icon icon="svg-spinners:3-dots-bounce" />
        </p>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { inject, onMounted, ref } from "vue";
const { setElementCahtbox, createChatLi } = inject("store");

const elementCahtbox = ref(null);

onMounted(() => {
  setElementCahtbox.value = elementCahtbox;
});
</script>

<style scoped>
.error {
  color: #721c24;
  background: #f8d7da;
}

.chat.outgoing {
  margin: 20px 0;
  justify-content: flex-end;
}

.outgoing > div {
  justify-content: flex-end;
}

.outgoing > div > p {
  border-radius: 10px 10px 0px 10px;
}

/* .chatbox .incoming p {
    color: #000;
    background: #f2f2f2;
} */
</style>
