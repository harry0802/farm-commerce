<template>
  <div v-if="!theSubscribe && !clacWindowSize" class="  details__buttons flex w-full  place-content-end gap-5">
    <button v-if="Subscribe" @click="showSubscribe"
      :class="{ 'bg-b-color-green-light': isSubscribe, 'border-b-color-green-light': isSubscribe }"
      class="u-subscribe-btn w-auto max-h-11 group">
      <p>定期配送</p>
      <Icon :class="{ 'group-hover:-rotate-180': !isSubscribe, 'text-lg': isSubscribe, }"
        :icon="isSubscribe ? 'pixelarticons:frame-check' : 'entypo:cycle'" />
    </button>

    <button v-if="!getOderFrequency" @click="handleorder" class="w-auto  max-h-11 product-button u-pirmary-button ">
      <p>加到購物車</p>
    </button>
    <ShopProductSubscribeBtn v-else />
  </div>

  <div v-else-if="clacWindowSize"
    class="  details__buttons flex w-full justify-between   place-content-end gap-3  sm:gap-5">
    <MobileShopItemSubscribe v-if="Subscribe" />

    <button v-if="!getOderFrequency" @click="handleorder" class=" w-auto  max-h-11 product-button u-pirmary-button ">
      <Icon icon="prime:cart-arrow-down" class="text-xl" />
    </button>

    <ShopProductSubscribeBtn v-else />
  </div>

  <div v-else class="min-h-11" />

</template>

<script setup>
import ShopProductSubscribeBtn from "@/common/components/ui/button/ShopProductSubscribeBtn.vue";
import { Icon, } from '@iconify/vue';
import { computed, inject, } from "vue";
import MobileShopItemSubscribe from "@/common/components/ui/popup/profile/MobileShopItemSubscribe.vue";


defineProps({
  Subscribe: { type: Boolean },
  Limited: { type: String }
})

const { theSubscribe, showSubscribe } = inject('subscribe')
const handleOrderAdd = inject('handleOrderAdd')
const watchWindowSize = inject('watchWindowSize')
const productItem = inject('productItem')
const { getOderFrequency, isSubscribe } = inject('tdOrderInfo')


const clacWindowSize = computed(() => watchWindowSize.value < 600)
const handleorder = () => handleOrderAdd(productItem)


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
