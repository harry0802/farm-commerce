import { defineStore } from "pinia";

const useChatbotStore = defineStore("useChatbot", {
  state() {
    return {
      userMessage: "",
      isChat: true,
      inputInitHeight: null,
      elementTextarea: null,
      createChatLi: [
        { message: "", className: "incoming" },
        { message: "", className: "outgoing" },
      ],
    };
  },
  actions: {
    chatbotToggler() {
      this.isChat = !this.isChat;
    },

    setChatLi(message, className) {
      {
      }
    },

    handleChat(userMessage) {
      if (!userMessage) return;
    },

    autoAdjustTextareaHeight() {
      const inputInitHeight = this.inputInitHeight;
      const elementTextarea = this.elementTextarea;
      const setHeight = (height) =>
        (elementTextarea.style.height = `${height}px`);
      this.userMessage === ""
        ? setHeight(inputInitHeight)
        : setHeight(inputInitHeight),
        setHeight(elementTextarea.scrollHeight);
    },

    handleEnterKeyPress(e) {
      if (this.userMessage === "") return;
      if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        console.log(123);
        // handleChat();
      }
    },
  },
  persist: {
    storage: window.sessionStorage,
    paths: [],
  },
});

export default useChatbotStore;
