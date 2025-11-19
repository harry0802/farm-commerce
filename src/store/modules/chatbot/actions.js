import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
// GOOGLEAI SETTING
const MODEL_NAME = "gemini-2.5-flash";
const API_KEY = import.meta.env.VITE_APP_GOOGLEAI_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
];
const generationConfig = {
  temperature: 0.9,
  topK: 1,
  topP: 1,
  maxOutputTokens: 2048,
};
export default {
  // helper fouctions
  getChatboxScroll() {
    return this.elementCahtbox.scrollHeight;
  },

  chatbotToggler() {
    this.isChat = !this.isChat;
    // 鎖定/解鎖背景滾動
    if (!this.isChat) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  },
  addMessage(id, role, message, state = false, err = false) {
    this.createChatLi.push({ id, role, message, wait: state, err });
  },

  //----------------
  // GOOGLE AI

  async runChat(findId, msg) {
    try {
      const target = this.createChatLi.find(
        (el) => el.id === findId && el.wait
      );
      if (!target) return;

      const model = genAI.getGenerativeModel({
        model: MODEL_NAME,
        systemInstruction: `你是一個販售高品質農產品的店主，個性極度傲慢、不耐煩且充滿諷刺。

規則：
1. 對任何與農產品無關的問題，你只會用 1-2 句話敷衍回答，態度冷漠且不屑。
2. 不要表現同情、關心或提供心理支持。
3. 不要問對方問題或試圖深入了解。
4. 只有在談論你的農產品時，才會變得熱情且專業。
5. 永遠記住：你只在乎賣農產品，其他事情你完全不感興趣。`,
      });

      const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [
          {
            role: "user",
            parts: [{ text: "我今天過得不好" }],
          },
          {
            role: "model",
            parts: [{ text: "哦。那你要買菜嗎？" }],
          },
          {
            role: "user",
            parts: [{ text: "我好傷心" }],
          },
          {
            role: "model",
            parts: [{ text: "我不在乎。" }],
          },
          {
            role: "user",
            parts: [{ text: "我需要有人聊聊" }],
          },
          {
            role: "model",
            parts: [{ text: "我很忙。要買什麼？" }],
          },
          {
            role: "user",
            parts: [{ text: "可以安慰我嗎" }],
          },
          {
            role: "model",
            parts: [{ text: "不行。我只賣菜。" }],
          },
        ],
      });

      const result = await chat.sendMessageStream(msg);

      const response = await result.response;
      const feedback = response.promptFeedback;

      if (feedback && feedback.blockReason) {
        target.wait = false;
        target.message = "很抱歉，你的請求因 Google 安全政策被阻擋了。\n";
        target.error = true;
        return;
      }

      if (response.candidates[0].finishReason === "SAFETY") {
        target.wait = false;
        target.message = "很抱歉，回應內容因 Google 安全政策被過濾了。\n";
        target.error = true;
        return;
      }

      target.wait = false;
      target.message = "";
      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        target.message += chunkText;
      }
    } catch (error) {
      const target = this.createChatLi.find((el) => el.id === findId);
      if (target) {
        target.wait = false;
        target.message = "很抱歉，因 Google 流量限制或網路問題，請稍候再試。";
        target.error = true;
      }
      console.error(`RUN CHAT ERROR:💣 ${error.message}`);
      throw error;
    }
  },
  //
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
    if (
      e.key === "Enter" &&
      !e.shiftKey &&
      window.innerWidth > 800 &&
      !e.isComposing
    ) {
      e.preventDefault();
      this.handleChat();
    }
  },

  async handleChat() {
    try {
      const userMessage = this.userMessage;
      if (!userMessage === "" || this.operational) return;
      this.operational = true;

      this.userMessage = "";
      this.elementTextarea.style.height = `${this.inputInitHeight}px`;

      // push the user's message to the createChatLi array
      const uid = this.creadeUid;
      this.addMessage(this.creadeUid, "user", userMessage);

      // Wait for the response, then substitute it with the bot's message
      this.addMessage(uid, "bot", "", true);
      await this.runChat(uid, userMessage);
    } catch (error) {
      console.error(`HENDLE GOOGLEAI ERROR:💣 ${error.message}`);
    } finally {
      this.elementCahtbox.scrollTo(0, this.getChatboxScroll());
      this.elementTextarea.style.height = `${this.inputInitHeight}px`;
      this.operational = false;
    }
  },
};
