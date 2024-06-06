<template>
  <base-navigations :desc="'Primary Navigation'">
    <div class="primary-nav__content nav-container  flex-grow-0">

      <PrimaryIcon />

      <primary-search-bar v-if="searchState" />
      <nav-menu v-else />


      <PrimaryCar />
    </div>
  </base-navigations>
</template>

<script setup>
import BaseNavigations from "../ui/navigations/BaseNavigations.vue";
import NavMenu from "../ui/menu/HeaderMenu.vue";
import PrimarySearchBar from "../header/PrimarySearchBar.vue";
import PrimaryCar from "@/common/components/header/primary/PrimaryCar.vue";
import PrimaryIcon from "@/common/components/header/primary/PrimaryIcon.vue";
import { inject } from "vue";

const { searchState, } = inject('useSearch')

</script>

<style scoped>
.primary-nav__content {
  max-height: 80px;
  position: relative;
}
</style>
