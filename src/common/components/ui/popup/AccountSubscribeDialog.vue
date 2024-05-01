<script setup>
import SubscribeChangDeliveryDay from "@/common/components/ui/popup/subscribe/SubscribeChangDeliveryDay.vue";
import { ref } from 'vue'
import { createReusableTemplate, useMediaQuery } from '@vueuse/core'
import { Button } from '@/common/composables/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/common/composables/ui/dialog'

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/common/composables/ui/drawer'


// Reuse `form` section
const [UseTemplate, GridForm] = createReusableTemplate()
const isDesktop = useMediaQuery('(min-width: 600px)')
const isOpen = ref(false)



</script>


<template>

    <UseTemplate>
        <SubscribeChangDeliveryDay />
    </UseTemplate>

    <Dialog v-if="isDesktop" v-model:open="isOpen">
        <DialogTrigger as-child>
            <Button variant="link" class="items-baseline p-0 self-start text-color-primary-light ml-4 ">
                更換日期
            </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[584px]   ">
            <DialogHeader>
                <DialogTitle class="sm:mb-4 sm:pr-12 sm:u-text-large">
                    更改交貨日期
                </DialogTitle>
                <DialogDescription class="text-base text-color-primary">
                    <p class="sm:mt-0 sm:mb-4 sm:pr-12 ">請選擇您希望將訂閱轉移到的日期。</p>
                </DialogDescription>
            </DialogHeader>
            <GridForm />
        </DialogContent>
    </Dialog>

    <Drawer v-else v-model:open="isOpen">
        <DrawerTrigger as-child>
            <Button variant="link" class="items-baseline p-0 self-start text-color-primary-light ml-4 ">
                更換日期
            </Button>
        </DrawerTrigger>
        <DrawerContent class="rounded-t-3xl h-[70%] px-4 justify-between">
            <DrawerHeader class="text-left pl-0">

                <DrawerTitle class="mb-4 pr-12 max-sm:u-text-large">
                    更改交貨日期
                </DrawerTitle>

                <DrawerDescription class="text-color-primary mt-0 mb-4 pr-12 ">
                    請選擇您希望將訂閱轉移到的日期。
                </DrawerDescription>

            </DrawerHeader>
            <GridForm />
        </DrawerContent>
    </Drawer>
</template>
