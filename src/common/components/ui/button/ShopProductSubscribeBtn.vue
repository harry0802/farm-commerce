<template>

    <button
        class="relative u-pirmary-button  w-auto min-w-[104px]  max-h-11 px-0   text-color-primary product-button  bg-white border-[3px]    border-color-grey-light group active:translate-x-0 hover:bg-[unset]">

        <div v-if="!loading" class="flex w-full h-full  justify-between  items-center">
            <Icon @click="reduceProduct" class="btn__arrow " icon="pixelarticons:arrow-down" />
            <input @focus="handleFocus" @blur="handleBlur" @keyup.enter="handleEnter" v-model.number="theAmount"
                class="max-w-6 text-center outline-none underline underline-offset-2	decoration-color-eva-dark-green	 font-[GalmuriMono9]"
                type="text">
            <Icon @click="addProduct" class="btn__arrow " icon="pixelarticons:arrow-up" />

        </div>

        <div v-else>
            <LoadingCat2 class=" absolute inset-0 w-[40px] aspect-square" />
        </div>
    </button>

</template>

<script setup>
import LoadingCat2 from "@/common/components/ui/animat/LoadingCat2.vue";
import { Icon, } from '@iconify/vue';
import { inject, watch, toRefs } from "vue";
import { userHandleProductItem } from "@/Plugins/zodValidators.js";

const productItem = inject('productItem')
const productInfo = inject('productInfo')
const { getOderFrequency } = inject('tdOrderInfo')

const {
    theAmount,
    loading,
    preventBlurEvent,
    productOperate } =
    toRefs(userHandleProductItem({ ...productItem || productInfo.value }, getOderFrequency.value?.quantity))

const {
    handleFocus,
    handleEnter,
    handleBlur,
} = preventBlurEvent.value()

const {
    addProduct,
    reduceProduct,
} = productOperate.value()

watch(() => getOderFrequency.value?.quantity, (newVal) => {
    theAmount.value = newVal
})
</script>
<style scoped>
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

.btn__arrow {
    @apply w-full h-full max-w-10 max-h-10 mr:max-h-5 text-color-grey-dark text-base hover:-translate-y-[1px] active:-translate-y-[3px] hover:text-color-primary-light transition-all duration-300
}
</style>