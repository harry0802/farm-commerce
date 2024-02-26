<template>
  <div class="col-span-12 justify-self-center">
    <a class="u-pirmary-button" href="#"> {{ btnTitle }} </a>
  </div>
</template>

<script>
export default {
  props: {
    btnTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
