<template>
  <dynamic-bottom-bar>
    <div class="flex-1 flex flex-col items-center" v-if="!accountStore.isaAuthenticated">
      <!-- 透過 router 首位 判斷是否登陸。 -->
      <!-- 是進入結帳 ，否進入登錄頁面 -->
      <a class="cta__buttom u-pirmary-button mb-2" href="#">提交表單</a>
      <!-- 當檢測沒有登陸時 -->
      <p class="text-center">
        請在
        <strong> 9 月 30 日星期六上午 11:59</strong>
        之前建立帳戶，<br />否則您購物車中的商品將被刪除。
        <br />已經是會員 ？ <router-link :to="{ name: 'login' }"> 登入</router-link>
      </p>
    </div>


    <div class="flex-1 flex justify-center" v-else-if="!product">
      <router-link :to="{ path: '/shop/Farm Boxes' }" class="cta__buttom u-pirmary-button mb-2">開始購物！</router-link>
    </div>

    <div v-else>
      <div class="flex  ">
        <Icon class="text-color-eva-light-green text-3xl w-[100px]  mb-auto" icon="fluent:box-checkmark-20-regular" />
        <p class="text ">
          無需結帳！在截止時間之後，您的購物車中的商品將自動扣款。
          若要<span class=" text-color-eva-dark-yellow"> 跳過或編輯</span>，
          請於 <span class="text-color-eva-light-red">{{
      lastEditTrans }}上午11:59前處理。</span>
        </p>
      </div>
    </div>
  </dynamic-bottom-bar>
</template>

<script setup>
import DynamicBottomBar from "../content/cartSideBar/DynamicBottomBar.vue";
import useAccountStore from "@/store/modules/account/accountStore.js";
import { inject, computed } from "vue";
import { Icon } from '@iconify/vue';
import dayjs from "dayjs";

const accountStore = useAccountStore()
const { product } = inject('findOrderDate')
const store = inject('store')

const lastEditTrans = computed(() => {
  if (store.selectionDay.orderDate) {
    let [y, m, d] = store.selectionDay.orderDate.split('/')
    return dayjs(`${y}-${m}-${d - 1}`).format("dd, M月D")
  }
})

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
