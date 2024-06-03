<template>
  <div class="social__icons flex flex-col   my-10">
    <div class="social__icons--logo  flex place-content-center">
      <RouterLink to="/"><img src="@/assets/imgs/organicX70.svg" alt="icon" /></RouterLink>
    </div>
    <div class="social__icons--socials grid max-w-[135px] grid-cols-3 gap-6 place-self-center">
      <base-icon-socials v-for="communityItems in communityItem" :key="communityItems.des" :path="communityItems.path"
        :imgPath="communityItems.imgs" :des="communityItems.des" />
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
.social__icons--logo img {
  width: 120px;
  margin: auto;
}
</style>
