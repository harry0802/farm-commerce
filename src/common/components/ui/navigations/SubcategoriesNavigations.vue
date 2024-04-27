<template>
  <RouterLink v-for=" subcategories in project"
    class=" subcategorys__item  h-12 flex place-items-center  ml-10 border-b border-color-grey-light"
    :to="`/shop/${subcategories}`">
    {{ subcategories }}
  </RouterLink>
</template>
<script setup>defineProps({
  project: {
    type: Object,
  },
});
</script>
<style scoped>
* {
  font-family: cjkfonts;
}
</style>
