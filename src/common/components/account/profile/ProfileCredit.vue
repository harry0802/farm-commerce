<template>
    <AccountProfileCard :title="'禮金'">
        <ProfileCreditContent />
    </AccountProfileCard>
</template>

<script setup>
import AccountProfileCard from "@/common/components/ui/card/AccountProfileCard.vue";
import ProfileCreditContent from "@/common/components/ui/content/account/profile/ProfileCreditContent.vue";



</script>

<style scoped>
.card__action {
    @apply flex justify-end mt-8 col-span-full
}
</style>
