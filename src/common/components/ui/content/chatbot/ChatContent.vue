<template>
  <ul
    ref="elementCahtbox"
    class="chatbox overflow-y-auto h-[510px] pt-[30px] px-5 pb-[100px] scroll-smooth"
  >
    <li
      v-for="(chatList, index) in createChatLi"
      :key="index"
      class="chat incoming flex list-none mb-4 animate-fadeIn"
      :class="{ outgoing: chatList.role === 'user' }"
    >
      <div class="flex w-full gap-2">
        <Icon
          v-if="chatList.role === 'bot'"
          class="w-8 h-8 min-w-8 text-white text-5xl cursor-default text-center self-start bg-color-eva-light-purple rounded flex-shrink-0"
          icon="emojione:robot-face"
        />

        <p
          v-if="!chatList.wait"
          class="max-w-[85%] md:max-w-[75%] whitespace-pre-wrap py-3 px-4 rounded-[10px] text-[15px] leading-relaxed break-words"
          :class="{
            error: chatList.error,
            'bg-color-grey-light rounded-bl-none': chatList.role === 'bot',
            'bg-color-eva-dark-yellow rounded-br-none':
              chatList.role === 'user',
          }"
        >
          {{ chatList.message }}
        </p>

        <p
          v-else-if="chatList.role === 'bot' && chatList.wait"
          class="max-w-[85%] md:max-w-[75%] bg-color-grey-light whitespace-pre-wrap py-3 px-4 rounded-[10px] rounded-bl-none"
        >
          <Icon icon="svg-spinners:3-dots-bounce" class="text-xl" />
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
  justify-content: flex-end;
}

.outgoing > div {
  justify-content: flex-end;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}

/* Smooth scrollbar styling */
.chatbox::-webkit-scrollbar {
  width: 6px;
}

.chatbox::-webkit-scrollbar-track {
  background: transparent;
}

.chatbox::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 3px;
}

.chatbox::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}

/* Mobile optimizations */
@media (max-width: 490px) {
  .chatbox {
    padding: 16px 12px 80px;
  }

  .chat {
    margin-bottom: 12px;
  }
}
</style>
