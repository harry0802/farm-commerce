<template>
    <FormItem>
        <FormLabel class="text-base">{{ userLabel }}</FormLabel>
        <FormControl>
            <Input class="py-4 px-3.5 h-auto transition-shadow   duration-300" type="text" placeholder="shadcn"
                v-bind="componentField" />
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
} from "@/common/composables/ui/form";
import { Input } from '@/common/composables/ui/input'

const props = defineProps({
    componentField: {
        type: Object,
        required: true
    },
    userLabel: {
        type: String,
        required: true
    }
    , userDescription: {
        type: String,
        required: true
    }
})



</script>

<style scoped>
* {
    font-family: RiiT_F;
}
</style>
