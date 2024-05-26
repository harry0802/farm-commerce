<template>
  <dl class="oder__summary px-4 pt-2 pb-4">
    <div class="summary__item leading-7	">
      <span>小計:</span>
      <span>{{ subtotal }}</span>
    </div>
    <div class="summary__item leading-7	">
      <span>外送費:</span>
      <span> {{ deliveryFee }}</span>
    </div>

    <!-- 當輸入完成折扣碼出現 -->
    <!-- 折扣碼強制大寫 -->
    <div v-if="isDiscount" class="promo__codes my-2 flex justify-between">
      <span class="visually-hispanen">折扣碼:</span>
      <span class="codes__detail">
        <span class="text-color-eva-light-green"> BOOKSAREMAGIC</span>
        <!-- inline -->
        <button class="text-color-eva-light-red" @click="removePromoCode">
          刪除折扣碼
        </button>
      </span>
    </div>
    <!-- 當輸入完成折扣碼出現 End -->
    <!-- 輸入折扣碼 -->
    <!-- 二選一情況 為點選為添加，點選出現折扣碼表單 -->
    <product-promo v-else />
    <!-- 當輸入折扣碼時才會出現的折扣金額 -->
    <div v-if="isDiscount" class="summary__item discount leading-10">
      <span>已折扣:</span>
      <span>{{ discount }} 測試</span>
    </div>
    <!-- 總計 -->
    <div class="summary__item total">
      <span>總計:</span>
      <span class="">{{ total }}</span>
    </div>
  </dl>
</template>

<script setup>
import { ref, computed } from "vue";
import ProductPromo from "../../../cartsidebar/cartProdut/productItem/ProductPromo.vue";

// furryfriends

const props = defineProps({
  subtotal: Number,
  deliveryFee: Number,
  discount: Number,
  total: Number,
  promoCode: Number,
});
const isDiscount = ref(false);

const removePromoCode = function () {
  isDiscount.value = !isDiscount.value;
  //在後台移除則扣碼 並從新計算價錢
};




</script>

<style scoped>
* {
  font-family: GalmuriMono9;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  letter-spacing: 2px;
}

.oder__summary {
  border-radius: 10px;
}

.summary__item {
  display: flex;
  justify-content: space-between;
}

.codes__detail {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.thePromoCode {
  @apply ml-auto mr-2
}

.usePromoCode {
  @apply line-through decoration-color-validate-error decoration-[3px]
}
</style>
