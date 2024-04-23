<template>
    <AccountProfileFormCard :onsubmit="onsubmit">
        <template #form-tiitle>
            <div>
                <p class="pb-5">
                    輸入新的電子郵件位址。
                </p>
            </div>
        </template>
        <template #form-table>
            <div class="grid col-span-2">
                <div class="text-left">
                    <FormField v-slot="{ componentField }" name="userName">
                        <CostomInput user-label="持有人姓名" :component-field="componentField"
                            user-description="以卡片上的名稱為主" />
                    </FormField>
                    <FormField v-slot="{ componentField }" name="creditNumber">
                        <CostomInput user-label="卡片號碼" :component-field="componentField"
                            user-placeholder="0000 0000 0000 0000 " user-description="限定數字號碼" />
                    </FormField>
                </div>

                <div class="grid grid-cols-3 gap-4">
                    <FormField name="creditMoon">
                        <CostomSelect user-label="moon">
                            <select v-model="creditMoonVl"
                                class="flex w-full rounded-md border border-input bg-transparent text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto  duration-300">
                                <option v-for="(day, i) in mo" :key="i">{{ day }}</option>
                            </select>
                        </CostomSelect>
                    </FormField>


                    <FormField name="creditYear">
                        <CostomSelect user-label="Year">
                            <select v-model="creditYearVl"
                                class="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto transition-shadow duration-300">
                                <option v-for="i in 10" :key="i" :value="`${new Date().getFullYear() + i}`">
                                    {{ new Date().getFullYear() + i }}</option>
                            </select>
                        </CostomSelect>
                    </FormField>

                    <FormField v-slot="{ componentField }" name="creditLastNb">
                        <CostomInput :component-field="componentField" user-label="末三碼"></CostomInput>
                    </FormField>
                </div>
            </div>
        </template>

        <template #form-Button>
            <slot name="customButton"></slot>
        </template>
    </AccountProfileFormCard>
</template>

<script setup>
import AccountProfileFormCard from '@/common/components/ui/card/AccountProfileFormCard.vue'
import CostomInput from "@/common/components/ui/from/CostomInput.vue";
import CostomSelect from "@/common/components/ui/from/CostomSelect.vue";
import { inject } from "vue";
import { updateAccount } from "@/common/composables/profileData.js";
import { FormField } from "@/common/composables/ui/form";
import { paymentinfo, useField } from "@/Plugins/zodValidators.js";
const {
    handleSubmit,
    loading
} = paymentinfo({
    creditMoon: 'January',
    creditYear: '2025',
    sameAddress: true,
})
const toast = inject('toast')
const closeForm = inject('closeForm')

const { value: creditMoonVl, } = useField('creditMoon')
const { value: creditYearVl, } = useField('creditYear')
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


const onsubmit = handleSubmit(async (val) => {
    try {
        loading.value = true
        const paymentData = {
            card_name: val.userName,
            card_cardNumber: val.creditNumber,
            card_date: `${val.creditYear}/${val.creditMoon}`,
            card_password: val.creditLastNb,
        }
        await updateAccount('PaymentInfo', paymentData, 'client_id')
        toast.success('已成功更新')
    } finally {
        closeForm()

    }

})



</script>
<style scoped>
* {
    font-family: RiiT_F;
    @apply text-color-primary
}
</style>
