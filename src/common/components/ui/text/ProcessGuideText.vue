<template>
  <base-text class="text-color-primary" v-for="processGuideTexts in processGuideText" :key="processGuideTexts.title"
    :title="processGuideTexts.title" :paragraph="processGuideTexts.paragraph" :pseudoText="processGuideTexts.pseudoText">
  </base-text>
</template>

<script>
import BaseText from "./BaseText.vue";
export default {
  components: { BaseText },
  data() {
    return {
      processGuideText: [
        {
          title: "隨時購物：",
          paragraph: "按照您的節奏，選購您喜愛的商品或點選自選的項目。",
        },
        {
          title: "農情味道：",
          paragraph: "我們的農夫為您種植新鮮好食材，確保美味的同時也減少浪費！",
        },
        {
          title: "宅配溫馨：",
          paragraph: "選擇的商品在您指定的日期，被精心包裝送達您的門前。",
        },
      ],
    };
  },
};
</script>

<style></style>
