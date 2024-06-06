<template>
  <RouterLink class="group u-grid-col-3  cursor-pointer" :to="`/product/${path}`">
    <figure>
      <div class="w-full h-full rounded overflow-hidden">
        <img loading="lazy"
          class="response__img--col-3 w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          :src="img" alt="title" />
      </div>
      <figcaption class="mt-4 text-2xl">
        <h3>{{ text }}</h3>
      </figcaption>
    </figure>
    <div class="mt-4 btn__linkUnderline--animate underline-offset-8 text-color-primary-light font-[SentyGoldSand]">現在就買
    </div>
  </RouterLink>
</template>

<script setup>
const props = defineProps({ img: { String, }, text: { String }, path: { String } })

</script>

<style scoped></style>
