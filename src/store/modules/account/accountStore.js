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
      userState: {},
      userArea: {},
      userInfo: {
        user_FirstName: "",
        user_LastName: "",
        user_Email: "",
        user_Password: "",
      },
      userAddress: {},
    };
  },
  getters: {},
  actions: {
    setUserArea(area) {
      const [data] = area;
      this.userArea = data;
    },
    setUserInfo(info) {
      this.userInfo = { ...info };
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
        this.userInfo.user_Password
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
  },
  persist: {
    storage: window.sessionStorage,
    paths: ["userArea", "userState", "userInfo"],
  },
});

export default useAccountStore;
