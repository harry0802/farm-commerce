<template>
  <div v-if="currentIndex === project.category" class=" flex flex-col ">
    <div class="relative ">
      <Icon @click="store.siderBarMenuPreviou" class="iconify__back absolute inset-y-1/2 transform -translate-y-1/2 "
        icon="pixelarticons:chevron-right" />
      <RouterLink class="subcategorys__link flex h-12 ml-10 items-center flex-grow border-b border-color-grey-light"
        :to="`/shop/${project.category}`"> {{ project.category }}</RouterLink>
    </div>
    <subcategories-navigations :project="project.subcategories" />
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import rootStore from "@/store/rootStore.js";
import SubcategoriesNavigations from "@/common/components/ui/navigations/SubcategoriesNavigations.vue";
const currentIndex = defineModel('currentIndex')
defineProps({
  project: {
    type: Object
  }
});
const store = rootStore();
</script>

<style scoped>
.iconify__back {
  color: #00bd26;
  stroke-width: 0.5px;
  stroke: currentColor;
  @apply transform rotate-180;
}
</style>
