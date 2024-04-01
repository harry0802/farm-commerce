<template>
    <div class="">
        <FormField name="123">
            123
            <CostomSelect>
                <select
                    class="flex w-full rounded-md border border-input bg-transparent text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto  duration-300">
                    <option v-for="(day, i) in mo" :key="i">{{ day }}</option>
                </select>
            </CostomSelect>
        </FormField>
        <FormField name="123">
            <CostomSelect>
                <select
                    class="flex w-full rounded-md border border-input bg-transparent text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto  duration-300">
                    <option v-for="(day, i) in mo" :key="i">{{ day }}</option>
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

const selectedItem = ref(1);
const mo = ['January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',]

watch(
    () => props.loopData,
    (newValue) => {
        // Update selected item when loopData changes
        selectedItem.value = newValue[0]; // Set to the first item, or adjust as needed
    }
);
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
