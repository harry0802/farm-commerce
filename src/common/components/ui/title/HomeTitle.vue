<template>
  <section v-fade-in class="relative">
    <div class="section-container grid-line py-10 px-4 relative sm:px-6 lg:p-10 lg:py-[60px]">
      <div class="col-span-full text-center">
        <h3 class="u-text-large " :class="cn(props.class)">{{ title }}</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
import { cn } from "@/lib/utils.js";
const props = defineProps({
  title: {
    name: String,
    required: true,

  },
  class: { type: null, required: false },

})



</script>

<style scoped></style>
