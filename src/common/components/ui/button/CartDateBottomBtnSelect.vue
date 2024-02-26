<template>
  <div class="buttom-bar__select">
    <button
      class="btn__cancel cancel u-pirmary-button"
      @click="store.closeList"
    >
      取消
    </button>
    <button class="btn__creare u-pirmary-button">添加</button>
  </div>
</template>

<script setup>
import cartStore from "@/store/modules/cart/cartStore.js";
const store = cartStore();
</script>

<style scoped>
.buttom-bar__select {
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 32px;
}

button {
  color: #0c1d00;

  background: #e6770b;
  font-family: Yagoinini;
  font-size: 25px;
  /* border-radius: 20px; */
}
button.cancel {
  background: #0c1d00;
  border: 3px solid #e6770b;
  color: #ccc;
}
</style>
