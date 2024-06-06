<template>
  <section class="py-10 px-4 relative sm:px-6 lg:p-10 lg:py-[60px]">
    <div v-fade-in class="section-container grid-line " :class="cn($attrs.class ?? '')">
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
import { cn } from "@/lib/utils";

</script>
