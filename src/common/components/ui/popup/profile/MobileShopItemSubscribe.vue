<template>
    <DrawerRoot v-model:open="isOpen">
        <DrawerTrigger asChild>
            <button class=" u-subscribe-btn w-auto max-h-11 group">
                <p v-if="clacWindowSize"> 訂購</p>
                <Icon class=" group-hover:-rotate-180" icon="entypo:cycle" />
            </button>
        </DrawerTrigger>


        <DrawerPortal>
            <DrawerOverlay class="fixed inset-0  bg-[#07261e80]" />

            <DrawerContent
                class=" bg-white flex flex-col fixed  bottom-0 left-0 right-0  max-h-[96%] rounded-t-[30px] shadow-sm z-[2]">
                <VisuallyHidden asChild />
                <Form @submit="onsubmit">
                    <div class="m-auto my-5 w-1/5 bg-[#cccc] h-4 max-h-8 rounded-xl" />

                    <div class="  w-full mx-auto flex flex-col  p-[30px] rounded-t-[10px] ">
                        <div class="max-w-[60%]">
                            <ProductSelection v-model:handleSubmit="handleSubmit" />
                        </div>
                        <div class="details__texts flex flex-col grow h-full min-h-[115px]">
                            <div class="mt-4 texts__supplier-and-pdinfo flex flex-col ">
                                <a href="#" class="supplier-and-pdinfo--supplier  ">{{ productItem.supplier_name }}</a>
                                <a href="#" class="supplier-and-pdinfo--pdinfo text-lg tracking-wide	"> {{
        productItem.product_name }}</a>
                            </div>
                            <div class="texts__price-and-weight flex justify-between pt-1.5 pb-2.5 auto ">
                                <p class="price-and-weight--weight">{{ productItem.weight }}</p>
                                <strong class="price-and-weight--price font-bold">{{ productItem.price }} 元</strong>
                            </div>
                        </div>

                        <div class="  mt-auto h-[44px]  button-controll   flex gap-2    flex-row justify-end">
                            <button type="submit"
                                class="max-w-[140px] u-subscribe-btn confirm text-color-primary">確認</button>
                            <DrawerClose class="max-w-[140px] u-subscribe-btn cancel text-color-primary ">取消
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
import { DrawerContent, DrawerOverlay, DrawerPortal, DrawerRoot, DrawerTrigger, DrawerClose } from 'vaul-vue';
import { Form } from "@/common/composables/ui/form";
import { Icon, } from '@iconify/vue';
import { inject, computed, ref } from "vue";


const { addSubscribe, handleSubmit } = inject('sendSubScript')
const watchWindowSize = inject('watchWindowSize')
const productItem = inject('productItem')


const clacWindowSize = computed(() => watchWindowSize.value > 500)

const isOpen = ref(false)
const onsubmit = async (vl) => {
    const orderid = productItem.product_id;
    await (handleSubmit.value(({ quantity,
        frequency }) => {
        addSubscribe({ quantity, frequency, orderid })
    }))(vl)
    isOpen.value = false
}


</script>
