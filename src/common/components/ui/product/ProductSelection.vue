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
import { defineProps, inject } from "vue";
import { FormField } from "@/common/composables/ui/form";
import CostomSelect from "@/common/components/ui/from/CostomSelect.vue";
import { useForm, useField } from "vee-validate";
// const props = defineProps({
//     orderData: Object
// })
const loopData = 10
const fq = ['每周一次', '隔週一次', '每月一次']

const getOrderSubscription = inject('getOrderSubscription')

const { handleSubmit } = useForm(
    {
        initialValues: {
            quantity: getOrderSubscription.value ? getOrderSubscription.value.Quantity : 1,
            frequency: getOrderSubscription.value ? getOrderSubscription.value.Frequency : fq[0]
        }
    })




const { value: quantityVl } = useField('quantity',)
const { value: frequencyVl, } = useField('frequency')

const sendHandleSubmit = defineModel('handleSubmit')
sendHandleSubmit.value = handleSubmit



/*
1. 數量 ok  
2. 配送週期 ， 

default 
每周一次 ? 1. 星期幾    2. 下一筆訂單的日期   tips:對應到該星期的日期   3. 添加到訂單， 到月底前的每週一筆 （1）
隔週一次 ? 1. 星期幾    2. 下一筆訂單的日期   tips:對應到該星期的日期   3. 添加到訂單， 到月底前的每隔週一筆 (7)
每月一次 ?  1. 星期幾    2. 下一筆訂單的日期   tips:對應到該星期的日期   3. 添加到訂單， 到月底前的每隔週一筆 (14)
*/




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
