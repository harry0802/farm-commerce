<script setup>
import { computed, } from "vue";
import { RangeCalendarCell, useForwardProps } from "radix-vue";
import { cn } from "@/lib/utils";
const props = defineProps({
  date: { type: null, required: true },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
<!-- [&:has([data-selected])]:bg-accent -->
<!-- [&:has([data-selected][data-outside-month])]:bg-accent/50  -->
<template>
  <RangeCalendarCell :class="cn('relative flex    p-0 text-center text-sm focus-within:relative focus-within:z-20   first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md  ', props.class
)" v-bind="forwardedProps">
    <slot />
  </RangeCalendarCell>
</template>
