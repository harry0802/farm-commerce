<template>
  <div class=" product-item__wrapper p-0.5 pb-10 ">
    <div class="relative  product-item__container p-1.5 flex flex-col h-full  sm:min-h-[400px]">
      <div class="relative product-item__photo">
        <div
          class="absolute  flex w-8 h-8 right-2 top-2 rounded-full bg-white    cursor-pointer hover:scale-110 active:scale-90 transition-transform duration-300 ">
          <Icon class="w-6 h-6 m-auto text-[#e2e2e2]" icon="lets-icons:favorite" />
        </div>
        <RouterLink class="photo__links " :to="`/product/${data.product_name + '-' + data.product_code}`">
          <img class="object-cover rounded-lg" :src=data.image_url alt="" />
        </RouterLink>
      </div>
      <shop-product-itemText />

      <!-- 表單 -->
      <ProdictFormCard v-if="theSubscribe && clacWindowSize"
        class="	overflow-hidden p-2 rounded-lg border-[2px] border-color-primary-light  h-full  flex flex-col justify-between absolute  top-[-2px] left-[-2px]  right-[-2px]">
        <template #selection>
          <div class=" selection__wrap  w-full bg-color-primary ">
            <ProductSelection />
            <ProductSelection />
          </div>
        </template>
        <template #buttomBar>
          <div class="  mt-auto h-[44px]  button-controll   flex gap-2    flex-row justify-end">
            <button type="submit" class="max-w-[140px] u-subscribe-btn confirm text-color-primary">確認</button>
            <button type="button" class="max-w-[140px] u-subscribe-btn cancel text-color-primary"
              @click="closeSubscribe">取消</button>
          </div>
        </template>
      </ProdictFormCard>
    </div>
  </div>

</template>

<script setup>
import ShopProductItemText from "../../ui/text/ShopProductItemText.vue";
import ProdictFormCard from '@/common/components/ui/card/ProdictFormCard.vue'
import ProductSelection from "@/common/components/ui/product/ProductSelection.vue";
import { provide, ref, inject, computed, watchEffect } from "vue";
import { Icon, } from '@iconify/vue';
const props = defineProps({
  data: Object
});


const theSubscribe = ref(false)

const showSubscribe = function () {
  theSubscribe.value = true
}
const closeSubscribe = function () {
  theSubscribe.value = false
}
provide('productItem', props.data)
provide('subscribe', { theSubscribe, showSubscribe })

const watchWindowSize = inject('watchWindowSize')
const clacWindowSize = computed(() => watchWindowSize.value > 600)

watchEffect(() => {
  clacWindowSize.value ? closeSubscribe() : clacWindowSize.value
})

</script>

<style scoped>
.selection__wrap {
  background: #ffffffeb;
  aspect-ratio: 1/.67;
}

button.u-subscribe-btn {
  @apply text-color-primary
}

@media screen and (max-width: 350px) {

  .product-item__wrapper {
    width: 183px;
    height: 340px;

  }

}

@media screen and (min-width: 350px) {

  .product-item__wrapper {
    width: 100%;
    height: 100%;
  }

}



@media only screen and (min-width: 599px) {
  .product-item__wrapper {
    padding: 2px;

  }

  .product-item__container {
    padding: .5rem;
  }

}
</style>
