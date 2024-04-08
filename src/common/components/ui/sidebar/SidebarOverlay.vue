<template>
  <div class="overlay fixed inset-0  h-full " :class="{ open: switchOverlay }"></div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";
import { watch, } from "vue";

const props = defineProps({
  switchOverlay: Boolean,
  switchOverlayFn: Function,
  target: Element,
});

watch(
  () => props.target,
  (newValue) => {
    if (newValue) {
      onClickOutside(newValue, () => {
        props.switchOverlayFn();
      });
    }
  }
);


watch(() => props.switchOverlay, (newVal) => {
  console.log(newVal);
  newVal ?
    document.body.style.overflow = 'hidden' :
    document.body.style.overflow = 'auto'
})




</script>
<style scoped></style>
