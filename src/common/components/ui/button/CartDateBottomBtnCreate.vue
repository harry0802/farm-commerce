<template>
  <button type="button" class="btn__creare u-pirmary-button" @click="store.openList">
    添加新日期
  </button>
</template>

<script setup>
import cartStore from "@/store/modules/cart/cartStore.js";
const store = cartStore();
</script>

<style scoped>
.btn__creare {
  position: relative;
  max-width: 400px;
  width: 100%;
  background: #e6770b;
  font-family: Yagoinini;
  font-size: 25px;
  color: #0c1d00;
  z-index: 1;
}
</style>
