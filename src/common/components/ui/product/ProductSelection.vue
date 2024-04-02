<template>
    <div class="grid gap-6">
        <FormField name="123">
            <CostomSelect user-label="數量">
                <select
                    class="flex w-full rounded-md border border-input bg-transparent text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto  duration-300">
                    <option v-for="(qy, i) in loopData" :key="i">{{ qy }}</option>
                </select>
            </CostomSelect>
        </FormField>
        <FormField name="123">
            <CostomSelect user-label="配送週期">
                <select
                    class="flex w-full rounded-md border border-input bg-transparent text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto  duration-300">
                    <option v-for="(day, i) in fq" :key="i">{{ day }}</option>
                </select>
            </CostomSelect>
        </FormField>
    </div>
</template>

<script setup>
import { defineProps, ref, watch } from "vue";
import { FormField } from "@/common/composables/ui/form";
import CostomSelect from "@/common/components/ui/from/CostomSelect.vue";

const props = defineProps({
    id: String,
})
const loopData = 10
const fq = ['每周一次',
    '隔週一次',
    '每月一次']



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
