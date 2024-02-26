<template>
  <button
    v-if="showSubcategory"
    @click="openDetails"
    class="subcategorys__item"
  >
    {{ props.types }}
    <div class="icon__wrap">
      <Icon icon="pixelarticons:chevron-right" />
    </div>
  </button>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { defineProps } from "vue";
import rootStore from "@/store/rootStore.js";
import { computed } from "vue";
const props = defineProps({
  types: {
    type: String,
    default: "設定中...",
  },
});
const store = rootStore();
const openDetails = () => store.siderBarMenuNext();

const showSubcategory = computed(() => store.getSiderBarMenu);
</script>

<style scoped>
.subcategorys__item {
  @apply flex w-full items-center justify-between border-b;
  border-color: #f2f2f2;
  height: 2.875rem;
}
.subcategorys__item.back {
  /* margin-left: 40px; */
}
.icon__wrap {
  @apply flex justify-end items-center w-6 h-6;
}

.icon__wrap.icon__wrap--back {
  position: absolute;
  justify-content: flex-start;
  left: 0;
}
.icon__back {
}
.iconify {
  color: #00bd26;
  stroke-width: 0.5px; /* 设置描边的粗细为 8 像素 */
  stroke: currentColor;
}
.iconify.iconify__back {
  transform: rotate(-180deg);
}
</style>
