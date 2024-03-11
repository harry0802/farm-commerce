import { defineStore } from "pinia";
import { reactive } from "vue";
import { v4 as uuidv4 } from "uuid";
import actions from "@/store/modules/chatbot/actions.js";

const useChatbotStore = defineStore("useChatbot", {
  state() {
    return {
      userMessage: "",
      isChat: true,
      inputInitHeight: null,
      elementTextarea: null,
      elementCahtbox: null,
      isAborted: false,
      createChatLi: reactive([
        {
          id: "a688e7b2-93e0-4776-a7a3-59f8e25e13c6",
          role: "bot",
          message: "你好👋\n請輸入你想提問的訊息 ",
          wait: false,
        },
        {
          role: "user",
          message: "訊息訊息訊息訊息訊息訊息訊息訊息",
          wait: false,
        },
        { role: "bot", message: "", wait: true },
        {
          role: "user",
          message: "abc",
          wait: false,
        },
      ]),
    };
  },
  getters: {
    creadeUid: () => uuidv4(),
  },
  actions: actions,
  persist: {
    storage: window.sessionStorage,
    paths: [],
  },
});

export default useChatbotStore;
