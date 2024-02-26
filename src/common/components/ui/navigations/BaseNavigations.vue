<template>
  <nav>
    <slot></slot>
  </nav>
</template>

<script>
export default {
  props: {
    desc: {
      name: String,
      require: false,
    },
  },
};
</script>

<style scoped>
nav {
  position: relative;

  padding: 0 24px;
  @apply hidden md:block z-10;
}
</style>
