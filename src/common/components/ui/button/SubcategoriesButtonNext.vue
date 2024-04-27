<template>
  <div>
    <RouterLink class="subcategorys__item flex w-full items-center justify-between border-b border-color-grey-light"
      :to="`/shop/${project.category}`">
      {{ project.category }}
      <Icon @click="showSubcategories" v-if="project.subcategories?.length > 0" icon="pixelarticons:chevron-right" />
    </RouterLink>
  </div>
</template>


<script setup>
import { Icon } from "@iconify/vue";
const props = defineProps({
  project: {
    type: Object,
    default: "設定中...",
  },
  showSubcategories: {
    type: Function
  }
});

</script>

<style scoped>
* {
  font-family: cjkfonts;
}

.subcategorys__item {
  height: 2.875rem;
}


.icon__wrap.icon__wrap--back {
  position: absolute;
  justify-content: flex-start;
  left: 0;
}


.iconify {
  color: #00bd26;
  stroke-width: 0.5px;
  /* 设置描边的粗细为 8 像素 */
  stroke: currentColor;
}

.iconify.iconify__back {
  transform: rotate(-180deg);
}
</style>
