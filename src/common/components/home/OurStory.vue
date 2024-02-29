<template>
  <div class="section-bg">

    <home-title class="text-b-color-browm" :title="'以人為本'" />

    <base-section>
      <base-content>
        <FeatureCarousel class="col-span-full md::col-start-3 md::col-end-11  ">
          <template #CarouselItem>
            <CarouselItem v-for=" feedback in pepolefeedback"
              class=" flex place-content-center min-[500px]:basis-1/2  sm:basis-1/3  lg:basis-1/3 ">
              <HomePersonCard :personName="feedback.personName" :personText="feedback.personText"
                :personPhoto="feedback.personPhoto" />
            </CarouselItem>
          </template>
        </FeatureCarousel>
      </base-content>
    </base-section>
  </div>
</template>

<script setup>
import BaseSection from "../ui/section/BaseSection.vue";
import HomePersonCard from "../ui/card/HomePersonCard.vue";
import BaseContent from "../ui/content/base/BaseContent.vue";
import HomeTitle from "../ui/title/HomeTitle.vue";
import FeatureCarousel from "@/common/components/ui/feature/FeatureCarousel.vue";
import { CarouselItem } from '@/common/composables/ui/carousel'

const pepolefeedback = [
  {
    personName: '豬大哥',
    personText: "您的農場的蔬果真是大自然的恩賜！每一口都充滿了土地的味道，讓我感受到了家的溫馨。",
    personPhoto: 'src/assets/imgs/pepolefeedback/person-1.jpg',
  }
  ,
  {
    personName: '懦夫救星',
    personText: "在您的農場買的蔬菜真是新鮮到令人驚艷，讓我回想起了我童年時在鄉村奶奶家裡採摘的味道。",
    personPhoto: 'src/assets/imgs/pepolefeedback/person-2.png',
  }
  ,
  {
    personName: '統神',
    personText: "您的農場所產的農產品猶如大自然的佳餚，每一口都彷彿帶有陽光和風的味道，令人心曠神怡。",
    personPhoto: 'src/assets/imgs/pepolefeedback/person-3.jpg',
  }
  ,
  {
    personName: '威爾森',
    personText: "走進您的農場，彷彿置身於大自然的懷抱中，您所種植的每一種作物都帶著自然的香氣和美味。",
    personPhoto: 'src/assets/imgs/pepolefeedback/person-4.jpeg',
  }
  ,
  {
    personName: '力量人',
    personText: "每次享用您農場的農產品都讓我感受到自然的力量和生命的活力，真是一種美好的體驗。",
    personPhoto: 'src/assets/imgs/pepolefeedback/person-5.jpg',
  }
  ,
  {
    personName: '本傑明',
    personText: "感謝您的農場帶給我們如此純淨和美味的食物，每一口都充滿了大自然的祝福和溫暖。",
    personPhoto: 'src/assets/imgs/pepolefeedback/person-6.jpg',
  }
]



</script>

<style scoped>
.section-bg {
  background: #fae7c3;
}
</style>
