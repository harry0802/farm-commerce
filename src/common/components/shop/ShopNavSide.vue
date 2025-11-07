<template>
  <shop-side-card>
    <template #title>
      <h1
        :id="currentId"
        class="pb-2 u-text-medium border-b border-color-grey-light"
      >
        <RouterLink :to="`/shop/${data.project}`">
          {{ data.project }}
        </RouterLink>
      </h1>
    </template>
    <template #navlist>
      <shop-side-list :data="data.categories" />
    </template>
  </shop-side-card>
</template>

<script setup>
import { defineProps, inject } from "vue";
import { RouterLink } from "vue-router";
import ShopSideCard from "../../../common/components/ui/card/ShopSideCard.vue";
import ShopSideList from "../../components/ui/navigations/ShopSideList.vue";

const currentId = inject("observerCurrentID");
defineProps({
  data: Object,
});
</script>

<style scoped></style>
