<template>
  <dynamic-wrapper>
    <template #list>
      <dynamic-photo v-if="!calcOrderState">
        <figcaption class="u-text-medium text-color-eva-dark-yellow mb-4">
          請添加商品
        </figcaption>
        <img class=" inset-0" src="@/assets/imgs/cartImg/pixel-art-box.png" alt="" />
      </dynamic-photo>
      <cart-product-oder v-else />
    </template>

    <template #bottom>
      <cart-product-bottom-btn />
    </template>
  </dynamic-wrapper>
</template>

<script setup>
import DynamicWrapper from "../../ui/content/cartSideBar/DynamicWrapper.vue";
import DynamicPhoto from "../../ui/content/cartSideBar/DynamicPhoto.vue";
import CartProductOder from "../cartProdut/CartProductOder.vue";
import CartProductBottomBtn from "../../ui/button/CartProductBottomBtn.vue";
import dayjs from "dayjs";

import { inject, toRefs } from "vue";
const store = inject('store')
const { calcOrderState, myorder } = inject('orderStore')
const { selectionDay, } = toRefs(store)


console.log(dayjs('5/7').unix());



console.log(myorder.value);

console.log(dayjs('2024/5/7').unix());



const findOrderDate = function () {
  const select = selectionDay.value.currentWorkDay.substring(0, 4)

  // myorder.value.filter((o)=>o.order_date)


}



</script>

<style scoped>
* {
  font-family: Yagoinini;
}

img {
  margin: auto;
  max-width: 300px;
  aspect-ratio: 16/8;
}

figcaption {
  letter-spacing: 3px;
}
</style>
