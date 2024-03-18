<template>
    <FormItem class="space-y-3">
        <FormLabel>Notify me about...</FormLabel>

        <FormControl>
            <RadioGroup class="flex flex-col space-y-1" v-bind="componentField">
                <FormItem class="flex items-center space-y-0 gap-x-3">
                    <FormControl>
                        <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel class="font-normal">
                        All new messages
                    </FormLabel>
                </FormItem>
                <FormItem class="flex items-center space-y-0 gap-x-3">
                    <FormControl>
                        <RadioGroupItem value="mentions" />
                    </FormControl>
                    <FormLabel class="font-normal">
                        Direct messages and mentions
                    </FormLabel>
                </FormItem>
                <FormItem class="flex items-center space-y-0 gap-x-3">
                    <FormControl>
                        <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel class="font-normal">
                        Nothing
                    </FormLabel>
                </FormItem>
            </RadioGroup>
        </FormControl>
        <FormMessage />
    </FormItem>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import {
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/common/composables/ui/form";

import { RadioGroup, RadioGroupItem } from '@/common/composables/ui/radio-group'
// import { RadioGroupItem, } from 'radix-vue'
</script>

<style scoped></style>
