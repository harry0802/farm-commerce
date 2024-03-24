<template>
    <AccountProfileCard :title="'個人資訊'">
        <component :is="isForm?  ProfilePersonalInfoForm :ProfilePersonalInfo">
            <template #customButton>
                <AccountProfileActionBtn v-model="isForm" />
            </template>
        </component>
    </AccountProfileCard>
</template>

<script setup>
import AccountProfileCard from "@/common/components/ui/card/AccountProfileCard.vue";
import ProfilePersonalInfo from "@/common/components/ui/content/account/profile/ProfilePersonalInfo.vue";
import AccountProfileActionBtn from '@/common/components/ui/button/AccountProfileActionBtn.vue'
import ProfilePersonalInfoForm from '@/common/components/ui/from/account/profile/ProfilePersonalInfoForm.vue'
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
