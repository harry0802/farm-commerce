<template>
  <section class="relative">
    <div class="section-container grid-line py-10 px-4 relative sm:px-6 lg:p-10 lg:py-[60px]">
      <div class="col-span-full text-center">
        <h3 class="u-text-large">{{ title }}</h3>
      </div>
    </div>
  </section>
</template>

<script>
import MountainFlow from "../../ui/section/MountainFlow.vue";
export default {
  components: { MountainFlow },
  props: {
    title: {
      name: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
