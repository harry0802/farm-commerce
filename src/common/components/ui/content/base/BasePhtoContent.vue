<template>
  <figure :class="reverse ? 'img__recontainer' : 'img__container'">
    <img class="response__img--col-1" src="https://picsum.photos/800" alt="" />
  </figure>
</template>

<script>
export default {
  props: { reverse: { type: Boolean, default: false } },
  data() {
    return {};
  },
};
</script>

<style scoped>
.img__container {
  @apply col-span-full sm:col-start-3 sm:col-end-11;
}

.img__recontainer {
  @apply col-start-3 sm:col-end-11
}


@media only screen and (min-width: 1024px) {
  .img__container {
    @apply lg:col-start-1 lg:col-end-7;
    align-self: center;
  }

  .img__recontainer {
    @apply lg:col-start-8 lg:col-span-5;
    align-self: center;
  }

  img {
    width: 100%;
  }
}
</style>
