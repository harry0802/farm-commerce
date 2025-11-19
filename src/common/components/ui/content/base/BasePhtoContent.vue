<template>
  <figure class=" rounded-lg overflow-hidden" :class="reverse ? 'img__recontainer' : 'img__container'">
    <img @load="isloading" loading="" :class="{ 'img__loaded--animate': loading }"
      class="img__load w-full h-full  object-cover  " :src="img" alt="" />
  </figure>
</template>

<script>
export default {
  props: { reverse: { type: Boolean, default: false }, img: { String, default: 'https://picsum.photos/800' } },
  data() {
    return { loading: false }
  },
  methods: {
    isloading() {
      this.loading = true
    }
  }
};
</script>

<style scoped>
img {
  aspect-ratio: 3884/2594;
  aspect-ratio: 1/.72;
}

.img__container {
  @apply col-span-full sm:col-start-3 sm:col-end-11;
}

.img__recontainer {
  @apply lg:order-1 col-span-full sm:col-start-3 sm:col-end-11
}


@media only screen and (min-width: 1024px) {
  .img__container {
    @apply lg:col-start-1 lg:col-end-7;
    align-self: center;
  }

  .img__recontainer {
    @apply lg:col-start-7 lg:col-span-6;
    align-self: center;
  }

  img {
    width: 100%;
  }
}
</style>
