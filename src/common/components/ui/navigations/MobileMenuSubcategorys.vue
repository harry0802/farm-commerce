<template>
  <button @click="store.siderBarMenuNext"
    class="subcategorys__item flex w-full items-center justify-between border-b border-color-grey-light">
    {{ project }}
    <Icon class="" icon="pixelarticons:chevron-right" />
  </button>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import rootStore from "@/store/rootStore.js";
defineProps({
  project: {
    type: String,
    default: "設定中...",
  },
});
const store = rootStore();
</script>

<style scoped>
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
