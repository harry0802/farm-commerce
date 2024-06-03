<template>
  <dynamic-wrapper>
    <template #list>
      <dynamic-photo v-if="!isProduct">
        <figcaption class="u-text-medium text-color-eva-dark-yellow mb-4">
          請添加商品
        </figcaption>
        <img class=" inset-0" src="@/assets/imgs/cartImg/pixel-art-box.png" alt="" />
      </dynamic-photo>
      <CartProductOder v-else />
    </template>

    <template #bottom>
      <CartProductBottomBtn />
    </template>
  </dynamic-wrapper>
</template>

<script setup>
import DynamicWrapper from "../../ui/content/cartSideBar/DynamicWrapper.vue";
import DynamicPhoto from "../../ui/content/cartSideBar/DynamicPhoto.vue";
import CartProductOder from "../cartProdut/CartProductOder.vue";
import CartProductBottomBtn from "../../ui/button/CartProductBottomBtn.vue";
import { inject, computed, } from "vue";
const { productCart } = inject('orderStore')
const isProduct = computed(() => productCart.value?.length > 0 ?? false)
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
