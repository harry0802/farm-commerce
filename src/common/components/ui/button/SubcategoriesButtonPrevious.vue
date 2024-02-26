<template>
  <button class="subcategorys__item" @click="backing">
    <div class="icon__wrap--back">
      <Icon class="iconify__back" icon="pixelarticons:chevron-right" />
    </div>
  </button>
  <a class="subcategorys__link" href="#">{{ props.types }}</a>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { defineProps } from "vue";
import rootStore from "@/store/rootStore.js";
const props = defineProps({
  types: {
    type: String,
    default: "設定中...",
  },
});

const store = rootStore();
const backing = function () {
  store.siderBarMenuPreviou();
};
</script>

<style scoped>
.subcategorys__item {
  @apply absolute inset-y-1/2 transform -translate-y-1/2 flex items-center justify-between;
}

.icon__wrap {
  @apply flex justify-end items-center w-6 h-6;
}

.icon__wrap--back {
  justify-content: flex-start;
  left: 0;
}

.iconify__back {
  color: #00bd26;
  stroke-width: 0.5px; /* 设置描边的粗细为 8 像素 */
  stroke: currentColor;
  @apply transform rotate-180;
}

.subcategorys__link {
  @apply flex h-12 ml-10 items-center flex-grow border-b;
  border-color: #f2f2f2;
}
</style>
