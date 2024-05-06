<script setup>
import { ref } from 'vue'
import { DateRange } from 'radix-vue'
import { getLocalTimeZone, today } from '@internationalized/date'

import { RangeCalendar } from '@/common/composables/ui/range-calendar'

const start = today(getLocalTimeZone())
const end = start.add({ days: 7 })

const value = ref({
    start,
    end,
}) 
</script>

<template>
    <RangeCalendar v-model="value" class="rounded-md border" />
</template>