<template>
  <div class="col-span-12 justify-self-center">
    <RouterLink class="u-pirmary-button" :to="path">
      {{ btnTitle }}
    </RouterLink>
  </div>
</template>

<script setup>

const props = defineProps({
  btnTitle: {
    type: String,
    required: true,
    default: ''
  },
  path: {
    required: false,
    default: '/'
  },
})
</script>

<style scoped></style>
