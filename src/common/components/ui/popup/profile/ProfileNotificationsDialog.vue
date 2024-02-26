<template>
    <Dialog v-model:open="show">
        <DialogTrigger as-child>
            <button>
                <slot name="buttonName">

                </slot>
            </button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px] " :class="'sm:rounded-3xl -translate-y-full'">
            <DialogHeader>
                <DialogTitle class="text-2xl text-color-primary">
                    <slot name="dialogTitle"></slot>
                </DialogTitle>
            </DialogHeader>
            <DialogDescription>
                <slot name="textArea"></slot>
            </DialogDescription>

            <slot name="formArea" :closeDialog="show"></slot>


        </DialogContent>
    </Dialog>
</template>

<script setup>
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription
} from "@/common/composables/ui/dialog";
const show = defineModel('controlDialog')




</script>

<style scoped></style>
