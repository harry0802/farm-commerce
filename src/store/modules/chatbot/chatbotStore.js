import { defineStore } from "pinia";

const useChatbotStore = defineStore("useChatbot", {
  state() {
    return {
      isChat: true,
    };
  },
  getters: {},
  actions: {
    chatbotToggler() {
      this.isChat = !this.isChat;
    },
  },
  persist: {
    storage: window.sessionStorage,
    paths: [],
  },
});

export default useChatbotStore;
