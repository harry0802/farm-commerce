<template>
  <dynamic-wrapper>
    <template #list>
      <dynamic-photo v-if="!haveproduct">
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

import { ref } from "vue";

const haveproduct = ref(false);
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
