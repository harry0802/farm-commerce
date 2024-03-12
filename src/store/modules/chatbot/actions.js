// const API_KEY = "PASTE-YOUR-API-KEY";
// "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"

import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: import.meta.env,
  dangerouslyAllowBrowser: true,
});

// console.log();

// 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
// 401：驗證失敗，檢查你輸入的 API Key 是否正確。
// 429：API 可用額度不足或超過每月可使用限額，可以付費加值購買額度。
// 500：伺服器錯誤，通常重新發送一次請求即可，不用做其他處理。

export default {
  // helper fouctions
  getChatboxScroll() {
    return this.elementCahtbox.scrollHeight;
  },

  chatbotToggler() {
    this.isChat = !this.isChat;
  },
  addMessage(id, role, message, state = false) {
    this.createChatLi.push({ id, role, message, wait: state });
  },

  //----------------

  async generateResponse(findId, userMessage) {
    // Define the properties and message for the API request
    try {
      const stream = await openai.beta.chat.completions.stream({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "It reluctantly answers all questions with sarcastic remarks, except for those related to farming.",
          },

          {
            role: "user",
            content: `${userMessage}`,
          },
        ],
        stream: true,
      });

      const target = this.createChatLi.find(
        (el) => el.id === findId && el.wait
      );
      if (!target) return;

      setTimeout(() => {
        target.wait = false;
      }, 1000);

      await new Promise((resolve, reject) => {
        stream.on("content", (delta) => {
          if (!this.isAborted) {
            resolve((target.message += delta));
          } else {
            stream.abort();
            // Abort the stream if isAborted is true
          }
        });

        stream.on("abort", (error) => {
          resolve(() => {
            target.message += `訊息：有內鬼停止交易...`;
            this.isAborted = false;
          });
          if (error) reject(error);
        });

        stream.on("error", (error) => {
          target.message = "技術上出現一點錯誤，請聯絡開發人員回報";
          if (error) reject(error);
        });
      });
    } catch (err) {
      throw err;
    }
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
      this.handleChat();
    }
  },

  async handleChat() {
    try {
      const userMessage = this.userMessage;

      if (!userMessage === "" || this.operational) return;

      //   reset the textarea and reset height to default
      this.operational = true;
      this.userMessage = "";
      this.elementTextarea.style.height = `${this.inputInitHeight}px`;

      // push the user's message to the createChatLi array
      const uid = this.creadeUid;
      this.addMessage(this.creadeUid, "user", userMessage);

      // Wait for the response, then substitute it with the bot's message
      this.addMessage(uid, "bot", "", true);
      this.elementCahtbox.scrollTo(0, this.getChatboxScroll());

      await this.generateResponse(uid, userMessage);
    } catch (error) {
      this.elementCahtbox.scrollTo(0, this.getChatboxScroll());
      console.error(error);
    }
  },
};
