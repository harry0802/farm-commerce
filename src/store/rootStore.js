import { defineStore } from "pinia";
import rootGetters from "./getters";
import rootActions from "./actions";
import facebook from "@/assets/imgs/social/emoji_sns_facebook.png";
import instagram from "@/assets/imgs/social/emoji_sns_instagram.png";
import youtube from "@/assets/imgs/social/emoji_sns_youtube.png";
export const rootStore = defineStore("rootStore", {
  state() {
    return {
      login: false,

      communityItem: [
        {
          imgs: facebook,
          path: "https://www.facebook.com/profile.php?id=100003705461901",
          des: "facebook",
        },
        {
          imgs: instagram,
          path: "https://www.youtube.com/",
          des: "youtube",
        },
        {
          imgs: youtube,
          path: "https://www.instagram.com/",
          des: "instagram",
        },
      ],
      footerLinks: {
        sectionA: [
          { linkName: "田園風情", linkPath: "" },
          { linkName: "運作方式解析", linkPath: "" },
          { linkName: "成為小農", linkPath: "" },
          { linkName: "加入我們吧！", linkPath: "" },
        ],
        sectionB: [
          { linkName: "問問題，不要害羞", linkPath: "" },
          { linkName: "給我們來封信", linkPath: "" },
          { linkName: "媒體追蹤，不是八卦", linkPath: "" },
          { linkName: "吃喝玩樂，廚房酒吧", linkPath: "" },
        ],
      },
      mobileSildeBarCategoryNav: [
        { title: "會員訂閱", path: "subscriptions", icon: "entypo:cycle" },
        {
          title: "宅配時間表",
          path: "delivery-schedule",
          icon: "carbon:delivery",
        },
        { title: "用戶檔案", path: "profile", icon: "ph:user-list-fill" },
        {
          title: "訂單紀錄",
          path: "order-history",
          icon: "icon-park-outline:history-query",
        },
        {
          title: "贈送農產箱，獲得 $25",
          path: "referrals",
          icon: "ic:twotone-discount",
        },
      ],
      siderBarMenu: true,
      toggleSiderBar: null,
    };
  },
  getters: rootGetters,
  actions: rootActions,
});
export default rootStore;
