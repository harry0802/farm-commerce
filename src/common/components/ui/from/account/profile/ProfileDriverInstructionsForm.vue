<template>
    <AccountProfileFormCard :onSubmit="onSubmit">
        <template #form-tiitle>
            <div>
                <p class="pb-5">
                    <span> 注意：</span>
                    此更改不適用於截止訂單。如果您需要更改已截止訂單的交貨地址，請與我們聯繫
                </p>
            </div>
        </template>
        <template #form-table>
            <FormField v-slot="{ componentField }" name="suer_driverTips">
                <CostomTextArea class="col-span-2" :user-label="'輸入給司機的提醒'" :user-description="'輸入要更改的內容'"
                    :componentFields="componentField" />
            </FormField>
        </template>

        <template #form-Button>
            <slot name="customButton"></slot>
        </template>
    </AccountProfileFormCard>
</template>

<script setup>
import AccountProfileFormCard from '@/common/components/ui/card/AccountProfileFormCard.vue'
import CostomTextArea from "@/common/components/ui/from/CostomTextArea.vue";
import { profileUserDriverInstructions } from "@/Plugins/zodValidators.js";
import { FormField } from '@/common/composables/ui/form';
import { inject, } from "vue";

const { updateAccount, store } = inject('store')
const closeForm = inject('closeForm')
const toast = inject('toast')

const { handleSubmit } = profileUserDriverInstructions({
    suer_driverTips: store.driverInstructions.suer_driverTips
})

const onSubmit = handleSubmit(async (val) => {
    try {
        if (store.compareObjects(store.driverInstructions, val)) {
            toast.warning('您並沒有更改任何東西')
            return
        }
        const { suer_driverTips } = val
        await updateAccount('deliveryAddress', { suer_driverTips }, 'clients_id')
            .catch(e => {
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

.join-input__control>textarea {
    max-width: 100%;
}
</style>
