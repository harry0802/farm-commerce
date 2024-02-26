<template>
  <section>
    <div class="anchor-poinet__product" :id="heading"></div>
    <div class="product__heading">
      <h2 class="u-text-medium">{{ heading }}字首大寫</h2>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({ heading: String });
</script>

<style></style>
