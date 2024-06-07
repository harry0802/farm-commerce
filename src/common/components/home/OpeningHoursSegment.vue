<template>
  <div class="bg-b-color-browm">
    <base-section v-fade-in>
      <base-content>
        <base-phto-content :img="picture" />
        <base-text-content>
          <base-text :title="'迎接您的光臨'"
            :paragraph="'田園速遞餐廳 - 呈獻超凡美食之旅: 品味四季佳餚，每道菜肴都完美地融入農夫和製造商夥伴的用心栽培。從田野到餐桌，我們的料理是一場自然之美的盛宴。'" />
        </base-text-content>
      </base-content>

      <base-content>
        <div class="openHour__content" v-for="open in openHours" :key="open.day">
          <p class="openHour--day u-text-smaill">{{ open.day }} :</p>
          <p class="openHour--am u-text-smaill">{{ open.am }}</p>
          <p class="openHour--pm u-text-smaill">{{ open.pm }}</p>
        </div>
      </base-content>
    </base-section>
  </div>
</template>

<script setup>
import BaseContent from "../ui/content/base/BaseContent.vue";
import BasePhtoContent from "../ui/content/base/BasePhtoContent.vue";
import BaseTextContent from "../ui/content/base/BaseTextContent.vue";
import BaseSection from "../ui/section/BaseSection.vue";
import BaseText from "../ui/text/BaseText.vue";
defineProps({ picture: String })

const openHours = [
  {
    day: "週一至週五",
    am: " 上午 11 點 - 下午 2 點",
    pm: "下午 5 點 - 晚上 9 點",
  },
  {
    day: "週六",
    am: " 上午 10 點 - 下午 3 點",
    pm: "下午 6 點 - 晚上 10 點",
  },
  { day: "週日 ", am: " 上午 9 點 - 下午 4 點", pm: "晚上休息" },
]


</script>

<style scoped>
.openHour__content {
  position: relative;
  grid-column: 1 / -1;
  display: flex;
  max-width: 100%;
  padding: 30px;
  flex-direction: column;
  align-items: center;
  margin: 20px auto 0 auto;
  color: #fff;
  z-index: 1;
}

.openHour__content:not(:first-of-type) {
  margin-top: 20px;
}

.openHour__content::before {
  position: absolute;
  inset: 0;
  content: "";
  background-repeat: no-repeat;
  background-image: url("@/assets/imgs/pixel_bg_small-6c949a35a7444bb26e9e22cd359850067aa94c2f573872782f6df56420cdfa60.png");
  background-position: center;
  /* background-size: 300px 100%; */
  /* background-size: 50% 100%; 非手機版 */
  z-index: 0;
}

.openHour__content p {
  position: relative;
}

.openHour__content p:not(:first-of-type) {
  margin-top: 10px;
}

@media only screen and (min-width: 996px) {
  .openHour__content {
    grid-column: auto / span 4;
    padding: 1rem;
  }

  p {
    font-size: 20px;
  }

  .openHour__content::before {
    left: 0;
    background-position: left;
    background-size: 100% 100%;
  }
}
</style>
