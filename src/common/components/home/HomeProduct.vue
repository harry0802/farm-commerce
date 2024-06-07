<template>
  <home-title class="text-white" :title="'來自地下城的美食！'">
  </home-title>

  <base-section>
    <base-center>
      <home-product-item v-for="(productLis, i) in productListTop" :key="i" v-bind="productLis" />
    </base-center>
  </base-section>

  <base-section>
    <base-center>
      <home-product-item v-for="(productLis, i) in productListBottom" :key="i" v-bind="productLis" />
    </base-center>
  </base-section>
</template>

<script setup>
import HomeTitle from "../ui/title/HomeTitle.vue";
import BaseSection from "../ui/section/BaseSection.vue";
import BaseCenter from "../ui/content/base/BaseContent.vue";
import HomeProductItem from "../ui/product/HomeProductItem.vue";
import * as homeproduct from "@/assets/imgs/homeproduct/index.js";


const productListTop =
  [
    {
      img: homeproduct.vegetablepot,
      text: '新鮮蔬菜，清粥小菜',
      path: '魔像田產新鮮蔬菜午餐-7812'
    },
    { img: homeproduct.GrilledKelpieFull, text: '蛋白質流氓必點', path: '烤水鬼-4446' },
    { img: homeproduct.TreasureInsect_Snacks, text: '異國料理，高貴不貴', path: '天然♡美味的寶蟲點心♪-8134' },

  ]

const productListBottom = [
  { img: homeproduct.RoastBasiliskAnime, text: '節日必點，儀式感', path: '烤蛇尾雞-2231' },
  { img: homeproduct.DungeonMeshi, text: '我的第一餐是早午餐', path: '蛇尾雞蛋曼德拉草蛋包飯-9132' },
  { img: homeproduct.combo, text: '現點現搶，決不失手', path: '剛偷來的蔬菜和高麗菜燉雞配上搶來的麵包-6666' },]


</script>

<style></style>
