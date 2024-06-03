<template>
  <base-navigations :desc="'Primary Navigation'">
    <div class="primary-nav__content nav-container flex-grow-0">
      <div class="nav__icon">
        <figure>
          <RouterLink :to="{ name: 'home' }">
            <img class="aspect-auto " src="@/assets/imgs/log/organicX70-header.svg" alt="" />
          </RouterLink>
        </figure>
      </div>


      <primary-search-bar v-if="searchState" @closeSearch="closeSearch" :searchState="searchState" />
      <nav-menu v-else />


      <div class="nav__car text-color-primary">
        <div class="relative  group w-full " v-if="accountStore.isaAuthenticated">
          <RouterLink :active-class="'active'" class="foryou__link " to="/shop/home/foryou">
            <Icon class="text-2xl " icon="memory:home-thatched" />
          </RouterLink>
          <PersonalStyleMenu />
        </div>

        <button v-if="!searchState" aria-label="Open Serach Bar" class="icon__wrapper " @click="showSearch">
          <Icon icon="pixelarticons:search" />
        </button>

        <button v-if="!store.existenceProduct && !store.getshowCart" @click="store.openCart" aria-label="Open Car"
          class="icon__wrapper relative ">
          <Icon icon="mdi:basket-fill" />
          <span v-if="productAmount !== 0"
            class="flex justify-center items-center absolute ring-0 top-0 -translate-y-[50%] translate-x-[50%]   border-[2px] border-color-primary rounded-full w-6 aspect-square bg-color-eva-dark-yellow font-[GalmuriMono9] text-sm font-black">{{
    productAmount }}</span>
        </button>

        <button v-if="store.getshowCart" class="text-color-primary text-2xl">
          <Icon icon="pixelarticons:close" @click="store.closeCart" />
        </button>
      </div>
    </div>
  </base-navigations>
</template>

<script setup>
import BaseNavigations from "../ui/navigations/BaseNavigations.vue";
import cartStore from "@/store/modules/cart/cartStore.js";
import NavMenu from "../ui/menu/HeaderMenu.vue";
import PrimarySearchBar from "../header/PrimarySearchBar.vue";
import PersonalStyleMenu from "@/common/components/ui/menu/PersonalStyleMenu.vue";
import { useOrderStore } from "@/store/modules/order/index.js";
import { ref, inject, toRefs, computed } from "vue";
import { Icon } from "@iconify/vue";

const { productCart, } = toRefs(useOrderStore())
const productAmount = computed(() => productCart.value?.length)


const store = cartStore();
const accountStore = inject('accountStore')
const searchState = ref(false);


const showSearch = function () {
  searchState.value = true;
};

const closeSearch = function (close) {
  searchState.value = close;
};



</script>

<style scoped>
.nav__icon {
  padding-right: 1.5rem;
}

.primary-nav__content {
  max-height: 80px;
  position: relative;
}

.nav__car {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  padding-left: 4.875rem;
}

.nav__car>button>svg {
  width: 24px;
  height: 24px;
}

img {
  width: 80px;
  height: 80px;
}

.foryou__link::after {
  content: "";
  position: absolute;
  display: block;
  width: 0%;
  height: 2px;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 0px);
  background: #136450;
  opacity: 0;
  border-radius: 20px;
  transition: all 0.2s cubic-bezier(0.45, 0, 0.55, 1),
    opacity 0.1s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav__car>div:hover .foryou__link::after {
  opacity: 1;
  transform: translate(-50%, 20px);
  width: 100%;
}

.active.foryou__link::after {
  opacity: 1;
  transform: translate(-50%, 20px);
  width: 100%;
}
</style>
