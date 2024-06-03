<script setup>
import AccointDeliverlyList from "@/common/components/ui/product/account/AccointDeliverlyList.vue";
import AccointDeliverlyItem from "@/common/components/ui/product/account/AccointDeliverlyItem.vue";
import { toRefs } from "vue";
import cartStore from "@/store/modules/cart/cartStore.js";
import { useOrderStore } from "@/store/modules/order/index.js";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/common/composables/ui/accordion'

const { openCart } = toRefs(cartStore())
const { myorder, handleSelectionDay } = toRefs(useOrderStore());

const handleEditOrder = function (data) {
    openCart.value()
    handleSelectionDay.value(data)
}
</script>

<template>
    <!-- :default-value="defaultValue" -->
    <Accordion type="single" class="w-full " collapsible>
        <AccordionItem v-for=" (item, i ) in myorder" :key="item.order_id" :value="item.order_id">
            <AccordionTrigger>
                <AccointDeliverlyList :deliverlyIndex="i" :products="item" />
            </AccordionTrigger>
            <AccordionContent class="mb-8">
                <AccointDeliverlyItem :products="item.products" />
                <div class="flex w-full mt-8 justify-between items-center">
                    <div class="self-end ">
                        <p class="text-color-primary font-[GalmuriMono9] tracking-widest">總金額： <span
                                class="font-[GalmuriMono9] font-black">{{
            item.order_amount.total }}</span></p>
                    </div>
                    <div class="flex mr-1 gap-2">
                        <button
                            class="bg-white  rounded-full min-w-[168px] font-[GalmuriMono9] tracking-widest font-bold text-color-primary-light bg-whit border-[2px] border-white hover:border-color-grey-dark  transition-colors duration-300">跳過</button>
                        <button @click="handleEditOrder(item)" class="min-w-[168px] u-pirmary-button">編輯訂單</button>
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
</template>