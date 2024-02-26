<template>
  <div class="apply__promo-codes my-2">
    <!-- inline button 尚未點選-->
    <button class="promo-codes__openform" v-if="isButton" @click="openForm">
      <Icon class="mr-2" icon="ic:round-add" />
      添加折扣碼
    </button>
    <!-- 點選後隱藏 -->
    <form class="flex" v-else @submit.prevent>
      <input type="text" placeholder="請輸入折扣碼" v-model="inputValue" />
      <button v-if="calcInputValue === 0" @click="closeForm">關閉</button>
      <button v-else @click="sendPromo">使用</button>
    </form>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { computed, ref } from "vue";

const selectPromo = ref("button");

const isButton = computed(() => selectPromo.value === "button");

const openForm = function () {
  selectPromo.value = "form";
};
const closeForm = function () {
  selectPromo.value = "button";
};

const inputValue = ref("");
const calcInputValue = computed(() => inputValue.value.length);

const sendPromo = function () {
  // console.log(inputValue.value);
  // 發送到後台檢查
  inputValue.value = "";
};
</script>

<style scoped>
* {
  font-family: GalmuriMono9;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 2px;
}
.promo-codes__openform {
  display: flex;
  align-items: center;
}

form {
  border-bottom: 1px solid lawngreen;
  justify-content: space-between;
  flex-wrap: nowrap;
}

input {
  width: 80%;
  background: transparent;
  color: #fff;
  padding: 5px;
}
input::placeholder {
  color: #fff;
}

input:focus {
  outline: none;
}
</style>
