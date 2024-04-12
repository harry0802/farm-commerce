<template>
  <dynamic-bottom-bar>
    <div class="flex-1 flex flex-col items-center" v-if="hasProduct">
      <!-- 透過 router 首位 判斷是否登陸。 -->
      <!-- 是進入結帳 ，否進入登錄頁面 -->
      <a class="cta__buttom u-pirmary-button mb-2" href="#">提交表單</a>
      <!-- 當檢測沒有登陸時 -->
      <p>
        請在
        <strong> 9 月 30 日星期六上午 11:59</strong>
        之前建立帳戶，否則您購物車中的商品將被刪除。已經是會員 ？
        登入
      </p>
    </div>
    <div class="flex-1 flex justify-center" v-else>
      <a class="cta__buttom u-pirmary-button mb-2" href="#">開始購物！</a>
    </div>
  </dynamic-bottom-bar>
</template>

<script setup>
import DynamicBottomBar from "../content/cartSideBar/DynamicBottomBar.vue";

import { ref } from "vue";

const hasProduct = ref(true);
</script>

<style scoped>
* {
  font-family: GalmuriMono9;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 2px;
  color: #fff;
}

.u-pirmary-button {
  max-width: 400px;
  width: 100%;
  font-family: Yagoinini;
  font-size: 25px;
  color: #0c1d00;
  background: #e6770b;
}
</style>
