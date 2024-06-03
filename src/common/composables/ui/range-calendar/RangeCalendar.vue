<script setup>
import { computed } from "vue";
import { RangeCalendarRoot, useForwardPropsEmits } from "radix-vue";
import {
  RangeCalendarCell,
  RangeCalendarCellTrigger,
  RangeCalendarGrid,
  RangeCalendarGridBody,
  RangeCalendarGridHead,
  RangeCalendarGridRow,
  RangeCalendarHeadCell,
  RangeCalendarHeader,
  RangeCalendarHeading,
  RangeCalendarNextButton,
  RangeCalendarPrevButton,
} from ".";
import { cn } from "@/lib/utils";

const props = defineProps({
  defaultPlaceholder: { type: null, required: false },
  defaultValue: { type: Object, required: false },
  modelValue: { type: Object, required: false },
  placeholder: { type: null, required: false },
  pagedNavigation: { type: Boolean, required: false },
  preventDeselect: { type: Boolean, required: false },
  weekStartsOn: { type: Number, required: false },
  weekdayFormat: { type: String, required: false },
  calendarLabel: { type: String, required: false },
  fixedWeeks: { type: Boolean, required: false },
  maxValue: { type: null, required: false },
  minValue: { type: null, required: false },
  locale: { type: null, required: false },
  numberOfMonths: { type: Number, required: false },
  disabled: { type: Boolean, required: false },
  readonly: { type: Boolean, required: false },
  initialFocus: { type: Boolean, required: false },
  isDateDisabled: { type: Function, required: false },
  isDateUnavailable: { type: Function, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
});


const emits = defineEmits(["update:modelValue", "update:placeholder"]);

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <RangeCalendarRoot v-slot="{ grid, weekDays }" :class="cn('p-3', props.class)" v-bind="forwarded">
    <RangeCalendarHeader>
      <RangeCalendarPrevButton />
      <RangeCalendarHeading :class="'text-lg'" />
      <RangeCalendarNextButton />
    </RangeCalendarHeader>

    <div class="flex flex-col  gap-y-4   sm:flex-row sm:gap-x-4 sm:gap-y-0">
      <RangeCalendarGrid v-for="month in grid" :key="month.value.toString()">
        <RangeCalendarGridHead>
          <RangeCalendarGridRow :class="'grid grid-cols-7'">
            <RangeCalendarHeadCell :class="'m-auto text-lg'" v-for="day in weekDays" :key="day">
              {{ day }}
            </RangeCalendarHeadCell>
          </RangeCalendarGridRow>
        </RangeCalendarGridHead>


        <RangeCalendarGridBody>
          <RangeCalendarGridRow v-for="(weekDates, index) in month.rows" :key="`weekDate-${index}`"
            class="grid grid-cols-7 ">
            <RangeCalendarCell v-for="weekDate in weekDates" :key="weekDate.toString()" :date="weekDate"
              class="aspect-square	 place-content-center place-items-center 	">
              <RangeCalendarCellTrigger class="text-sm" :day="weekDate" :month="month.value" />
            </RangeCalendarCell>
          </RangeCalendarGridRow>
        </RangeCalendarGridBody>
      </RangeCalendarGrid>
    </div>
  </RangeCalendarRoot>
</template>
<style scoped></style>