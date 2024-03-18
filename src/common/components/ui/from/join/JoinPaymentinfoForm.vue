<template>
    <form>
        <Card>
            <CardHeader>
                <CardTitle>付款方式</CardTitle>
                <CardDescription>
                    添加你想要付款的信用卡資訊
                </CardDescription>
            </CardHeader>

            <CardContent class="grid gap-6">
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

                <div class="grid gap-2 text-left">
                    <FormField v-slot="{ componentField }" name="123">
                        <CostomInput user-label="持有人姓名" :component-field="componentField"
                            user-description="以卡片上的名稱為主" />
                    </FormField>
                </div>

                <div class="grid gap-2  text-left">
                    <FormField v-slot="{ componentField }" name="123">
                        <CostomInput user-label="卡片號碼" :component-field="componentField"
                            user-placeholder="0000 0000 0000 0000 " user-description="限定數字號碼" />
                    </FormField>
                </div>

                <div class="grid grid-cols-3 gap-4">
                    <FormField name="123">
                        <CostomSelect user-label="moon">
                            <select
                                class="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto transition-shadow duration-300">
                                <option value="" v-for="(day, i) in mo" :key="i">{{ day }}</option>
                            </select>
                        </CostomSelect>


                    </FormField>

                    <FormField name="123">
                        <CostomSelect user-label="Year">
                            <select
                                class="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto transition-shadow duration-300">
                                <option v-for="i in 10" :key="i" :value="`${new Date().getFullYear() + i}`">
                                    {{ new Date().getFullYear() + i }}</option>
                            </select>
                        </CostomSelect>
                    </FormField>

                    <FormField v-slot="{ componentField }" name="2">
                        <CostomInput :component-field="componentField" user-label="末三碼"></CostomInput>
                    </FormField>
                </div>

                <div class="">
                    <FormField name="2">
                        <CustomCheckbox />
                    </FormField>
                </div>

            </CardContent>
            <CardFooter>
                <Button class="w-full">
                    Continue
                </Button>
            </CardFooter>
        </Card>
    </form>
    <form action="">
        <BaseCard>
            <template #Card-Title>付款方式</template>
            <template #Card-Description>添加你想要付款的信用卡資訊</template>
            <template #Card-Content>
                <FormField v-slot="{ componentField }" name="111">
                    <PayinfoRadioGroup v-bind="componentField" />
                </FormField>
            </template>
            <template #Card-Footer>
                <Button class="w-full">
                    Continue
                </Button>
            </template>
        </BaseCard>
    </form>

</template>
<style scoped>
* {
    font-family: RiiT_F;
}
</style>
<script setup>
import { Form, FormField } from "@/common/composables/ui/form";
import CustomCheckbox from "@/common/components/ui/from/CustomCheckbox.vue";
import CostomSelect from "@/common/components/ui/from/CostomSelect.vue";
import CostomInput from "@/common/components/ui/from/CostomInput.vue";
import { RadioGroup } from '@/common/composables/ui/radio-group'
import { RadioGroupItem, } from 'radix-vue'
import { Button } from '@/common/composables/ui/button'
import { Icon } from '@iconify/vue';
import BaseCard from "@/common/components/ui/card/BaseCard.vue";

// 
import PayinfoRadioGroup from "@/common/components/ui/from/join/payinfo/PayinfoRadioGroup.vue";
// 

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/common/composables/ui/card'
import { Label } from '@/common/composables/ui/label'

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
</script>