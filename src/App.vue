<template>
  <farm-header />
  <router-view v-slot="{ Component }">
    <component :is="Component">
      <template #sidebar>
        <HeaderSidebar />
      </template>
    </component>
  </router-view>
  <farm-footer />
  <Toaster position="bottom-left" richColors :expand="true" />
  <chatbotPage />
</template>

<script setup>

import { RouterView } from "vue-router";
import FarmFooter from "./layout/FarmFooter.vue";
import farmHeader from "./layout/FarmHeader.vue";
import HeaderSidebar from "@/common/components/cartsidebar/HeaderSidebar.vue";
import chatbotPage from "@/common/components/chatbot/chatbotPage.vue";
import { Toaster } from "@/common/composables/ui/sonner";




</script>

<style>
* {
  font-family: cjkfonts;
  font-weight: normal;
}

h1,
h2,
h3,
a {
  font-family: "RiiT_F";
  font-weight: normal;
  @apply text-color-primary;
}
</style>
