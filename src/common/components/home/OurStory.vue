<template>
  <div class="section-bg">
    <home-title class="text-b-color-browm" :title="'以人為本'"></home-title>
    <base-section>
      <base-content>
        <home-person-card></home-person-card>
      </base-content>
    </base-section>
  </div>
</template>

<script setup>
import BaseSection from "../ui/section/BaseSection.vue";
import HomePersonCard from "../ui/card/HomePersonCard.vue";
import BaseContent from "../ui/content/base/BaseContent.vue";
import HomeTitle from "../ui/title/HomeTitle.vue";
</script>

<style scoped>
.section-bg {
  background: #fae7c3;
}
</style>
