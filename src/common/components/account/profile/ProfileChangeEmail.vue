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
const isForm = ref(false)
const closeForm = () => isForm.value = false
provide('closeForm', closeForm)

</script>

<style scoped>
.card__action {
    @apply flex justify-end mt-8 col-span-full
}
</style>
