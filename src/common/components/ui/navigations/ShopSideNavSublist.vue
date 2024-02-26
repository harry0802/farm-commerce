<template>
  <ul class="category__nav--sublist category__nav--grid relative mt-6 pl-6 ">
    <li class="sublist__item relative" :class="{ active: currentId === productSubItem }">
      <RouterLink :class="{ active: currentId === productSubItem }" :to="productSubItem">{{ productSubItem }}</RouterLink>
    </li>
    <li class="sublist__item relative">
      <a href="#">子項目設定中</a>
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  productSubItem: String,
  currentId: String
});
props;
</script>

<style scoped>
a {
  font-family: SentyGoldSand;

}

.category__nav--sublist::before {
  position: absolute;
  content: "";
  width: 4px;
  height: 100%;
  /* left: 0; */
  background: #e2e2e2;
  border-radius: 5px;
}

.active.sublist__item::before {
  content: "";
  position: absolute;
  left: -1.5rem;
  display: block;
  width: 4px;
  height: 100%;
  background: #136450;
  z-index: 1;
}

.active {
  @apply text-color-eva-dark-orange;
}
</style>
