<template>
    <AccountProfileFormCard :onSubmit="onSubmit">
        <template #form-tiitle>
            <div>
                <p class="pb-5">
                    新的電子郵件位址。<br />
                    <span>僅更換接收推送信箱</span>
                </p>
            </div>
        </template>
        <template #form-table>
            <FormField v-slot="{ componentField }" name="user_Email">
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
import { inject, } from "vue";

const { updateAccount, store } = inject('store')
const closeForm = inject('closeForm')
const toast = inject('toast')





const { handleSubmit } = profileUserEmail({
    user_Email: store.email.val
})


const onSubmit = handleSubmit(async ({ user_Email }) => {
    try {
        if (store.email.val === user_Email) {
            toast.warning('您並沒有更改任何東西')
            return
        }


        await updateAccount('clients', { user_Email }, 'user_id').catch(e => {
            throw e
        });
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
* {
    font-family: RiiT_F;
    @apply text-color-primary
}
</style>
