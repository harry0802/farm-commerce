<script setup>
import { computed, ref, inject } from "vue";
import { useField } from 'vee-validate'
import { Button } from '@/common/composables/ui/button'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from '@/common/composables/ui/form'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/common/composables/ui/select'
import { userChangeSubscriptionDeliveryday } from "@/Plugins/zodValidators.js";
import { useOrderStore } from "@/store/modules/order/index.js";
import LoadingCatOverlayer from "@/common/components/ui/animat/LoadingCatOverlayer.vue";

const { createGeneralSubScribeConstruction } = useOrderStore()
const { changDeliveryDayAll } = createGeneralSubScribeConstruction()

const loading = ref(false)
const props = defineProps({ week: String })
const closeDialog = inject('closeDialog')


const { handleSubmit } = userChangeSubscriptionDeliveryday({
    deliveryday: props.week
})

const { value: deliverydayVal } = useField('deliveryday')


const onSubmit = handleSubmit(({ deliveryday }) => {
    loading.value = true

    changDeliveryDayAll({ oldWeek: props.week, newWeek: deliveryday })
    setTimeout(() => { loading.value = false; closeDialog() }, 2000)
})

const weekList = ["週一", "週二", "週三", "週四", "週五",]

const isDisable = computed(() => props.week === deliverydayVal.value)


</script>

<template>
    <form class="flex h-full flex-col justify-between space-y-6 " @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="deliveryday">
            <FormItem class=" max-w-[343px] sm:max-w-[376px]">
                <Select v-bind="componentField">
                    <FormControl class="h-12">
                        <SelectTrigger>
                            <SelectValue placeholder="選擇你想要更改的日期" />
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem v-for="email, i in weekList" :key="i" :value="email">
                                {{ email }}
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <FormDescription>
                    <p>此操作會將所有的訂單轉移，如果需要個別操作請使用 <br />編輯 -> 星期幾出貨</p>
                </FormDescription>
                <FormMessage />
            </FormItem>
        </FormField>
        <div
            class=" text-center max-sm:justify-self-end max-sm:p-3 max-sm:border-t max-sm:border-color-grey-light sm:text-right ">
            <Button :disabled="isDisable" class="u-pirmary-button sendData" type="submit">
                儲存
            </Button>
        </div>
    </form>

    <Teleport to="body">
        <LoadingCatOverlayer v-if="loading" />
    </Teleport>

</template>
<style scoped>
button.sendData {
    @apply sm:w-auto max-w-[343px] sm:min-w-[168px] sm:max-w-[276px]
}

button .u-pirmary-button[type="disabled"] {
    background: #f2f2f2 !important;
    color: #5a5858 !important;
    cursor: default;
}
</style>