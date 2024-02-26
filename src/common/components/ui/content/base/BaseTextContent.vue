<template>
  <div
    class="text__wrap"
    :class="reverse ? 'text__wrap--reverse ' : 'text__wrap '"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    reverse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scped>
.text__wrap,
.text__wrap--reverse {
  @apply col-span-full sm:col-start-3 sm:col-end-11;
}

@media only screen and (min-width: 1024px) {
  .text__wrap {
    @apply lg:col-start-8 lg:col-span-5;
  }
  .text__wrap--reverse {
    @apply lg:col-start-1 lg:col-end-7  lg:self-center;
  }
}
</style>
