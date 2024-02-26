<template>
  <a class="u-grid-col-3" :href="href">
    <figure>
      <img
        class="response__img--col-3"
        src="https://picsum.photos/800"
        alt="title"
      />
      <figcaption class="mt-4 text-2xl">
        <h3>來個土味派對，立即選購</h3>
      </figcaption>
    </figure>
    <div class="mt-4 text-color-primary-light">{{ title }}</div>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      name: String,
      require: true,
    },
    imgurl: {},
    title: {
      name: String,
      require: true,
    },
  },
};
</script>

<style scoped></style>
