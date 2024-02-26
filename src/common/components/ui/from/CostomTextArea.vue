<template>
    <FormItem>
        <FormLabel class="text-base">{{ userLabel }}</FormLabel>
        <FormControl>
            <Textarea :class="'h-40 w-full  transition-shadow   duration-300'" class="resize-none"
                v-bind="componentFields" />
        </FormControl>
        <FormDescription>
            {{ userDescription }}
        </FormDescription>
        <FormMessage />
    </FormItem>
</template>

<script setup>
import {
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/common/composables/ui/form'
import { Textarea } from '@/common/composables/ui/textarea'

const props = defineProps({
    componentFields: { type: Object },
    userLabel: { type: String },
    userDescription: { type: String },
})



</script>

<style scoped>
* {
    font-family: RiiT_F;
}
</style>
