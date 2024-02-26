<template>
  <home-card>
    <base-phto-content class=""></base-phto-content>
    <base-text-content>
      <base-text :title="123" :paragraph="'alskjdfoqho'"></base-text>
    </base-text-content>
  </home-card>
  <primary-button :btnTitle="'了解更多'" />
</template>

<script setup>
import HomeCard from "../../ui/card/HomeCard.vue";
import BasePhtoContent from "../content/base/BasePhtoContent.vue";
import BaseTextContent from "../content/base/BaseTextContent.vue";
import BaseText from "../../ui/text/BaseText.vue";
</script>

<style></style>
