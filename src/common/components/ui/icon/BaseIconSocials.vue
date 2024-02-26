<template>
  <div>
    <a :href="path">
      <img :src="imgPath" :alt="des" />
    </a>
  </div>
</template>

<script>
export default {
  props: ["path", "imgPath", "des"],
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 1.8rem;
  height: 1.8rem;
}
</style>
