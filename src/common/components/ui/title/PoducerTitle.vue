<template>
    <h1 class="u-text-large text-color-primary">{{ primaryTitle }}</h1>
    <h2 class="mt-2 u-text-medium text-color-grey-dark">{{ secondary }}</h2>
    <hr class=" mb-6 mt-4" />
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
    primaryTitle: String,
    secondary: String
})

</script>

<style scoped>
hr {
    border: unset;
    border: 1px solid #d3d3d3;
    border-radius: 24px;
}
</style>
