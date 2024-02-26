
<template>
    <form @submit="onSubmit">
        <FormField name="items">
            <FormItem>
                <div class="mb-4">
                    <FormDescription class="text-color-primary text-base">
                        電子報訂閱
                    </FormDescription>
                </div>
                <FormField v-for="item in items" v-slot="{ value, handleChange }" :key="item.id" type="checkbox"
                    :value="item.id" :unchecked-value="false" name="items">
                    <FormItem class="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                            <Checkbox class="data-[state=checked]:bg-color-primary" :checked="value.includes(item.id)"
                                @update:checked="handleChange" />
                        </FormControl>
                        <FormLabel class="font-normal">
                            {{ item.label }}
                        </FormLabel>
                    </FormItem>
                </FormField>
                <FormMessage />
            </FormItem>
        </FormField>

        <div class="flex justify-end mt-4">
            <button type="submit" class="u-pirmary-button profil__edit">
                儲存
            </button>
        </div>
    </form>
</template>
  

<script setup >
import { useForm } from 'vee-validate'
import { updateAccount, store } from "@/common/composables/profileData.js";
import { toTypedSchema } from '@vee-validate/zod'
import { Checkbox } from '@/common/composables/ui/checkbox'
import { toast } from 'vue-sonner'

import * as z from "zod";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/common/composables/ui/form'

const dialog = defineModel('controlDialog')
const items = [
    {
        id: 'EmailNewsletters',
        label: '電子報訂閱',
    },
    {
        id: 'SalesAndPromotions',
        label: '特價優惠消息',
    },
    {
        id: 'Events',
        label: '活動資訊',
    },
    {
        id: 'New Products',
        label: '新產品通知',
    },
    {
        id: 'OnlyVegan-friendly',
        label: '僅寄送素食相關的郵件',
    },

]



const formSchema = toTypedSchema(z.object({
    items: z.array(z.string())
}))


const { handleSubmit } = useForm({
    validationSchema: formSchema,
    initialValues: {
        items: store.notifications
    },
})

const onSubmit = handleSubmit(async (values) => {
    try {
        const updateData = { notifications: values.items }
        const response = await updateAccount('clients', updateData, 'user_id')
        if (!response) throw response
        if (response) {
            toast.success('更新成功')
        }
    } catch (error) {
        console.error(error.message);

    } finally {
        dialog.value = false
    }

})



</script>

<style scoped></style>
