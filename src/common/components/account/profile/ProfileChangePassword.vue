<template>
    <AccountProfileCard :title="'更改密碼'">
        <component :is="isForm?  ProfileChangePasswordForm :ProfileChangePasswordContent">
            <template #customButton>
                <AccountProfileActionBtn v-model="isForm" />
            </template>
        </component>
    </AccountProfileCard>
</template>

<script setup>
import AccountProfileCard from "@/common/components/ui/card/AccountProfileCard.vue";
import AccountProfileActionBtn from '@/common/components/ui/button/AccountProfileActionBtn.vue'
import ProfileChangePasswordContent from "@/common/components/ui/content/account/profile/ProfileChangePasswordContent.vue";
import ProfileChangePasswordForm from "@/common/components/ui/from/account/profile/ProfileChangePasswordForm.vue";
import { ref } from "vue";
const isForm = ref(false)

</script>

<style scoped>
.card__action {
    @apply flex justify-end mt-8 col-span-full
}
</style>
