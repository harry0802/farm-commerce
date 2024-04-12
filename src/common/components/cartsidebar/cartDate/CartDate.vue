<template>
  <dynamic-wrapper>
    <!-- 當為型態 2 時將會被隱藏 if -->
    <template #list>
      <date-background v-if="!store.getshowList" />
      <date-list v-else />
    </template>
    <template #bottom>
      <date-dynamic-button-bar />
    </template>
  </dynamic-wrapper>
</template>

<script setup>
import DynamicWrapper from "../../ui/content/cartSideBar/DynamicWrapper.vue";
import DateBackground from "../../cartsidebar/cartDate/dateList/DateBackground.vue";
import DateList from "../../cartsidebar/cartDate/dateList/DateList.vue";
import DateDynamicButtonBar from "../../cartsidebar/cartDate/dateList/DateDynamicButtonBar.vue";

import cartStore from "@/store/modules/cart/cartStore.js";
const store = cartStore();
</script>
