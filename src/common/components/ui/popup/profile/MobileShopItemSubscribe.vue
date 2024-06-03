<template>
    <DrawerRoot v-model:open="isOpen">
        <DrawerTrigger asChild>
            <button class="u-subscribe-btn   sm:max-w-full sm:max-h-full  group "
                :class="{ 'isSubscribe': isSubscribe }">
                <p v-if="clacWindowSize"> 訂購</p>
                <Icon :class="{ 'group-hover:-rotate-180': !isSubscribe, 'text-lg': isSubscribe, }"
                    :icon="isSubscribe ? 'pixelarticons:frame-check' : 'entypo:cycle'" />
            </button>
        </DrawerTrigger>


        <DrawerPortal>
            <DrawerOverlay class="fixed inset-0  bg-[#07261e80]" />

            <DrawerContent
                class=" bg-white flex flex-col fixed  bottom-0 left-0 right-0  max-h-[96%] rounded-t-[30px] shadow-sm z-[2]">
                <DrawerTitle as-child>
                    <VisuallyHidden />
                </DrawerTitle>
                <DrawerDescription as-child>
                    <VisuallyHidden />
                </DrawerDescription>
                <Form @submit="onsubmit">
                    <div class="m-auto my-5 w-1/5 bg-[#cccc] h-4 max-h-8 rounded-xl" />

                    <div class="  w-full mx-auto flex flex-col  p-[30px] rounded-t-[10px] ">
                        <div class="max-w-[60%]">
                            <ProductSelection v-model:handleSubmit="handleSubmit" />
                        </div>
                        <div class="details__texts flex flex-col grow h-full min-h-[115px]">
                            <div class="mt-4 texts__supplier-and-pdinfo flex flex-col ">
                                <RouterLink @click="closeDrawer" :to="`/producers/${productItem.supplier_name}`"
                                    class="supplier-and-pdinfo--supplier">{{ productItem.supplier_name }}</RouterLink>

                                <RouterLink @click="closeDrawer"
                                    :to="`/product/${productItem.product_name}-${productItem.product_code}`"
                                    class="supplier-and-pdinfo--pdinfo text-lg tracking-wide">
                                    {{ productItem.product_name }}</RouterLink>
                            </div>
                            <div class="texts__price-and-weight flex justify-between pt-1.5 pb-2.5 auto ">
                                <p class="price-and-weight--weight">{{ productItem.weight }}</p>
                                <strong class="price-and-weight--price font-bold">{{ productItem.price }} 元</strong>
                            </div>
                        </div>

                        <div class="  mt-auto h-[44px]  button-controll   flex gap-2    flex-row justify-end">
                            <button type="submit" class=" u-subscribe-btn confirm ">確認</button>
                            <DrawerClose class="u-subscribe-btn cancel  ">取消
                            </DrawerClose>
                        </div>
                    </div>
                </Form>
            </DrawerContent>
        </DrawerPortal>
    </DrawerRoot>
</template>

<script setup>
import ProductSelection from "@/common/components/ui/product/ProductSelection.vue";
import { DrawerContent, DrawerOverlay, DrawerPortal, DrawerRoot, DrawerTrigger, DrawerClose, DrawerTitle, DrawerDescription } from 'vaul-vue';
import { VisuallyHidden } from 'radix-vue';
import { Form } from "@/common/composables/ui/form";
import { Icon } from '@iconify/vue';
import { inject, computed, ref } from "vue";


const { addSubscribe, handleSubmit } = inject('sendSubScript')
const watchWindowSize = inject('watchWindowSize')
const productItem = inject('productItem')
const { isSubscribe } = inject('tdOrderInfo')

const isOpen = ref(false)
const closeDrawer = () => isOpen.value = false

const clacWindowSize = computed(() => watchWindowSize.value > 500)


const onsubmit = async () => {
    await (handleSubmit.value(({ quantity,
        frequency }) => { addSubscribe({ quantity, frequency, ...productItem }) }))()
    isOpen.value = false
}

</script>



<style scoped>
button.u-subscribe-btn {
    @apply px-0 text-color-primary-light max-[399px]:max-w-11 max-[399px]:max-h-11 max-[399px]:p-0
}

button.u-subscribe-btn.cancel,
button.u-subscribe-btn.confirm {
    @apply text-color-primary max-w-[140px]
}

button.u-subscribe-btn.isSubscribe {
    @apply border-b-color-green-light bg-b-color-green-light
}

.u-subscribe-btn.confirm {
    border-color: transparent;

}

.iconify {
    stroke-width: 1px;
    stroke: currentColor;
}

.iconify--iconoir {
    stroke-width: 2px;

}
</style>
