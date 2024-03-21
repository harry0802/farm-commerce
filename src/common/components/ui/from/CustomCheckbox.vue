<template>
    <FormItem class="flex flex-row items-start gap-x-3 space-y-0 rounded-md border p-4  ">
        <FormControl>
            <Checkbox class="" :checked="value" @update:checked="handleChange" />
        </FormControl>
        <div class="space-y-1 leading-none ">
            <FormLabel class=" ">帳單地址與您送貨的地址一樣嗎？</FormLabel>
            <FormDescription>
                預設的地址
            </FormDescription>
            <FormMessage />
        </div>
    </FormItem>
</template>

<script setup>
import { Checkbox } from "@/common/composables/ui/checkbox";
import {
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/common/composables/ui/form'





const props = defineProps({
    value: { type: String, required: false },
    handleChange: { type: Function, required: false },
})





</script>

<style scoped></style>
