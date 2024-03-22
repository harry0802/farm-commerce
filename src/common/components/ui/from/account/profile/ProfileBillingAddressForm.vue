<template>
    <AccountProfileFormCard :onSubmit="onSubmit">

        <template #form-table>
            <div class="col-span-full grid w-full gap-y-6 gap-x-8 sm:grid-cols-2 twzipcode" ref="zipcode">
                <FormField v-slot="{ componentField }" name="user_Address">
                    <CostomInput :componentField="componentField" :userLabel="'地址*'" :userDescription="'輸入要更改的內容'" />
                </FormField>

                <FormField v-slot="{ componentField }" name="user_AddressLine">
                    <CostomInput :componentField="componentField" :userLabel="'樓號*'" :userDescription="'輸入要更改的內容'" />

                </FormField>

                <FormField name="user_City">
                    <CostomSelect :userLabel="'縣市*'" :userDescription="'輸入要更改的內容'">
                        <select
                            class="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50   py-4 px-3.5 h-auto transition-shadow   duration-300"
                            data-role="county" />
                    </CostomSelect>
                </FormField>

                <FormField name="user_State">
                    <CostomSelect :user-label="'地區*'" :user-description="'輸入要更改的內容'">
                        <select
                            class="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50   py-4 px-3.5 h-auto transition-shadow   duration-300"
                            data-role="district" />
                    </CostomSelect>
                </FormField>

                <FormField name="user_ZipCode">
                    <CostomSelect :user-label="'郵遞區號*'" :user-description="'輸入要更改的內容'">
                        <input v-model.number="value"
                            class="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50   py-4 px-3.5 h-auto transition-shadow   duration-300"
                            data-role="zipcode" />
                    </CostomSelect>
                </FormField>
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
import { inject, onMounted, ref } from "vue";
import { FormField, } from "@/common/composables/ui/form";
import { useField, profileUserAddress } from "@/Plugins/zodValidators.js";
import { queryZipCode } from "@/Plugins/zipCode.js";

const zipcode = ref()
const closeForm = inject('closeForm')
const { updateAccount, store } = inject('store')
const toast = inject('toast')

const { initializeZipcodeWithPage, handleSubmit, defineHandleFn } = profileUserAddress(
    {
        user_Address: store.billingAddress.user_Address.val,
        user_AddressLine: store.billingAddress.user_AddressLine.val,
        user_City: store.billingAddress.user_City.val,
        user_State: store.billingAddress.user_State.val,
        user_ZipCode: `${store.billingAddress.user_ZipCode.val}`,
    }
)

const { handleChange: setuser_City } = useField('user_City')
const { handleChange: setuser_State } = useField('user_State')
const { value, handleChange: setZipcode, } = useField('user_ZipCode')
defineHandleFn(setuser_City, setuser_State, setZipcode)




const onSubmit = handleSubmit(async val => {

    try {
        if (store.compareObjects(store.deliveryAddress, val)) {
            toast.warning('您並沒有更改任何東西')
            return
        }
        const { user_Address,
            user_AddressLine,
            user_City,
            user_State,
            user_ZipCode, }
            = val

        await queryZipCode(+user_ZipCode).catch(e => { throw e })
        await updateAccount('BillingAddress', {
            user_Address,
            user_AddressLine,
            user_City,
            user_State,
            user_ZipCode,
        }, 'clients_id').catch(e => { throw e })

        toast.success('已成功更新')
    } catch (error) {
        console.error(error.message);
        toast.error('更新失敗')
    } finally {
        closeForm()
    }
})




onMounted(() => {
    const zipCode = initializeZipcodeWithPage(zipcode)
    zipCode.set({
        "county": store.billingAddress.user_City.val,
        "district": store.billingAddress.user_State.val,
        'zipcode': store.billingAddress.user_ZipCode.val
    });
})

</script>
<style scoped>
* {
    font-family: RiiT_F;
    @apply text-color-primary
}
</style>
