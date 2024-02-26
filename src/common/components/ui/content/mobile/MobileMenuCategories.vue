<template>
  <div class="mobile-menu__categories">
    <mobile-menu-subcategorys v-if="showSubcategory"></mobile-menu-subcategorys>
    <mobile-menu-categories-details v-else></mobile-menu-categories-details>
  </div>
</template>

<script setup>
import MobileMenuSubcategorys from "../../navigations/MobileMenuSubcategorys.vue";
import MobileMenuCategoriesDetails from "./MobileMenuCategoriesDetails.vue";
import { onMounted, computed } from "vue";
import rootStore from "@/store/rootStore.js";
const store = rootStore();
const showSubcategory = computed(() => store.getSiderBarMenu);

onMounted(() => store.siderBarMenuInit());
</script>
