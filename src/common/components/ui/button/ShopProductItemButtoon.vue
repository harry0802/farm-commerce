<template>
  <div class=" details__buttons flex w-full  place-content-end gap-5">
    <button @click="showSubscribe" v-if="!Subscribe" class="u-subscribe-btn w-auto max-h-11 group">
      <p v-if="!clacWindowSize">定期配送</p>
      <Icon class=" group-hover:-rotate-180" icon="entypo:cycle" />
    </button>
    <button class="w-auto  max-h-11 product-button u-pirmary-button ">
      <p v-if="!clacWindowSize">加到購物車</p>
      <Icon v-else icon="prime:cart-arrow-down" class="text-xl" />
    </button>
  </div>
</template>

<script setup>
import { Icon, } from '@iconify/vue';
import { computed, inject } from "vue";
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()
const clacWindowSize = computed(() => width.value < 600)
const props = defineProps({
  Subscribe: { type: Boolean },
  Limited: { type: String }
})
const { showSubscribe } = inject('subscribe')

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
