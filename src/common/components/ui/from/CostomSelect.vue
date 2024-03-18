<template>
    <FormItem>
        <FormLabel>{{ userLabel }}</FormLabel>
        <FormControl>
            <slot />
        </FormControl>
        <FormDescription>
            {{ userDescription }}
        </FormDescription>
        <p class="text-[0.8rem] font-medium enterErrorHelp">{{ errorMessage }}</p>
        <FormMessage />
    </FormItem>
</template>

<script setup>

import {
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage
} from '@/common/composables/ui/form'

const props = defineProps({
    userLabel: { type: String, required: false },
    userDescription: { type: String, required: false },
    errorMessage: { type: String, required: false },
})
</script>
<style scoped>
* {
    font-family: RiiT_F;
}
</style>