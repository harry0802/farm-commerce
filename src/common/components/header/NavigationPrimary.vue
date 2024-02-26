<template>
  <base-navigations :desc="'Primary Navigation'">
    <primary-search-bar v-if="searchState" @closeSearch="closeSearch" :searchState="searchState"></primary-search-bar>
    <div class="primary-nav__content nav-container">
      <div class="nav__icon">
        <figure>
          <RouterLink :to="{ name: 'home' }">
            <img src="@/assets/imgs/log/organicX70-header.svg" alt="" />
          </RouterLink>
        </figure>
      </div>
      <nav-menu />

      <div class="nav__car">
        <button aria-label="Open Serach Bar" class="icon__wrapper" @click="showSearch">
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
import { ref } from "vue";
import { Icon } from "@iconify/vue";
const store = cartStore();



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
</style>
