<template>
    <AccountProfileFormCard :onSubmit="onSubmit">
        <template #form-table>
            <FormField v-slot="{ componentField }" name="user_FirstName">
                <CostomInput :componentField="componentField" :userLabel="'姓'" :userDescription="'輸入要更改的姓氏'" />
            </FormField>

            <FormField v-slot="{ componentField }" name="user_LastName">
                <CostomInput :userLabel="'名'" :componentField="componentField" :userDescription="'輸入要更改的名子'" />
            </FormField>

            <FormField v-slot="{ componentField }" name="user_phone">
                <CostomInput :userLabel="'電話'" :componentField="componentField" :userDescription="'輸入要更改的電話號碼'" />
            </FormField>
            <slot name="customButton"></slot>
        </template>
    </AccountProfileFormCard>
</template>

<script setup>
import AccountProfileFormCard from "@/common/components/ui/card/AccountProfileFormCard.vue";
import CostomInput from "@/common/components/ui/from/CostomInput.vue";
import { FormField, } from "@/common/composables/ui/form";
import { profileUserField } from "@/Plugins/zodValidators.js";
import { inject, } from "vue";

const { updateAccount, store } = inject('store')
const closeForm = inject('closeForm')
const toast = inject('toast')


const { handleSubmit } = profileUserField({
    user_FirstName: store.personalInfo.user_FirstName.val,
    user_LastName: store.personalInfo.user_LastName.val,
    user_phone: store.personalInfo.user_phone.val + '',
})

const onSubmit = handleSubmit(async (val) => {
    try {
        if (store.compareObjects(store.personalInfo, val)) {
            toast.warning('您並沒有更改任何東西')
            return
        }

        const { user_FirstName,
            user_LastName,
            user_phone, } = val

        await Promise.all([
            updateAccount('clients', { user_FirstName, user_LastName }, 'user_id'),
            updateAccount('deliveryAddress', { user_phone }, 'clients_id')
        ]).catch(e => {
            throw e
        })
        toast.success('已成功更新')
    } catch (error) {
        console.error(error.message);
        toast.error('更新失敗')
    } finally {
        closeForm()
    }
})



</script>
<style scoped>
label,
.user-hlper {
    font-family: RiiT_F;
    @apply text-color-primary
}
</style>
