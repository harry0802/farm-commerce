<template>
  <base-navigations :desc="'Primary Navigation'">
    <primary-search-bar v-if="searchState" @closeSearch="closeSearch" :searchState="searchState" />
    <div class="primary-nav__content nav-container">
      <div class="nav__icon">
        <figure>
          <RouterLink :to="{ name: 'home' }">
            <img src="@/assets/imgs/log/organicX70-header.svg" alt="" />
          </RouterLink>
        </figure>
      </div>


      <nav-menu />

      <div class="nav__car text-color-primary">
        <div class="relative  group w-full " v-if="accountStore.isaAuthenticated">
          <RouterLink :active-class="'active'" class="foryou__link " to="/shop/home/foryou">
            <Icon class="text-2xl " icon="memory:home-thatched" />
          </RouterLink>
          <PersonalStyleMenu />
        </div>

        <button aria-label="Open Serach Bar" class="icon__wrapper " @click="showSearch">
          <Icon icon="pixelarticons:search" />
        </button>

        <button v-if="!store.existenceProduct && !store.getshowCart" aria-label="Open Car" class="icon__wrapper">
          <Icon icon="mdi:basket-fill" @click="store.openCart" />
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
import { ref, inject } from "vue";
import { Icon } from "@iconify/vue";
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
