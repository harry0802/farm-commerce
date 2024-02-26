<template>
  <option :value="optionValue">{{ optionValue }}</option>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { useVModel } from "@vueuse/core";

const props = defineProps({
  optionValue: {
    type: Number,
  },
});

const emits = defineEmits("update:optionValue");

useVModel(props, "optionValue", emits);
</script>

<style></style>
