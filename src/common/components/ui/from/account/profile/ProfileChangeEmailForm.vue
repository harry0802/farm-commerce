<template>
    <AccountProfileFormCard :onSubmit="onSubmit">
        <template #form-tiitle>
            <div>
                <p class="pb-5">
                    新的電子郵件位址。
                </p>
            </div>
        </template>
        <template #form-table>
            <FormField v-slot="{ componentField }" name="userEmail">
                <CostomInput class="col-span-2" :component-field="componentField" :user-label="'電子郵件*'"
                    :user-description="'輸入要更改的內容'" />
            </FormField>
        </template>

        <template #form-Button>
            <slot name="customButton"></slot>
        </template>
    </AccountProfileFormCard>
</template>

<script setup>
import AccountProfileFormCard from '@/common/components/ui/card/AccountProfileFormCard.vue'
import CostomInput from "@/common/components/ui/from/CostomInput.vue";
import { FormField } from '@/common/composables/ui/form';
import { profileUserEmail } from "@/Plugins/zodValidators.js";
import { inject } from 'vue';


const store = inject('store')




const { onSubmit } = profileUserEmail({
    userEmail: store.email.val
})





</script>
<style scoped>
* {
    font-family: RiiT_F;
    @apply text-color-primary
}
</style>

