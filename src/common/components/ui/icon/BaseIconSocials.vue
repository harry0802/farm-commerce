<template>
  <a class="flex justify-center " :href="path">
    <img loading="lazy" class="w-full aspect-square " :src="imgPath" :alt="des" />
  </a>
</template>

<script>
export default {
  props: ["path", "imgPath", "des"],
};
</script>

<style scoped>
img {
  width: 1.8rem;
  height: 1.8rem;
}
</style>
