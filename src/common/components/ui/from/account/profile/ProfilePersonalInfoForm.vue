<template>
    <AccountProfileFormCard :onSubmit="onSubmit">
        <template #form-table>
            <FormField v-slot="{ componentField }" name="userFirstName">
                <CostomInput :componentField="componentField" :userLabel="'姓'" :userDescription="'輸入要更改的姓氏'" />
            </FormField>

            <FormField v-slot="{ componentField }" name="userLastName">
                <CostomInput :userLabel="'名'" :componentField="componentField" :userDescription="'輸入要更改的名子'" />
            </FormField>

            <FormField v-slot="{ componentField }" name="phone">
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
const store = inject(['store'])
const { onSubmit } = profileUserField({
    userFirstName: store.personalInfo.user_FirstName.val,
    userLastName: store.personalInfo.user_LastName.val,
    phone: store.personalInfo.user_phone.val,
})

</script>
<style scoped>
label,
.user-hlper {
    font-family: RiiT_F;
    @apply text-color-primary
}
</style>

