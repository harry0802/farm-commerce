<template>
    <RadioGroup default-value="card" class="grid grid-cols-3 gap-4">
        <div>
            <RadioGroupItem id="card" value="card" class="peer sr-only" />
            <Label for="card"
                class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                <Icon class="mb-3 h-6 w-6" icon="solar:card-2-broken" />
                Card
            </Label>
        </div>
        <div>
            <RadioGroupItem id="paypal" value="paypal" class="peer sr-only" />
            <Label for="paypal"
                class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">

                <Icon class=" mb-3 h-6 w-6" icon="simple-line-icons:paypal" />
                Paypal
            </Label>
        </div>
        <div>
            <RadioGroupItem id="apple" value="apple" class="peer sr-only" />
            <Label for="apple"
                class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">

                <Icon class=" mb-3 h-6 w-6" icon="fa-brands:cc-apple-pay" />
                Apple
            </Label>
        </div>
    </RadioGroup>


</template>

<script setup>
import { RadioGroup } from '@/common/composables/ui/radio-group'
import { RadioGroupItem, } from 'radix-vue'
import { Icon } from '@iconify/vue';

</script>

<style scoped></style>
