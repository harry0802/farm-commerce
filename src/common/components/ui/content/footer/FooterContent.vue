<template>
  <div class="footer">
    <div class="primary">
      <slot name="primaryItem"></slot>
    </div>

    <div class="secondary">
      <slot name="secondaryItem"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  @apply container grid grid-cols-1	gap-10;
  grid-template-areas:
    "primary"
    "secondary";
}
.primary {
  grid-area: primary;
}
.primary {
  grid-area: secondary;
}
@media only screen and (min-width: 768px) {
  .footer {
    @apply container grid grid-cols-2  gap-10;
    grid-template-areas: "secondary primary ";
  }
}
</style>
