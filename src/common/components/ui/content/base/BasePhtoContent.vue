<template>
  <figure class="rounded-lg overflow-hidden" :class="reverse ? 'img__recontainer' : 'img__container'">
    <img class="response__img--col-1 object-cover " :src="img" alt="" />
  </figure>
</template>

<script>
export default {
  props: { reverse: { type: Boolean, default: false }, img: { String, default: 'https://picsum.photos/800' } },
};
</script>

<style scoped>
.img__container {
  @apply col-span-full sm:col-start-3 sm:col-end-11;
}

.img__recontainer {
  @apply col-span-full sm:col-start-3 sm:col-end-11
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
