const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "PASTE-YOUR-API-KEY";

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
    this.createChatLi.push({ id, role, message, await: state });
  },

  //----------------

  async generateResponse() {
    // Define the properties and message for the API request
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
      }),
    };

    const response = await fetch(API_URL, requestOptions);

    if (!response.ok) throw new Error("Something went wrong. Please try again");

    const data = res.json();
    data.choices[0].message.content.trim();

    fetch(API_URL, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        messageElement.textContent = data.choices[0].message.content.trim();
      })
      .catch(() => {
        messageElement.classList.add("error");
        messageElement.textContent =
          "Oops! Something went wrong. Please try again.";
      })
      .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
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

  handleChat() {
    if (!this.userMessage === "") return;
    //   reset the textarea and reset height to default
    this.userMessage = "";
    this.elementTextarea.style.height = `${this.inputInitHeight}px`;

    // push the user's message to the createChatLi array
    const uid = this.creadeUid;
    this.addMessage(uid, "user", "設定");

    // Wait for the response, then substitute it with the bot's message
    new Promise((s) => {
      setTimeout(() => {
        this.elementCahtbox.scrollTo(0, this.getChatboxScroll());
        // generateResponse(incomingChatLi);
        this.createChatLi.forEach((element) => {
          if (element.id === uid) {
            element.message = "更改";
          }
        });
      }, 3000);
      s();
    });
  },
};
