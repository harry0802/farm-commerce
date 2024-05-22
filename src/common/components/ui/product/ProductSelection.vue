<template>
    <div class="grid gap-6">
        <FormField name="quantity">
            <CostomSelect user-label="數量">
                <select v-model="quantityVl"
                    class="flex w-full rounded-md border border-input bg-transparent text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto  duration-300">
                    <option v-for="(qy, i) in loopData" :key="i">{{ qy }}</option>
                </select>
            </CostomSelect>
        </FormField>


        <FormField name="frequency">
            <CostomSelect user-label="配送週期">
                <select v-model="frequencyVl"
                    class="flex w-full rounded-md border border-input bg-transparent text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto  duration-300">
                    <option v-for="(day, i) in fq" :key="i">{{ day }}</option>
                </select>
            </CostomSelect>
        </FormField>
    </div>
</template>

<script setup>
import { inject } from "vue";
import { FormField } from "@/common/composables/ui/form";
import CostomSelect from "@/common/components/ui/from/CostomSelect.vue";
import { useForm, useField } from "vee-validate";

const loopData = 10
const fq = ['每周一次', '隔週一次', '每月一次']

const getOrderSubscription = inject('getOrderSubscription')
const { isSubscribe } = inject('tdOrderInfo')


const { handleSubmit } = useForm(
    {
        initialValues: {
            quantity: isSubscribe.value ? getOrderSubscription.value.Quantity : 1,
            frequency: isSubscribe.value ? getOrderSubscription.value.Frequency : fq[0]
        }
    })



const { value: quantityVl } = useField('quantity',)
const { value: frequencyVl, } = useField('frequency')

const sendHandleSubmit = defineModel('handleSubmit')
sendHandleSubmit.value = handleSubmit




</script>

<style scoped>
select {
    outline: none;
    transition: all .3s;
}

select:focus {
    border-color: #000;
}

@media screen and (min-width: 599px) {
    select {
        max-width: 276px;
        margin-top: 1rem;
    }

}
</style>
