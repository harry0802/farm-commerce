import { defineStore } from "pinia";

export const useProfileInfoStore = defineStore("ProfileInfoStore", {
  state() {
    return {
      personalInfo: {
        user_FirstName: { title: "姓", val: "" },
        user_LastName: { title: "名", val: "" },
        user_phone: { title: "電話號碼", val: "" },
      },
      deliveryAddress: {
        user_Address: { title: "地址", val: "" },
        user_AddressLine: { title: "樓號", val: "" },
        user_City: { title: "縣市", val: "" },
        user_State: { title: "地區", val: "" },
        user_ZipCode: { title: "郵遞區號", val: "" },
      },
      driverInstructions: {
        suer_driverTips: "",
      },
      email: { title: "信箱地址", val: "" },
      paymentInfo: { card_cardNumber: "", card_date: "" },
      notifications: [],

      billingAddress: {
        user_Address: { title: "地址", val: "" },
        user_AddressLine: { title: "樓號", val: "" },
        user_City: { title: "縣市", val: "" },
        user_State: { title: "地區", val: "" },
        user_ZipCode: { title: "郵遞區號", val: "" },
      },
      password: {},
    };
  },
  getters: {},
  actions: {
    //初始化分配資料
    setAccountProfileInfo(spClient, spDelivery, spBilling, spPayment) {
      const personalInfo = this.personalInfo;
      const deliveryAddress = this.deliveryAddress;
      const driverInstructions = this.driverInstructions;
      const email = this.email;
      const billingAddress = this.billingAddress;
      const paymentInfo = this.paymentInfo;
      // 輔助函數
      const assignmentLoop = (data, item) => {
        for (const key in data) {
          if (Object.hasOwnProperty.call(data, key)) {
            const element = data[key];
            if (item[key]) {
              element.val = item[key];
            }
          }
        }
      };

      spClient.map((item) => {
        email.val = item.user_Email;
        this.notifications = item.notifications
          ? item.notifications
          : this.notifications;
        assignmentLoop(personalInfo, item);
      });

      spDelivery.map((item) => {
        driverInstructions.suer_driverTips = item.suer_driverTips;
        personalInfo.user_phone.val = item.user_phone;
        assignmentLoop(deliveryAddress, item);
      });

      spBilling.length === 0
        ? (this.billingAddress = false)
        : spBilling.map((item) => assignmentLoop(billingAddress, item));

      spPayment.length === 0
        ? (this.paymentInfo = false)
        : spPayment.map((item) => {
            const paymentInfo = this.paymentInfo;
            paymentInfo.card_date = item.card_date;
            paymentInfo.card_cardNumber = item.card_cardNumber;
          });
    },

    compareObjects(oriVl, newVl) {
      return Object.entries(oriVl).every(
        ([key, { val }]) => newVl[key] + "" === val + ""
      );
    },
  },

  persist: {
    storage: window.sessionStorage,
  },
});
