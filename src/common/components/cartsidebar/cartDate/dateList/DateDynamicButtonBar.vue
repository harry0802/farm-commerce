<template>
  <dynamic-bottom-bar>
    <!-- <cart-date-bottom-btn-select></cart-date-bottom-btn-select>
    <cart-date-bottom-btn-create></cart-date-bottom-btn-create> -->

    <component
      :is="
        store.getshowList ? CartDateBottomBtnSelect : CartDateBottomBtnCreate
      "
    ></component>
  </dynamic-bottom-bar>
</template>

<script setup>
import DynamicBottomBar from "../../../ui/content/cartSideBar/DynamicBottomBar.vue";
import CartDateBottomBtnCreate from "../../../ui/button/CartDateBottomBtnCreate.vue";
import CartDateBottomBtnSelect from "../../../ui/button/CartDateBottomBtnSelect.vue";

import cartStore from "@/store/modules/cart/cartStore.js";
const store = cartStore();
</script>

<style></style>
