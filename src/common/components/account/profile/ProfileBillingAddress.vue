<template>
    <AccountProfileCard :title="'帳單地址'">
        <component :is="isForm?  ProfileBillingAddressForm :ProfileBillingAddressContent">
            <template #customButton>
                <AccountProfileActionBtn v-model="isForm" />
            </template>
        </component>
    </AccountProfileCard>
</template>

<script setup>
import AccountProfileCard from "@/common/components/ui/card/AccountProfileCard.vue";
import AccountProfileActionBtn from '@/common/components/ui/button/AccountProfileActionBtn.vue'
import ProfileBillingAddressContent from "@/common/components/ui/content/account/profile/ProfileBillingAddressContent.vue";
import ProfileBillingAddressForm from "@/common/components/ui/from/account/profile/ProfileBillingAddressForm.vue";

import { ref } from "vue";
const isForm = ref(false)


</script>

<style scoped>
.card__action {
    @apply flex justify-end mt-8 col-span-full
}
</style>
