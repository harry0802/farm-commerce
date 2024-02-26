<template>
  <a
    :class="{ 'subcategorys--link': !showSubcategorys, soCial: props.isItem }"
    href="#"
    >{{ props.types }}
  </a>
</template>

<script setup>
import { defineProps, inject } from "vue";
const props = defineProps({
  types: {
    type: String,
    default: "設定中...",
  },
  isItem: { type: Boolean },
});

const showSubcategorys = inject("showSubcategorys");
console.log(showSubcategorys);
</script>
<style scoped>
.subcategorys--link {
  @apply flex h-12 ml-10 items-center flex-grow border-b;
  border-color: #f2f2f2;
}
.soCial {
  margin: 0;
}
</style>
