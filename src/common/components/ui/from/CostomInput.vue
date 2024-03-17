<template>
    <FormItem>
        <FormLabel class="text-base">{{ userLabel }}</FormLabel>
        <FormControl>
            <Input class="py-4 px-3.5 h-auto transition-shadow   duration-300 " :type="customType"
                :placeholder="userPlaceholder" v-bind="componentField" autocomplete="new-password" />
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
        required: false
    },
    userLabel: {
        type: String,
        required: true
    }
    , userDescription: {
        type: String,
        required: false
    }
    ,
    userPlaceholder: {
        type: String,
    },
    customType: {
        type: String,
        default: 'text'
    }
    ,
})
</script>

<style scoped>
* {
    font-family: RiiT_F;
}

input[type=password] {
    /* 將文本顯示為遮罩樣式 */
    -webkit-text-security: disc;
    /* Chrome 和 Safari */
    -moz-text-security: disc;
    /* 通用 */
}
</style>
