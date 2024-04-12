<template>
  <div class="cart__selector">
    <button @click="selectButtom" class="cart__tab u-text-small" :class="{ open: store.showProductItem }">
      <div class="">
        <span> {{ calcUserSelectDay }}</span>
      </div>
    </button>
    <button @click="selectButtom" class="cart__tab u-text-small tracking-[3px]"
      :class="{ open: !store.showProductItem }">
      {{ scalcTextRight }}
    </button>
  </div>
</template>

<script setup>
import { computed, toRefs, } from "vue";
import cartStore from "@/store/modules/cart/cartStore.js";

const store = cartStore();
const { calcUserSelectDay } = toRefs(store)


const scalcTextRight = computed(() =>
  store.getExistenceProduct ? "我的訂單" : "訂單日期"
);

const selectButtom = function () {
  store.showProductItem = !store.showProductItem;
};


</script>

<style scoped>
* {
  font-family: Yagoinini;
  letter-spacing: 3px;
}

.cart__selector {
  position: relative;
  display: flex;
  height: 72px;
}

.cart__tab {
  flex: 1;
  color: #ccc;
  background: #5d0066;
}

.open.cart__tab {
  background: #5d0066;
  border-top: 3px solid #76ff00;
  color: #f5c024;
}
</style>
