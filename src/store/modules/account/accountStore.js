import { defineStore } from "pinia";
import { supabase } from "@/config/FarmPruductsItemManage.js";
import {
  userSignUp,
  userInsertRows,
  queryZipCode,
} from "@/Plugins/supabaseClinets.js";
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
      await userSignUp(this.userInfo.user_Email, this.userInfo.user_Password);
    },

    async registerClientAddress(address) {
      try {
        address.clients_id = this.userState.user.id;
        const zipcode = await queryZipCode(address.user_ZipCode);
        if (!zipcode.length > 0) return;
        console.log(address.suer_driverTips);
        return await userInsertRows("deliveryAddress", address);
      } catch (err) {
        console.log(err.message);
      }
    },

    async loginEmailOTP(verifyCode) {
      try {
        const userInfo = this.userInfo;
        const token = verifyCode.field.userEnter;
        let sessionState;
        const {
          data: { session },
          error,
        } = await supabase.auth.verifyOtp({
          email: userInfo.user_Email,
          token: token,
          type: "email",
        });
        if (error) {
          throw error;
        }
        if (session) {
          sessionState = session;
          userInfo.user_id = sessionState.user.id;
          this.userState = sessionState;
          const response = await userInsertRows("clients", userInfo);
          console.log(response);

          return response;
        }
      } catch (err) {
        console.error(err.message);
      }
    },
  },
  persist: {
    storage: window.sessionStorage,
    paths: ["userArea", "userState", "userInfo"],
  },
});

export default useAccountStore;
