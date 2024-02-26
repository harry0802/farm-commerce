<template>
    <AccountProfileCard :title="'信用卡'">
        <component :is="isForm?  ProfilePaymentInfoForm :ProfilePaymentInfoContent ">
            <template #customButton>
                <AccountProfileActionBtn v-model="isForm" />
            </template>
        </component>
    </AccountProfileCard>
</template>

<script setup>
import AccountProfileCard from "@/common/components/ui/card/AccountProfileCard.vue";
import AccountProfileActionBtn from '@/common/components/ui/button/AccountProfileActionBtn.vue'
import ProfilePaymentInfoContent from "@/common/components/ui/content/account/profile/ProfilePaymentInfoContent.vue";
import ProfilePaymentInfoForm from "@/common/components/ui/from/account/profile/ProfilePaymentInfoForm.vue";
import { ref } from "vue";
const isForm = ref(false)

</script>

<style scoped>
.card__action {
    @apply flex justify-end mt-8 col-span-full
}
</style>
