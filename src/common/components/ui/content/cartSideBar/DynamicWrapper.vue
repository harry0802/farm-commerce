<template>
  <div class="dynamic__wrapper">
    <div class="dynamic__content u-scroll-eva-ion">
      <slot name="list"></slot>
    </div>
    <div class="dynamic__buttom-bar p-4 pb-6">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.dynamic__wrapper {
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  top: 72px;
  left: 0;
  right: 0;
  bottom: 0;
}

@media only screen and (min-width: 950px) {
  .dynamic__wrapper {
    left: calc(100% - 500px);
  }
}

.dynamic__content {
  flex: 1;
  background: rgba(50, 50, 84, 0.8);
}

.dynamic__content::-webkit-scrollbar {
  background: transparent;
}

.dynamic__buttom-bar {
  background: #0c1d00;
  z-index: 1;
}
</style>
