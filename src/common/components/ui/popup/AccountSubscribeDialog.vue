<script setup>
import { ref } from 'vue'
import { cn } from "@/lib/utils";
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
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/common/composables/ui/drawer'

// Reuse `form` section
const [UseTemplate, GridForm] = createReusableTemplate()
const isDesktop = useMediaQuery('(min-width: 600px)')
const isOpen = ref(false)

const handleClose = () => isOpen.value = false


const props = defineProps({
    buttonText: String,
    title: String,
    description: String,
    closeButton: { type: Boolean, default: false },
    class: String
})
</script>


<template>
    <UseTemplate>
        <slot name="customContent" :handleClose="handleClose" />
    </UseTemplate>


    <Dialog v-if="isDesktop" v-model:open="isOpen">
        <DialogTrigger as-child>
            <slot name="button">
                <Button variant="link" class="items-baseline p-0 self-start text-color-primary-light ml-4 ">
                    {{ buttonText }}
                </Button>
            </slot>
        </DialogTrigger>
        <DialogContent :class="cn('sm:h-[323px] sm:max-w-[584px]', props.class)">
            <DialogHeader>
                <DialogTitle class="sm:mb-4 sm:pr-12 sm:u-text-large">
                    {{ title }}
                </DialogTitle>
                <DialogDescription class="text-base text-color-primary">
                    <slot name="description">
                        <p class="sm:mt-0 sm:mb-4 sm:pr-12 ">
                            {{ description }}
                        </p>
                    </slot>
                </DialogDescription>
            </DialogHeader>
            <GridForm />
        </DialogContent>
    </Dialog>

    <Drawer v-else v-model:open="isOpen">
        <DrawerTrigger as-child>
            <slot name="button">
                <Button variant="link" class="items-baseline p-0 self-start text-color-primary-light ml-4 ">
                    {{ buttonText }}
                </Button>
            </slot>
        </DrawerTrigger>
        <DrawerContent class="rounded-t-3xl h-[70%] px-4 ">
            <DrawerHeader class="text-left pl-0">
                <DrawerTitle class="mb-4 pr-12 max-sm:u-text-large">
                    {{ title }}
                </DrawerTitle>
                <DrawerDescription class="text-color-primary ">
                    <slot name="description">
                        <p class="sm:mt-0 sm:mb-4 sm:pr-12 ">
                            {{ description }}
                        </p>
                    </slot>
                </DrawerDescription>
            </DrawerHeader>
            <GridForm />
        </DrawerContent>
    </Drawer>
</template>
