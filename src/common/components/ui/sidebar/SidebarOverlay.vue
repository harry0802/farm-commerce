<template>
  <div class="overlay" :class="{ open: switchOverlay }"></div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";
import { defineProps, watch } from "vue";

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
</script>
<style scoped></style>
