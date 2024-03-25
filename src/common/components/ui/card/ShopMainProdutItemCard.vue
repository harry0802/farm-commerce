<template>
  <div class=" product-item__wrapper p-0.5 pb-10 ">
    <div class="relative  product-item__container p-1.5 flex flex-col h-full  min-h-[400px]">
      <div class=" product-item__photo">
        <RouterLink class="photo__links " :to="`/product/${data.product_name + '-' + data.product_code}`">
          <img class="object-cover rounded-lg" :src=data.image_url alt="" />
        </RouterLink>
      </div>
      <shop-product-itemText />

      <!-- 表單 -->
      <ProdictFormCard v-if="theSubscribe"
        class="	overflow-hidden p-2 rounded-lg border-[2px] border-color-primary-light  h-full  flex flex-col justify-between absolute  top-[-2px] left-[-2px]  right-[-2px]">
        <template #selection>
          <div class=" selection__wrap  w-full bg-color-primary ">
            <ProductSelection />
            <ProductSelection />
          </div>
        </template>
        <template #buttomBar>
          <div class="  mt-auto h-[44px]  button-controll   flex gap-2    flex-row justify-end">
            <button class="max-w-[140px] u-subscribe-btn confirm text-color-primary">確認</button>
            <button class="max-w-[140px] u-subscribe-btn cancel text-color-primary " @click="closeSubscribe">取消</button>
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
import { provide, ref } from "vue";
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

</script>

<style scoped>
.selection__wrap {
  background: #ffffffeb;
  aspect-ratio: 1/.67;
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
