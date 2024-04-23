import { defineStore } from "pinia";
import {
  userSignUp,
  userInsertRows,
  queryZipCode,
  verifyOtp,
  getUserInfo,
} from "@/Plugins/supabaseClinets.js";
// 註冊帳戶紀錄

const useAccountStore = defineStore("accountStore", {
  state() {
    return {
      allow: false,
      registration: {
        personalinfo: false,
        deliveryaddress: false,
        paymentinfo: false,
      },
      userState: {},
      userArea: {},
      userInfo: {
        user_FirstName: "",
        user_LastName: "",
        user_Email: "",
        user_Password: "",
      },
      userAddress: {},
      test: null,
    };
  },

  getters: {
    isaAuthenticated: (state) => !!state.userState.role,
    hasUserEmail: (state) => !!state.userInfo.user_Email,
    getRegistration: (state) =>
      state.registration?.personalinfo &&
      state.registration?.deliveryaddress &&
      state.registration?.paymentinfo,

    regPersonalinfo: (state) => state.registration.personalinfo,
    regDeliveryaddress: (state) => state.registration.deliveryaddress,
    regPaymentinfo: (state) => state.registration.paymentinfo,
  },
  actions: {
    checkAllow() {
      this.allow = true;
    },
    closeAllow() {
      this.allow = false;
    },
    setUserArea(area) {
      const [data] = area;
      this.userArea = data;
    },
    setUserInfo(info) {
      this.userInfo = { ...info };
    },
    setAuthenticated(authenticated) {
      this.userState = authenticated;
    },
    async registerClient(userDatas) {
      this.userInfo = {
        user_FirstName: userDatas.userFirstName,
        user_LastName: userDatas.userLastName,
        user_Email: userDatas.userEmail,
        user_Password: userDatas.userPassword,
      };
      return await userSignUp(
        this.userInfo.user_Email,
        this.userInfo.user_Password,
        this.userInfo.user_LastName
      );
    },

    async registerClientAddress(address) {
      try {
        const getUser = await getUserInfo();
        address.clients_id = getUser.id;
        const zipcode = await queryZipCode(address.user_ZipCode);
        if (!zipcode.length > 0) return;
        return await userInsertRows("deliveryAddress", address);
      } catch (err) {
        console.log(err.message);
      }
    },

    async loginEmailOTP(verifyCode) {
      try {
        const userInfo = this.userInfo;
        const token = verifyCode;
        const response = await verifyOtp(userInfo.user_Email, token);
        if (response) {
          userInfo.user_id = response.user.id;
        }

        return await userInsertRows("clients", userInfo);
      } catch (err) {
        throw err;
      }
    },
    settest() {
      this.test = 123 + "ABc";
      return this.test;
    },
  },
  persist: {
    storage: window.sessionStorage,
    paths: ["userArea", "userState", "userInfo", "registration"],
  },
});

export default useAccountStore;
