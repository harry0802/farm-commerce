<script setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/common/composables/ui/button'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from '@/common/composables/ui/form'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/common/composables/ui/select'
// import { toast } from '@/common/composables/ui/toast'

const formSchema = toTypedSchema(z.object({
    email: z
        .string({
            required_error: 'Please select an email to display.',
        })
        .email(),
}))

const { handleSubmit } = useForm({
    validationSchema: formSchema,
    initialValues: {
        email: 'm@example.com'
    }

})


const onSubmit = handleSubmit((values) => {
    console.log(values);
})

const test = ['m@example.com', 'm@google.com', 'm@support.com']

</script>

<template>
    <form class="flex h-full flex-col justify-between space-y-6 " @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="email">
            <FormItem class=" max-w-[343px] sm:max-w-[376px]">
                <Select v-bind="componentField">
                    <FormControl class="h-12">
                        <SelectTrigger>
                            <SelectValue placeholder="選擇你想要更改的日期" />
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem v-for="email, i in test" :key="i" :value="email">
                                {{ email }}
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <FormDescription>
                    You can manage email addresses in your
                </FormDescription>
                <FormMessage />
            </FormItem>
        </FormField>
        <div
            class=" text-center max-sm:justify-self-end max-sm:p-3 max-sm:border-t max-sm:border-color-grey-light sm:text-right ">
            <Button class="u-pirmary-button sendData " type="submit">
                儲存
            </Button>
        </div>
    </form>
</template>
<style scoped>
button.sendData {
    @apply sm:w-auto max-w-[343px] sm:min-w-[168px] sm:max-w-[276px]
}

button .u-pirmary-button[type="disabled"] {
    background: #f2f2f2 !important;
    color: #5a5858 !important;
    cursor: default;
}
</style>