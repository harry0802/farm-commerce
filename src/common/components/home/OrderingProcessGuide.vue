<template>
  <base-section class="bg-b-color-browm">
    <base-content />
    <base-phto-center :img="'src/assets/imgs/homePage/edoardo-busti-5ofKC-FQK3Q-unsplash.jpg'" />
    <base-text-content>
      <div class="ProcessGuide__Title response__content">
        <h2 class="u-text-large">我們的流程：</h2>
      </div>
      <process-guide-text />
      <primary-button class="mt-4" :btnTitle="'了解更多'"></primary-button>
    </base-text-content>
  </base-section>
</template>

<script setup>
import BaseSection from "../ui/section/BaseSection.vue";
import BasePhtoCenter from "../ui/content/base/BasePhtoContent.vue";
import BaseTextContent from "../ui/content/base/BaseTextContent.vue";
import PrimaryButton from "../ui/button/PrimaryButton.vue";
import ProcessGuideText from "../ui/text/ProcessGuideText.vue";
import BaseContent from "../ui/content/base/BaseContent.vue";
</script>

<style scoped>
.ProcessGuide__Title {
  position: relative;
}

.ProcessGuide__Title::after {
  content: "";
  display: block;
  margin-top: 1rem;
  width: 100%;
  height: 5px;
  background: #b33030;
}

.ProcessGuide__Title::before {
  content: "";
  width: 100px;
  height: 80px;

  position: absolute;
  right: 0;
  bottom: 0;

  background-image: url("@/assets/imgs/shop.png");
  background-size: 100% 100%;
}
</style>
