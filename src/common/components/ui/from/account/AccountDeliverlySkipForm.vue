<script setup lang="ts">
import { type Ref, ref } from 'vue'
import type { DateRange } from 'radix-vue'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { getLocalTimeZone, today, parseDate } from '@internationalized/date'
import { type DateValue } from '@internationalized/date'
import { RangeCalendar } from '@/common/composables/ui/range-calendar'
import { FormField, } from '@/common/composables/ui/form'

const placeholder = ref()
const formSchema = toTypedSchema(z.object({ dob: z.string() }))
const { handleSubmit, setValues, } = useForm({ validationSchema: formSchema })
const localeDate = today(getLocalTimeZone()).add({ days: 1 })

const start = ref(null)
const end = localeDate.add({ days: 20 })

const value = ref({
    start: start
    // end,
}) as Ref<DateRange>

const onSubmit = handleSubmit((values) => {
    const { start: tbStart, end: tbEnd } = JSON.parse(values.dob)
    value.value.start = parseDate(tbStart)
})
function isDateUnavailable(date: DateValue) {
    return localeDate.compare(date) <= 0 ? '' : date
}
</script>

<template>
    <form class="flex flex-col  gap-y-3" @submit="onSubmit">
        <FormField name="dob">
            <RangeCalendar v-model:placeholder="placeholder" preventDeselect :is-date-unavailable="isDateUnavailable"
                locale="tw" v-model="value" @update:model-value="(v) => {
        if (v) {
            const data = { start: v.start?.toString(), end: v.end?.toString() }
            setValues({
                dob: JSON.stringify(data),
            })
        }
        else {
            setValues({
                dob: '',
            })
        }

    }" class=" w-full max-w-[436px]  mx-auto  p-1.5 rounded-md border " />
        </FormField>

        <div class=" self-center justify-self-end">
            <button style="max-width: 100%; width: 200px;" class="u-pirmary-button  " type="submit">
                儲存
            </button>
        </div>
    </form>
</template>
