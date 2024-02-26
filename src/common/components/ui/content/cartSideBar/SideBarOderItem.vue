<template>
  <!-- 商品內容，與數量 -->
  <div class="oder__item p-4">
    <ul class="item__list">
      <li class="item__list--photo">
        <img src="https://picsum.photos/90" alt="" />
      </li>
      <li class="item__list--info">
        <div class="info__detail">
          <a class="u-text-omit-2" href="#">商品名稱：</a>
          <a class="u-text-omit-1" href="#">來源：</a>
          <span class="mt-2">商品量詞：</span>
        </div>
      </li>
      <product-edit-control />
    </ul>

    <oder-popup-card>
      <div class="update__tips">
        <!-- 當達到某個條件時，動態產出 -->
        <!-- 例如選擇更新成功 -->
      </div>
    </oder-popup-card>
  </div>
</template>

<script setup>
import ProductEditControl from "../../../cartsidebar/cartProdut/productItem/ProductEditControl.vue";
import OderPopupCard from "../../../ui/card/OderPopupCard.vue";
import { defineProps } from "vue";

const props = defineProps({
  productName: String,
  supplier: String,
  // quantity: Number,
  netWeigth: Number,
});
props;
</script>

<style scoped>
* {
  font-family: GalmuriMono9;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 2px;
}
.oder__item {
  position: relative;
  border-radius: 2px;
  /* border-bottom: 2px solid; */
  /* @apply border-color-eva-light-green; */
  box-shadow: 0rem 0px 4px 0px #efefef;

  /* background-color: #fff; */
}

.item__list {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--xs-grid-colm-gap);
  align-items: flex-start;
}

img {
  width: 90px;
}

.info__detail {
  display: flex;
  flex-direction: column;
}
</style>
