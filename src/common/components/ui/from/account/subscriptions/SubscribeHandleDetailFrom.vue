<template>
    <form class="flex h-full flex-col justify-between space-y-6 " @submit="onSubmit">
        <FormField v-for=" item, i in test" :key="i" v-slot="{ componentField }" :name="item.label">
            <FormItem :class="{ quantity: item.price }" class=" max-w-[343px] sm:max-w-[272px]">
                <div>
                    <Select v-bind="componentField">
                        <FormLabel>{{ item.label }}</FormLabel>
                        <FormControl class="h-12">
                            <SelectTrigger>
                                <SelectValue placeholder="選擇你想要更改的日期" />
                            </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                            <div v-if="item.price">
                                <SelectItem v-for="vl, i in 10" :key="i" :value="`${vl}`">
                                    {{ vl }}
                                </SelectItem>
                            </div>

                            <div v-else>
                                <SelectGroup>
                                    <SelectItem v-for="vl, i in item.value" :key="i" :value="vl">
                                        {{ vl }}
                                    </SelectItem>
                                </SelectGroup>
                            </div>
                        </SelectContent>
                    </Select>
                </div>
                <p v-if="item.price">${{ item.price }}</p>

            </FormItem>
        </FormField>
        <div>
            <AccountSubscribeDialog button-text="取消訂閱" title="取消訂閱？" description="您確定要取消訂閱嗎？">
                <template v-slot:customContent="{ handleClose }">
                    <div class="  account-subscribe__content">
                        <Button @click="handleClose" class="subscribe--btn--link u-account-subscribe__btn--mobile"
                            variant="link" type="button">我再想想</Button>
                        <Button class="subscribe--btn--link u-account-subscribe__btn--mobile" variant="link"
                            type="button">確定要取消</Button>
                    </div>
                </template>
            </AccountSubscribeDialog>
        </div>

        <div class="flex flex-col gap-4  max-sm:p-3">
            <Button class="subscribe--btn u-pirmary-button" type="submit">
                儲存
            </Button>
            <Button @click="openForm = false" class="subscribe--btn u-subscribe-btn cancel h-[56px]" type="button">
                取消
            </Button>

        </div>
    </form>
</template>

<script setup>
import AccountSubscribeDialog from "@/common/components/ui/popup/AccountSubscribeDialog.vue";
import { Button } from '@/common/composables/ui/button'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/common/composables/ui/form'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectLabel
} from '@/common/composables/ui/select'



const test = [
    { label: 'Quantity', value: 10, price: 1 },
    { label: 'Frequency', value: ['每週一次', '隔週一次', '每月一次'] },
    { label: 'Delivery Day', value: ["週一", "週二", "週三", "週四", "週五",] },
    { label: 'Change Next Delivery Date', value: ['4/1', '4/2', '4/3', '4/4'] },
]
const openForm = defineModel('openForm')

</script>

<style scoped>
.quantity {
    @apply flex items-center gap-6
}

.subscribe--btn {
    @apply sm:w-auto max-w-[343px] sm:min-w-[168px] sm:max-w-[276px];
}

.subscribe--btn--link {
    @apply text-color-primary-light text-base h-[56px] font-bold tracking-widest
}
</style>
