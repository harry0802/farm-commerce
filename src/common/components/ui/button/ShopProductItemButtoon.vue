<template>
  <div v-if="!theSubscribe && !clacWindowSize" class="  details__buttons flex w-full  place-content-end gap-5">
    <button v-if="!clacWindowSize && Subscribe" @click="showSubscribe" class="u-subscribe-btn w-auto max-h-11 group">
      <p>定期配送</p>
      <Icon class=" group-hover:-rotate-180" icon="entypo:cycle" />
    </button>
    <button class="w-auto  max-h-11 product-button u-pirmary-button ">
      <p v-if="!clacWindowSize">加到購物車</p>
    </button>
  </div>

  <div v-else-if="clacWindowSize" class="  details__buttons flex w-full  place-content-end gap-5">
    <MobileShopItemSubscribe v-if="Subscribe" />
    <button class="w-auto  max-h-11 product-button u-pirmary-button ">
      <Icon icon="prime:cart-arrow-down" class="text-xl" />
    </button>
  </div>
  <div v-else class="min-h-11" />

</template>

<script setup>
import { Icon, } from '@iconify/vue';
import { computed, inject } from "vue";
import MobileShopItemSubscribe from "@/common/components/ui/popup/profile/MobileShopItemSubscribe.vue";
const clacWindowSize = computed(() => watchWindowSize.value < 600)
const props = defineProps({
  Subscribe: { type: Boolean },
  Limited: { type: String }
})
const { theSubscribe } = inject('subscribe')


const { showSubscribe } = inject('subscribe')
const watchWindowSize = inject('watchWindowSize')



</script>


<style scoped>
* {
  font-family: GalmuriMono9;
}

.iconify--entypo {
  transition: transform .5s;
}

.iconify {
  stroke-width: 1px;
  stroke: currentColor;
}

.iconify--iconoir {
  stroke-width: 2px;

}
</style>
