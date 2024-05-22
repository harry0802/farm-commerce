<template>

    <button
        class="relative u-pirmary-button  w-auto min-w-[104px]  max-h-11 px-0   text-color-primary product-button  bg-white border-[3px]    border-color-grey-light group active:translate-x-0 hover:bg-[unset]">

        <div v-if="!loading" class="flex w-full h-full  justify-between  items-center">
            <Icon @click="sendAmount(reduceProduct)" class="btn__arrow " icon="pixelarticons:arrow-down" />
            <input @focus="handleFocus" @blur="handleBlur" @keyup.enter="handleEnter" v-model.number="theAmount"
                class="max-w-6 text-center outline-none underline underline-offset-2	decoration-color-eva-dark-green	 font-[GalmuriMono9]"
                type="text">
            <Icon @click="sendAmount(addProduct)" class="btn__arrow " icon="pixelarticons:arrow-up" />

        </div>

        <div v-else>
            <LoadingCat2 class=" absolute inset-0 w-[40px] aspect-square" />
        </div>
    </button>

</template>

<script setup>
import LoadingCat2 from "@/common/components/ui/animat/LoadingCat2.vue";
import { Icon, } from '@iconify/vue';
import { inject, ref, watch } from "vue";
import { toast } from 'vue-sonner'
import { useDebounceFn } from '@vueuse/core'
import { z } from "zod";


const handleOrderAdd = inject('handleOrderAdd')
const productItem = inject('productItem')
const productInfo = inject('productInfo')
const { getOderFrequency } = inject('tdOrderInfo')
const theAmount = ref(getOderFrequency.value?.quantity)
const disableBlur = ref(false);
const loading = ref(false)
const amountSchema = z.number({ required_error: '只接受數字', invalid_type_error: '只接受數字' }).positive({ message: '不可以小於0' }).lte(99, { message: '已超過最大限制值' });


const addProduct = () => sendAmount(() => theAmount.value++)
const reduceProduct = () => sendAmount(() => theAmount.value--)



const handleFocus = () => {
    disableBlur.value = false;
};
const handleEnter = (event) => {
    disableBlur.value = true;
    loading.value = true
    sendAmount();
    event.target.blur();
};

const handleBlur = async () => {
    if (disableBlur.value) return disableBlur.value = false;
    sendAmount()
};

const sendAmount = (operate) => {
    if (operate) operate()
    if (theAmount.value === getOderFrequency.value.quantity) return
    loading.value = true
    amountDebounce(operate);
}

const amountDebounce = useDebounceFn(() => {


    const { success, error } = amountSchema.safeParse(+theAmount.value)
    if (!success) {
        const [{ message }] = error.issues
        toast.error(message)
        loading.value = false
        return theAmount.value = getOderFrequency.value.quantity
    }
    const data = { ...productItem || productInfo }
    handleOrderAdd({ quantity: theAmount.value, ...data })
    toast.success('商品更新成功')
    loading.value = false
}, 1000)


watch(() => getOderFrequency.value?.quantity, (newVal) => theAmount.value = newVal
)


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