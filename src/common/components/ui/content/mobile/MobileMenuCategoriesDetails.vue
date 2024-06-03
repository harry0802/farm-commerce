<template>
  <div v-if="currentIndex === project.project" class=" flex flex-col w-full">
    <div class="relative" v-if="!subcategories">
      <Icon @click="store.siderBarMenuPreviou" class="iconify__back absolute inset-y-1/2 transform -translate-y-1/2 "
        icon="pixelarticons:chevron-right" />
      <RouterLink class="subcategorys__link flex h-12 ml-10 items-center flex-grow border-b border-color-grey-light"
        :to="`/shop/${project.project}`"> {{ project.project }}</RouterLink>
    </div>
    <CategoriesNavgitions v-bind="project" v-model:subcategories="subcategories" />
  </div>

</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import rootStore from "@/store/rootStore.js";
import CategoriesNavgitions from "@/common/components/ui/navigations/CategoriesNavgitions.vue";
const currentIndex = defineModel('currentIndex')
const props = defineProps({
  project: {
    type: Object
  }
});

const subcategories = ref(false)
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
