<template>
  <div>
    <home-title class="text-b-color-green-light" :title="'細膩之處的別樣光華'"></home-title>

    <highlight-article></highlight-article>
  </div>
</template>

<script setup>
import HomeTitle from "../ui/title/HomeTitle.vue";
import HighlightArticle from "../ui/text/HighlightArticle.vue";
</script>

<style scoped>
div {
  background: #b8e0d6;
}
</style>
