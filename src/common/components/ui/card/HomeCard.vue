<template>
  <div class=" max-w-[370px]">
    <div class="card">
      <div class="card-item relative rounded-lg bg-white p-4 py-10">
        <slot />
        <div class="card-Img-Border " :class="cn(props.class)"></div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { cn } from "@/lib/utils";

const props = defineProps({
  class: { type: null, required: false },
});


</script>

<style scoped>
.card {
  position: relative;
  background-color: #afafaf;
  padding: 3px;
  clip-path: inset(0 round 10px);
  z-index: 1;
  overflow: hidden;
}
</style>
