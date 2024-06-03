<template>
  <section class="mobile__nav  bg-white  h-16 flex  w-full px-5  justify-between items-center lg:hidden">
    <div class="mobile__menu--button flex  items-center flex-1">
      <mobile-hamburger v-show="showMenu" />
      <mobile-search v-model:showMenu="showMenu"></mobile-search>
    </div>

    <transition name="fade">
      <div v-if="showMenu" class="mobile__logo">
        <figure class="flex justify-between items-center">
          <RouterLink :to="{ name: 'home' }">
            <img src="@/assets/imgs/organicX70.svg" alt="Farm Village Logo" size="64px" class="h-16" />
          </RouterLink>
        </figure>
      </div>
    </transition>

    <div v-if="showMenu" class="mobile__car flex flex-1 justify-end">
      <a v-if="store.existenceProduct" href="#" class="button__login">
        Login
      </a>
      <span v-else-if="!store.existenceProduct && !store.getshowCart">
        <Icon class="text-color-primary text-2xl" icon="simple-line-icons:basket" @click="store.openCart()" />
      </span>

      <span v-show="store.getshowCart" class="text-color-primary text-2xl">
        <Icon icon="pixelarticons:close" @click="store.closeCart()" />
      </span>
    </div>
    <SidebarOverlay />
  </section>
</template>

<script setup>
import MobileHamburger from "../../ui/menu/MobileHamburger.vue";
import MobileSearch from "../../header/mobile/MobileSearch.vue";
import SidebarOverlay from "../../ui/sidebar/MobileSidebarOverlay.vue";
import cartStore from "@/store/modules/cart/cartStore.js";


import { ref } from "vue";
import { Icon } from "@iconify/vue";
const store = cartStore();
const showMenu = ref(true);

</script>

<style scoped>
.button__login {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.142857em;
  text-transform: uppercase;
  color: #136450;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from,
.fade-leave-to {
  display: none;
}
</style>
