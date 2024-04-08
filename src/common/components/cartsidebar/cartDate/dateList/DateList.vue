<template>
  <!-- 在尚未有商品時 循環日期 -->
  <component :is="haveOder ? DateProductList : DateCreateList" />
</template>

<script setup>
import { ref } from "vue";
import DateCreateList from "../../../cartsidebar/cartDate/dateList/DateCreateList.vue";
import DateProductList from "../../../cartsidebar/cartDate/dateList/DateProductList.vue";

const haveOder = ref(false);
</script>

<style scoped></style>
