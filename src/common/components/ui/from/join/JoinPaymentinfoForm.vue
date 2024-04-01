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

                <FormField v-slot="{ value: checkboxVl, handleChange }" name="sameAddress">
                    <CustomCheckbox :description="getDeliveryAddress()" :value="checkboxVl" :handleChange="handleChange"
                        class="text-left flex mt-5" @click="isAddresSave = false" />
                </FormField>

                <PayInfoForm v-model:getCustomAddress="getCustomAddress" v-model:closeAddress="closeAddress"
                    v-model:isAddresSave="isAddresSave" v-if="!showAddress" />

            </template>
            <template #Card-Footer>
                <Button v-if="!loading" class="w-full" :disabled="!showAddress && !isAddresSave">
                    下一步
                </Button>
                <LoadingCat2 v-else class="h-[50px] " />
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
import CustomCheckbox from "@/common/components/ui/from/CustomCheckbox.vue";
import CostomSelect from "@/common/components/ui/from/CostomSelect.vue";
import CostomInput from "@/common/components/ui/from/CostomInput.vue";
import BaseCard from "@/common/components/ui/card/BaseCard.vue";
import PayinfoRadioGroup from "@/common/components/ui/from/join/payinfo/PayinfoRadioGroup.vue";
import LoadingCat2 from '../../../ui/animat/LoadingCat2.vue'
import { inject, ref } from "vue";
import { userInsertRows, getUserInfo } from "@/Plugins/supabaseClinets.js";
import { Form, FormField } from "@/common/composables/ui/form";
import { paymentinfo, useField } from "@/Plugins/zodValidators.js";
import { Button } from '@/common/composables/ui/button'
import PayInfoForm from "@/common/components/ui/from/join/payinfo/PayInfoForm.vue";
const { store, router } = inject('paymentInfo')
const {
    handleSubmit,
    loading
} = paymentinfo({
    creditMoon: 'January',
    creditYear: '2025',
    sameAddress: true,
})



const { value: creditMoonVl, } = useField('creditMoon')
const { value: creditYearVl, } = useField('creditYear')
const { value: showAddress } = useField('sameAddress')
// defineModel
const getCustomAddress = ref('')
const closeAddress = ref(showAddress)
const isAddresSave = ref(false)



// 預設地址
const getDeliveryAddress = () => Object.values(store.deliveryAddress).map(item => item.val).join(',')

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
        const { id } = await getUserInfo()
        const { deliveryAddress } = store
        const paymentData = {
            client_id: id,
            card_name: val.userName,
            card_cardNumber: val.creditNumber,
            card_date: `${val.creditYear}/${val.creditMoon}`,
            card_password: val.creditLastNb,
        }

        let address = {
            clients_id: id,
            user_Address: deliveryAddress.user_Address.val,
            user_AddressLine: deliveryAddress.user_AddressLine.val,
            user_City: deliveryAddress.user_City.val,
            user_State: deliveryAddress.user_State.val,
            user_ZipCode: deliveryAddress.user_ZipCode.val,
        }


        if (!val.sameAddress) {
            address = {
                clients_id: id,
                ...getCustomAddress.value
            }
        }

        await Promise.all([
            userInsertRows('PaymentInfo', paymentData),
            userInsertRows('BillingAddress', address)]).catch((e) => {
                throw e
            })
        router.push({ name: 'welcome' })
    } finally {
        loading.value = false
    }

})

</script>

<style scoped>
.hidden {
    visibility: hidden;

}
</style>
