<template>
  <aside class="category__nav py-6 hidden min-[950px]:flex">
    <slot name="title"></slot>
    <slot name="navlist"></slot>
  </aside>
</template>

<script>
export default {};
</script>

<style scoped>
.category__nav {
  position: sticky;
  width: 100%;
  height: calc(100vh - 140px);
  flex-direction: column;
  top: 80px;
}
</style>
