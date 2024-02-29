<template>
  <home-card class="">
    <div class="person__warp  h-[350px] ">
      <figure class="person__content">
        <img :src="personPhoto" alt="" />
        <figcaption class="person__text ">
          <h3 class="u-text-small mt-6">{{ personName }}</h3>
          <p class="mt-6 text-center">{{ personText }}</p>
        </figcaption>
        <primary-button :btnTitle="'了解更多'"></primary-button>
      </figure>
    </div>
  </home-card>
</template>

<script setup>
import HomeCard from "../../ui/card/HomeCard.vue";
defineProps({
  personName: { type: String, default: "設定中..." },
  personText: { type: String, default: "設定中..." },
  personPhoto: { type: String, default: "https://picsum.photos/800" },
});
</script>

<style scoped>
.person__content>img {
  width: 168px;
  object-fit: cover;
  aspect-ratio: 1/1;
  margin: auto;
  border-radius: 50%;
}

.person__text {
  margin-top: 1rem;
}

.person__text>h3 {
  text-align: center;
}
</style>
