<template>
    <form @submit.prevent="onsubmit">
        <BaseCard>
            <template #Card-Title>付款方式</template>
            <template #Card-Description>添加你想要付款的信用卡資訊</template>
            <template #Card-Content>
                <PayinfoRadioGroup />

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
                                class="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto transition-shadow duration-300">
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

                <FormField v-slot="{ value, handleChange }" name="sameAddress">
                    <CustomCheckbox :value="value" :handleChange="handleChange" class="text-left flex " />
                </FormField>

                <div v-if="!showAddress">

                    {{ showAddress }}

                </div>




            </template>
            <template #Card-Footer>
                <Button class="w-full">
                    下一步
                </Button>
            </template>
        </BaseCard>
    </form>

</template>
<style scoped>
* {
    font-family: RiiT_F
}
</style>
<script setup>
import { Form, FormField } from "@/common/composables/ui/form";
import CustomCheckbox from "@/common/components/ui/from/CustomCheckbox.vue";
import CostomSelect from "@/common/components/ui/from/CostomSelect.vue";
import CostomInput from "@/common/components/ui/from/CostomInput.vue";
import { Button } from '@/common/composables/ui/button'
import BaseCard from "@/common/components/ui/card/BaseCard.vue";
import PayinfoRadioGroup from "@/common/components/ui/from/join/payinfo/PayinfoRadioGroup.vue";
import { paymentinfo, useField } from "@/Plugins/zodValidators.js";
import { userInsertRows } from "@/Plugins/supabaseClinets.js";
import { inject } from "vue";

const profileInfo = inject('profileInfo')
// console.log(
//     Object.values(profileInfo.deliveryAddress).map(item => item.val));


const { router } = inject('paymentInfo')
const { loading,
    handleSubmit, } = paymentinfo({
        creditMoon: 'January',
        creditYear: '2025',
        sameAddress: true
    })

const { value: showAddress } = useField('sameAddress')


const onsubmit = handleSubmit((val) => {


    router

    // userInsertRows()
    userInsertRows()

})

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
</script>