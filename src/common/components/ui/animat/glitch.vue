<template>
  <svg>
    <filter id="glitch">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.05 0.05"
        numOctaves="1"
      ></feTurbulence>
    </filter>
    <slot></slot>
  </svg>
</template>

<script>
export default {};
</script>

<style></style>
