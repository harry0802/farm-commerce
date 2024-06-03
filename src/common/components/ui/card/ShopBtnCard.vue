<template>
    <div class="product__Btn--container  ">
        <div v-if="!getOderFrequency">
            <!-- 某些情況是需要判斷當天的日期是否符合產品可以購買的日期 -->
            <button @click="handleorder" type="button" class="u-pirmary-button w-full">添加</button>
            <!-- <button type="button" class="">售完</button> -->
            <!-- <button type="button" class="">預購</button> -->
        </div>
        <ShopProductSubscribeBtn v-else class="product__Btn--container  max-w-full max-h-full" />
    </div>
</template>

<script setup>
import ShopProductSubscribeBtn from "@/common/components/ui/button/ShopProductSubscribeBtn.vue";
import { inject, } from "vue";
const { getOderFrequency } = inject('tdOrderInfo')
const productInfo = inject('productInfo')
const handleOrderAdd = inject('handleOrderAdd')
const handleorder = () => handleOrderAdd(productInfo.value)
</script>

<style scoped>
.product__Btn--container {
    @apply w-full min-h-14 sm:max-w-[276px] mr:max-w-[180px] mr:mr-4
}
</style>
