<script setup>
import { computed } from "vue";
import {
  RadioGroupIndicator,
  RadioGroupItem,
  useForwardProps,
} from "radix-vue";

import { CheckIcon } from "@radix-icons/vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  id: { type: String, required: false },
  value: { type: String, required: false },
  disabled: { type: Boolean, required: false },
  required: { type: Boolean, required: false },
  name: { type: String, required: false },
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
  <RadioGroupItem v-bind="forwardedProps" :value="forwardedProps.value.value" :id="forwardedProps.value.id"
    :disabled="forwardedProps.value.disabled" :required="forwardedProps.value.required"
    :name="forwardedProps.value.name" :asChild="forwardedProps.value.asChild" :as="forwardedProps.value.as" :class="cn(
    'aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
    props.class
  )
    ">

    <RadioGroupIndicator
      class="flex  items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-grass11">
      <CheckIcon class="h-3.5 w-3.5 fill-primary" />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
