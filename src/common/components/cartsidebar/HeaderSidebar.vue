<template>
  <div id="cart">
    <teleport to="body">
      <transition name="fade">
        <div v-if="store.showCart">
          <div class="overlay fixed  w-full inset-0  h-full  z-[1]" :class="{ open: store.showCart }"></div>
        </div>
      </transition>
    </teleport>
    <teleport to="#header">
      <transition>
        <div class="cart__container" :style="{ marginTop: width > 950 ? marginTop + 'px' : '' }" v-if="store.showCart">
          <aside class="cart__content" :style="{ height: width > 950 ? `calc(100vh - ${80 + marginTop}px)` : '' }">
            <header-side-bar-selector-btn />
            <cart-date v-if="!store.showProductItem" />
            <cart-produt v-else />
          </aside>
        </div>
      </transition>
    </teleport>


  </div>

</template>

<script setup>
import { ref, onMounted, watch, onBeforeUnmount, provide, toRefs } from "vue";
import HeaderSideBarSelectorBtn from "../ui/button/HeaderSideBarSelectorBtn.vue";
import { onClickOutside, useWindowSize } from "@vueuse/core";
import CartProdut from "../cartsidebar/cartProdut/CartProdut.vue";
import cartDate from "../../components/cartsidebar/cartDate/CartDate.vue";
import cartStore from "@/store/modules/cart/cartStore.js";
import { useOrderStore } from "@/store/modules/order/index.js";

const { workDayLists, myorder, calcOrderState, setProductCart, productCart, handleSelectionDay } = toRefs(useOrderStore());
const store = cartStore();

const marginTop = ref(40);
const { width } = useWindowSize()






watch(() => store.showCart, (newVal) => {
  newVal ?
    document.body.style.overflow = 'hidden' :
    document.body.style.overflow = 'auto'
})


const handleScroll = () => {
  const scrollTop = window.scrollY;
  marginTop.value = scrollTop <= 40 ? 40 - scrollTop : 0;
}



onMounted(() => {
  const header = document.getElementById('header')
  onClickOutside(header, () => {
    store.closeCart()
  })
  window.addEventListener("scroll", handleScroll)
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
})

provide('store', store)
provide('orderStore', { myorder, calcOrderState, workDayLists, setProductCart, productCart, handleSelectionDay })

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
    top: 80px;
  }

  .cart__content {
    width: 500px;
    height: calc(100vh - 80px);
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
