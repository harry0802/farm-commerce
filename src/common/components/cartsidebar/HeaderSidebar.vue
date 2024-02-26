<template>
  <div id="cart">
    <transition name="overlay">
      <div v-show="store.showCart">
        <sidebar-overlay :switchOverlay="store.showCart" :switchOverlayFn="store.closeCart" :target="target"
          class="z-[1]" />
      </div>
    </transition>
    <transition>
      <div class="cart__container" ref="target" v-show="store.showCart">
        <aside class="cart__content">
          <header-side-bar-selector-btn />
          <cart-date v-if="!store.showProductItem"></cart-date>
          <cart-produt v-else />
        </aside>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HeaderSideBarSelectorBtn from "../ui/button/HeaderSideBarSelectorBtn.vue";
// import DynamicPhoto from "../ui/content/cartSideBar/DynamicPhoto.vue";
// import ProcutLowesMinimum from  '../cartsidebar/procutItem/ProcutLowesMinimum.vue'
import SidebarOverlay from "../ui/sidebar/SidebarOverlay.vue";

import CartProdut from "../cartsidebar/cartProdut/CartProdut.vue";
import cartDate from "../../components/cartsidebar/cartDate/CartDate.vue";
import cartStore from "@/store/modules/cart/cartStore.js";

const store = cartStore();

const target = ref(null);
</script>

<style scoped>
.cart__container {
  position: fixed;
  top: 64px;
  right: 0;
  z-index: 2;
  background: #916caf;
  border-left: 3px solid #0c1d00;
  border-bottom: 3px solid #0c1d00;
  overflow: hidden;
}

.cart__content {
  width: 100vw;
  height: calc(100vh - 64px);
  display: block;
  transform: translateX(0);
}

@media only screen and (min-width: 950px) {
  .cart__container {
    top: 120px;
  }

  .cart__content {
    width: 500px;
    height: calc(100vh - 120px);
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  /* 从右侧滑入 */
  transform: translateX(100%);
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.4s;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

.overlay-enter-to,
.overlay-leave-from {
  opacity: 1;
}
</style>
