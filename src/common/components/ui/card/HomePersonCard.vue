<template>
  <home-card>
    <div class="person__warp">
      <figure class="person__content">
        <img :src="props.personPhoto" alt="" />
        <figcaption class="person__text">
          <h3>{{ props.personName }}</h3>
          <p>{{ props.personText }}</p>
        </figcaption>
        <primary-button :btnTitle="'了解更多'"></primary-button>
      </figure>
    </div>
  </home-card>
</template>

<script setup>
import { defineProps } from "vue";
import HomeCard from "../../ui/card/HomeCard.vue";

const props = defineProps({
  personName: { type: String, default: "設定中..." },
  personText: { type: String, default: "設定中..." },
  personPhoto: { type: String, default: "https://picsum.photos/800" },
});
</script>

<style scoped>
.person__content > img {
  width: 168px;
  width: 168px;
  margin: auto;
  border-radius: 100%;
}
.person__text {
  margin-top: 1rem;
}

.person__text > h3 {
  text-align: center;
}
</style>
