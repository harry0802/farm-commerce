<template>
  <li>
    <a :href="path">{{ text }} </a>
  </li>
</template>

<script>
export default {
  props: {
    path: {
      name: String,
      require: true,
    },
    text: {
      name: String,
      require: true,
    },
  },
};
</script>

<style scoped></style>
