<template>
  <div class="highlightCard__wrap flex flex-col items-center u-grid-col-3  ">
    <div class="highlightCard__photo">
      <figure>
        <img class="rounded-md object-cover w-full" :src="imgPath" alt="" />

      </figure>
    </div>
    <div class="highlightCard__title u-text-small">
      <h3>{{ title }}</h3>
    </div>
    <collapsible-text :paragraph="paragraph" />
  </div>
</template>

<script setup>
import CollapsibleText from "../text/CollapsibleText.vue";

defineProps({
  title: { name: String },
  paragraph: { name: String },
  imgPath: { name: String, default: "https://picsum.photos/800" },
});
</script>

<style scoped>
.highlightCard__wrap> :not(:first-child) {
  margin-top: 1rem;
}

figure {
  aspect-ratio: 16/9;
}
</style>
