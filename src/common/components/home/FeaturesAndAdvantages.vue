<template>
  <div>
    <base-section>
      <base-content>
        <base-phto-content :img="picture" reverse />
        <base-text-content :reverse="true">
          <base-text :title="'FeaturesAndAdvantages:'"
            :paragraph="'肩負著改變食物系統和人們取得食物的方式的使命，「農田到餐桌」正進行著根本性的轉變。我們堅信每個人都應該能夠從值得信賴的種植者和製造商那裡，直接獲得最新鮮、高品質的農產品、海鮮、肉類等食材。我們致力於讓這變得輕鬆且負擔得起。'"></base-text>
          <primary-button class="mt-10" :btnTitle="'手作匠心'" />
        </base-text-content>
      </base-content>
    </base-section>
  </div>
</template>

<script setup>
import BaseSection from "../ui/section/BaseSection.vue";
import BaseContent from "../ui/content/base/BaseContent.vue";
import BasePhtoContent from "../ui/content/base/BasePhtoContent.vue";
import BaseTextContent from "../ui/content/base/BaseTextContent.vue";
import BaseText from "../ui/text/BaseText.vue";
import PrimaryButton from "../ui/button/PrimaryButton.vue";
defineProps({ picture: String })
</script>

<style scoped>
* {
  @apply bg-b-color-green-dark text-white;
  /* overflow: hidden; */
}
</style>
