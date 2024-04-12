<template>
  <dynamic-bottom-bar>
    <component :is="
        store.getshowList ? CartDateBottomBtnSelect : CartDateBottomBtnCreate
      "></component>
  </dynamic-bottom-bar>
</template>

<script setup>
import DynamicBottomBar from "../../../ui/content/cartSideBar/DynamicBottomBar.vue";
import CartDateBottomBtnCreate from "../../../ui/button/CartDateBottomBtnCreate.vue";
import CartDateBottomBtnSelect from "../../../ui/button/CartDateBottomBtnSelect.vue";
import { inject } from "vue";
const store = inject('store')

</script>

<style></style>
