<template>
  <div id="cart">
    <teleport to="body">
      <transition name="fade">
        <div v-if="store.showCart">
          <div class="overlay fixed  w-full inset-0  h-full  z-[0]" :class="{ open: store.showCart }"></div>
        </div>
      </transition>
    </teleport>
    <teleport to="#header">
      <transition>
        <div class="cart__container" ref="target" v-if="store.showCart">
          <aside class="cart__content">
            <header-side-bar-selector-btn />
            <cart-date v-if="!store.showProductItem"></cart-date>
            <cart-produt v-else />
          </aside>
        </div>
      </transition>
    </teleport>

  </div>

</template>

<script setup>
import { ref, watch } from "vue";
import HeaderSideBarSelectorBtn from "../ui/button/HeaderSideBarSelectorBtn.vue";
import { onClickOutside } from "@vueuse/core";
// import DynamicPhoto from "../ui/content/cartSideBar/DynamicPhoto.vue";
// import ProcutLowesMinimum from  '../cartsidebar/procutItem/ProcutLowesMinimum.vue'
import SidebarOverlay from "../ui/sidebar/SidebarOverlay.vue";

import CartProdut from "../cartsidebar/cartProdut/CartProdut.vue";
import cartDate from "../../components/cartsidebar/cartDate/CartDate.vue";
import cartStore from "@/store/modules/cart/cartStore.js";

const store = cartStore();

const target = ref(null);


onClickOutside(target, () => {
  store.closeCart()
})


watch(() => store.showCart, (newVal) => {
  newVal ?
    document.body.style.overflow = 'hidden' :
    document.body.style.overflow = 'auto'
})



</script>

<style scoped>
.cart__container {
  position: absolute;
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

.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-leave-to {
  opacity: 0;
}
</style>
