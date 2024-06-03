<script setup>
import { computed } from "vue";
import { RangeCalendarCellTrigger, useForwardProps } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  day: { type: null, required: true },
  month: { type: null, required: true },
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

<template>
  <RangeCalendarCellTrigger :class="cn(
              ' place-content-center  rounded-md h-[35px] w-[90%] p-0 font-normal data-[selected]:opacity-100 hover:bg-color-grey-light data-[data-today]:bg-color-primary [&[data-today]:not([data-selected])]:text ',
              // 'data-[focused]:bg-primary data-[focused]:text-white ',
              // Selection Start
              ' data-[selection-start]:bg-primary data-[selection-start]:text-primary-foreground data-[selection-start]:hover:opacity-80 data-[selection-start]:hover:text-primary-foreground data-[selection-start]:focus:text-primary data-[selection-start]:focus:bg-white data-[selection-start]:focus:border-[2px]  data-[selection-start]:focus:border-[#000] ',
              // Selection End
              'data-[selection-end]:bg-primary  data-[selection-end]:text-primary-foreground data-[selection-end]:hover:opacity-80 data-[selection-end]:hover:text-primary-foreground  data-[selection-end]:focus:text-primary data-[selection-end]:focus:bg-white data-[selection-end]:focus:border-[2px]  data-[selection-end]:focus:border-[#000] ',
              // Outside months
              'data-[outside-month]:pointer-events-none data-[outside-month]:text-muted-foreground data-[outside-month]:opacity-50 [&[data-outside-month][data-selected]]:bg-accent/50 [&[data-outside-month][data-selected]]:text-muted-foreground [&[data-outside-month][data-selected]]:opacity-30 ',
              // Disabled
              // 'data-[disabled]:hidden',
              // Unavailable
              ' data-[unavailable]:opacity-30 data-[unavailable]:line-through',
              // highlighted
              // '[&[data-highlighted]:not([data-selection-start],[data-selection-end])]:bg-color-grey-light  [&[data-highlighted]:not([data-selection-start],[data-selection-end])]:w-full [&[data-highlighted]:not([data-selection-start],[data-selection-end])]:rounded-none ',
              // selected
              '[&[data-selected]:not([data-selection-start],[data-selection-end])]:bg-color-grey-light   [&[data-selected]:not([data-selection-start],[data-selection-end])]:w-full [&[data-selected]:not([data-selection-start],[data-selection-end])]:rounded-none',
              props.class
            )
              " v-bind="forwardedProps">
    <slot />
  </RangeCalendarCellTrigger>
</template>

<style scoped>
.a {

  @apply bg-color-primary
}
</style>