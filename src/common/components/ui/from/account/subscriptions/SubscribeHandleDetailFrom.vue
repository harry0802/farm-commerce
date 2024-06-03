<template>
    <form class="flex h-full flex-col justify-between space-y-6 " @submit="onSubmit">
        <FormField v-for=" item, i in selectList" :key="i" v-slot="{ componentField }" :name="item.id">
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
                                <SelectItem c v-for="vl, i in 99" :key="i" :value="vl + ''">
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
                        <Button @click="removeTheSubScribe(data)"
                            class="subscribe--btn--link u-account-subscribe__btn--mobile" variant="link"
                            type="button">確定要取消</Button>
                    </div>
                </template>
            </AccountSubscribeDialog>
        </div>

        <div class="flex flex-col gap-4  max-sm:p-3">
            <Button class="subscribe--btn u-pirmary-button" type="submit">
                儲存
            </Button>
            <Button @click="closeFormFn" class="subscribe--btn u-subscribe-btn cancel h-[56px]" type="button">
                取消
            </Button>

        </div>
    </form>
    <LoadingCatOverlayer v-if="isLodaing" />
</template>

<script setup>
import dayjs from "dayjs";
import AccountSubscribeDialog from "@/common/components/ui/popup/AccountSubscribeDialog.vue";
import LoadingCatOverlayer from "@/common/components/ui/animat/LoadingCatOverlayer.vue";
import cartStore from "@/store/modules/cart/cartStore.js";
import { Button } from '@/common/composables/ui/button'
import { userHandleSubscription, toast, useField } from "@/Plugins/zodValidators.js";
import { inject, watchEffect, ref } from "vue";

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/common/composables/ui/form'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/common/composables/ui/select'


const props = defineProps({ data: Object })
const isLodaing = ref(false)
const { specificWeekDay } = cartStore()
const closeFormFn = inject('closeFormFn')
const { changDeliveryDay, handleOrderRemoveSubScribe } = inject('handelSubScribe')

const selectList = [
    { id: 'quantity', label: '數量', value: 99, price: 1, placeholder: '' },
    { id: 'frequency', label: '多久配送一次', value: ['每週一次', '隔週一次', '每月一次'] },
    { id: 'deliveryday', label: '星期幾出貨', value: ["週一", "週二", "週三", "週四", "週五",] },
    { id: 'changeNextDate', label: '下一筆出貨的時間', value: {} },
]
const transformDormats = (d) => dayjs(d).format(`M/D`)
const transformOederFormat = (md) => {
    const yearNow = dayjs().get('year')
    const currentDay = md
    return dayjs(yearNow + currentDay).format(`YYYY/M/D`)
}

const { handleSubmit } = userHandleSubscription(
    {
        quantity: props.data.Quantity + '',
        frequency: props.data.Frequency,
        deliveryday: props.data.DeliveryDay,
        changeNextDate: transformDormats(props.data.NextDelivery_Date)
    }
)


const { value: deliverydayVal } = useField('deliveryday')
const { value: nextDate, setValue: setNextDate } = useField('changeNextDate')



const changeNextDateList = () => {
    const list = specificWeekDay(deliverydayVal.value)
    const result = list.map((d) => transformDormats(d.date))
    const data = selectList.find((i) => i.id === 'changeNextDate')
    data.value = result
    if (!data.value.some((i => i === nextDate.value))) setNextDate('')
}





const onSubmit =
    handleSubmit((value) => {
        const { quantity,
            frequency,
            deliveryday,
            changeNextDate, } = value
        const weekNow = props.data.DeliveryDay
        const nextDate = transformOederFormat(changeNextDate)
        const pdId = props.data.product_id

        if (quantity === props.data.Quantity + '' &&
            frequency === props.data.Frequency &&
            deliveryday === props.data.DeliveryDay &&
            nextDate === props.data.NextDelivery_Date
        ) {
            toast.warning(`I'm still the same 都好像沒有變`)
            closeFormFn()
            return
        }
        isLodaing.value = true
        setTimeout(() => {
            changDeliveryDay({ oldWeek: weekNow, newWeek: deliveryday, quantity, frequency, changeNextDate: nextDate, changePdId: pdId })
            isLodaing.value = false;
            closeFormFn()
            toast.success(`商品更改成功`)
        }, 2000)
    })
const removeTheSubScribe = function (item) {
    isLodaing.value = true
    handleOrderRemoveSubScribe.value(item)
    setTimeout(() => {
        isLodaing.value = false;
        closeFormFn()
        toast.success(`已移除該訂閱商品`)
    }, 1400)

}
watchEffect(() => {
    changeNextDateList()
})


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
