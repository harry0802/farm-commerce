import OpenAI from "openai";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
// OPENAI SETTING
const openai = new OpenAI({
  apiKey: "",
  dangerouslyAllowBrowser: true,
});
// GOOGLEAI SETTING
const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = import.meta.env.VITE_APP_GOOGLEAI_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
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
      const model = genAI.getGenerativeModel({ model: MODEL_NAME });

      const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: "我好傷心" }],
          },
          {
            role: "model",
            parts: [{ text: "我不在乎" }],
          },
          {
            role: "user",
            parts: [{ text: "你好我是來購買的顧客" }],
          },
          {
            role: "model",
            parts: [{ text: "除了與農產品有關的問題外，它充滿了傲慢與諷刺，不情願的回答所有問題。" }],
          },
        ],
        generationConfig: {
          maxOutputTokens: 3000,
        },
      });

      const result = await chat.sendMessageStream(msg).catch((e) => {
        target.wait = false;
        target.message = "很抱歉因為 Google 流量限制，請你稍候再試";
        target.error = true;
        throw e;
      });

      const { stream, response } = await result;

      await response.then((feedback) => {
        if (
          (feedback.promptFeedback && feedback.promptFeedback.blockReason) ||
          feedback.candidates[0].finishReason === "SAFETY"
        ) {
          target.wait = false;
          target.message =
            "很抱歉你因為 Google 安全政策，你不能詢問相關問題 \n";
          target.error = true;
        }
      });

      target.wait = false;
      for await (const chunk of stream) {
        const chunkText = chunk.text();
        target.message += chunkText;
      }
    } catch (error) {
      throw error;
    }
  },
  // OPENAI
  async generateResponse(userMessage) {
    try {
      return await openai.beta.chat.completions.stream({
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
    } catch (err) {
      if (err instanceof OpenAI.APIError) {
        console.log(err.status); // 400
        console.log(err.name); // BadRequestError
        console.log(err.headers); // {server: 'nginx', ...}
      } else {
        throw err;
      }
    }
  },
  openaiEventHandler(stream, findId) {
    const target = this.createChatLi.find((el) => el.id === findId && el.wait);
    if (!target) return;
    return new Promise((resolve, rejection) => {
      setTimeout(() => {
        resolve((target.wait = false));
      }, 1000);

      stream.on("content", (delta) => {
        if (!this.isAborted) {
          target.message += delta;
        } else {
          target.message += `📱訊息：有內鬼停止交易...`;
          stream.abort();
        }
      });

      // stream.on("abort", () => {
      //   target.message += `📱訊息：有內鬼停止交易...`;
      //   this.isAborted = false;
      // });

      stream.on("error", (error) => {
        target.message = "技術上出現一點錯誤，請聯絡開發人員回報";
        console.log(error);

        rejection(error.me);
      });
      stream.on("end", () => {
        console.log(123);

        this.operational = false;
        this.isAborted = false;
      });
    });
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
