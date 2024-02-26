<template>
  <div class="social__icons">
    <div class="social__icons--logo">
      <a href="#">
        <img src="@/assets/imgs/organicX70.svg" alt="" />
      </a>
    </div>
    <div class="social__icons--socials">
      <base-icon-socials
        v-for="communityItems in communityItem"
        :key="communityItems.des"
        :path="communityItems.path"
        :imgPath="communityItems.imgs"
        :des="communityItems.des"
      ></base-icon-socials>
    </div>
  </div>
</template>

<script setup>
import BaseIconSocials from "../../icon/BaseIconSocials.vue";
import { ref } from "vue";
import rootStore from "@/store/rootStore.js";
const store = rootStore();
const communityItem = ref(store.getCommunityItem);
</script>

<style scoped>
.social__icons {
  width: 140px;
  display: flex;
  flex-direction: column;
  margin: 24px auto;
}
.social__icons--logo img {
  width: 120px;
  margin: auto;
}
.social__icons--socials {
  display: grid;
  grid-template-columns: repeat(3, minmax(1.5rem, 1fr));
  row-gap: 1.5rem;
}
</style>
