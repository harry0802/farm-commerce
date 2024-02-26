<template>
  <div class="highlightCard__wrap u-grid-col-3">
    <div class="highlightCard__photo">
      <figure>
        <img class="" :src="props.imgPath" alt="" />
      </figure>
    </div>
    <div class="highlightCard__title u-text-smaill">
      <h3>{{ props.title }}</h3>
    </div>
    <!-- <p class="whitespace-pre-line">{{ paragraph }}</p> -->
    <collapsible-text :paragraph="props.paragraph"></collapsible-text>
  </div>
</template>

<script setup>
import CollapsibleText from "../text/CollapsibleText.vue";
import { defineProps } from "vue";

const props = defineProps({
  title: { name: String },
  paragraph: { name: String },
  imgPath: { name: String, default: "https://picsum.photos/800" },
});
</script>

<style scoped>
.highlightCard__wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: end; */
  /* padding: 2.5rem 1rem; */
}
.highlightCard__wrap > :not(:first-child) {
  margin-top: 1rem;
}

img {
  margin: auto;
  object-fit: cover;
  width: 66%;
}
</style>
