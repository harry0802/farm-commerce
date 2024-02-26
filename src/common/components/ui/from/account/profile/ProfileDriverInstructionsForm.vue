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
            <FormField v-slot="{ componentField }" name="about">
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
import { inject } from 'vue';



const store = inject(['store'])

const { onSubmit } = profileUserDriverInstructions({
    about: store.driverInstructions.suer_driverTips
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

