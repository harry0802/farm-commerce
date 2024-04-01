<template>
  <div class=" product-item__wrapper p-0.5 pb-10 ">
    <div class="relative  product-item__container p-1.5 flex flex-col h-full   ">
      <!-- 產品圖片 -->
      <div class="relative product-item__photo">

        <MarkFavoriteBtn :data="data" class="right-2 top-2" />
        <RouterLink class="photo__links " :to="`/product/${data.product_name + '-' + data.product_code}`">
          <img class="object-cover rounded-lg" :src=data.image_url alt="" />
        </RouterLink>
        <MarkTextIcon v-if=!!data.SALE v-bind='data' class="left-2  top-2" />
      </div>
      <!-- 產品訊息 -->
      <ShopProductItemText />

      <!-- 表單 -->
      <ProdictFormCard v-if="theSubscribe && clacWindowSize"
        class=" h-full	overflow-hidden p-2 rounded-lg border-[2px] border-color-primary-light    flex flex-col justify-between absolute  top-[-2px] left-[-2px]  right-[-2px]">
        <template #selection>
          <div class="px-4 selection__wrap   w-full  bg-color-primary ">
            <ProductSelection />
          </div>
        </template>
        <template #buttomBar>
          <div class="  mt-auto h-[44px]  button-controll   flex gap-2    flex-row justify-end">
            <button type="button" class="max-w-[140px] u-subscribe-btn cancel text-color-primary"
              @click="closeSubscribe">取消</button>
            <button type="submit" class="max-w-[140px] u-subscribe-btn confirm text-color-primary">確認</button>

          </div>
        </template>
      </ProdictFormCard>
    </div>
  </div>

</template>

<script setup>
import ShopProductItemText from "@/common/components/ui/text/ShopProductItemText.vue";
import ProdictFormCard from '@/common/components/ui/card/ProdictFormCard.vue'
import ProductSelection from "@/common/components/ui/product/ProductSelection.vue";
import { provide, ref, computed, watchEffect } from "vue";
import { useWindowSize } from '@vueuse/core'
import MarkFavoriteBtn from "@/common/components/ui/button/MarkFavoriteBtn.vue";
import MarkTextIcon from "@/common/components/ui/icon/MarkTextIcon.vue";
const { width: watchWindowWidth } = useWindowSize()

const props = defineProps({
  data: Object
});
const theSubscribe = ref(false)


const showSubscribe = () => theSubscribe.value = true
const closeSubscribe = () => theSubscribe.value = false
const clacWindowSize = computed(() => watchWindowWidth.value > 600)


provide('productItem', props.data)
provide('subscribe', { theSubscribe, showSubscribe })
provide('watchWindowSize', watchWindowWidth)


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
