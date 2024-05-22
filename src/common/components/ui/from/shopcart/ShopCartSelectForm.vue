<script setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import {
    FormControl,
    FormField,
    FormItem,
} from '@/common/composables/ui/form'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/common/composables/ui/select'

const formSchema = toTypedSchema(z.object({
    email: z.number()
}))

const { handleSubmit } = useForm({
    validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
    console.log(values);

})
</script>

<template>
    <form class="w-[53px]  space-y-6 bg-white rounded-md border border-color-primary" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="email">
            <FormItem>
                <Select v-bind="componentField">
                    <FormControl>
                        <SelectTrigger class="h-6 py-0 px-2">
                            <SelectValue placeholder="1" />
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="1">
                                1
                            </SelectItem>
                            <SelectItem value="2">
                                2
                            </SelectItem>
                            <SelectItem value="3">
                                3
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </FormItem>
        </FormField>

    </form>
</template>

<style scoped>
* {
    color: #000;
}
</style>