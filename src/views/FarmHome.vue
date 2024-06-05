<template>

  <BaseMainPage>
    <template #page>
      <div class="overflow-hidden ">
        <home-hero />
        <home-product />
        <MountainFlow class="bg-white  text-b-color-browm" />
        <ordering-process-guide />
        <MountainFlow class="bg-b-color-browm text-b-color-green-light" />
        <product-highlights />
        <MountainFlow class="bg-b-color-green-light text-b-color-green-dark" />
        <features-and-advantages />
        <MountainFlow class="bg-b-color-green-dark text-b-color-browm" />
        <our-story />
        <linked-resources />
        <opening-hours-segment />
      </div>

    </template>
    <template #sidebar>
      <slot name="sidebar" />
    </template>
  </BaseMainPage>


</template>

<script setup>

import {
  HomeHero,
  HomeProduct,
  OrderingProcessGuide,
  ProductHighlights,
  FeaturesAndAdvantages,
  OurStory,
  LinkedResources,
  OpeningHoursSegment,
} from "@/common/components/home/index.js";
import MountainFlow from "@/common/components/ui/section/MountainFlow.vue";
import BaseMainPage from "@/common/components/ui/card/BaseMainPage.vue";
</script>
