<template>
    <AccountProfileCard :title="'更改電子郵件'">
        <component :is="isForm?  ProfileChangeEmailForm :ProfileChangeEmailContent ">
            <template #customButton>
                <AccountProfileActionBtn v-model="isForm" />
            </template>
        </component>
    </AccountProfileCard>
</template>

<script setup>
import AccountProfileCard from "@/common/components/ui/card/AccountProfileCard.vue";
import AccountProfileActionBtn from '@/common/components/ui/button/AccountProfileActionBtn.vue'
import ProfileChangeEmailContent from "@/common/components/ui/content/account/profile/ProfileChangeEmailContent.vue";
import ProfileChangeEmailForm from "@/common/components/ui/from/account/profile/ProfileChangeEmailForm.vue";
import { ref, provide } from "vue";
import { store } from "@/common/composables/profileData.js";
import { profileUserEmail } from "@/Plugins/inputValidation.js";

const isForm = ref(false)
const { fields, calcFieldsError } = profileUserEmail()

provide('calcFieldsError', calcFieldsError.calcEmail)
provide('userEmail', fields.userEmail)
provide('store', store)
</script>

<style scoped>
.card__action {
    @apply flex justify-end mt-8 col-span-full
}
</style>
