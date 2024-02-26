<template>
    <AccountProfileCard :title="'通知'">
        <ProfileNotificationsContent />
    </AccountProfileCard>
</template>

<script setup>
import AccountProfileCard from "@/common/components/ui/card/AccountProfileCard.vue";
import ProfileNotificationsContent from "@/common/components/ui/content/account/profile/ProfileNotificationsContent.vue";



</script>

<style scoped>
.card__action {
    @apply flex justify-end mt-8 col-span-full
}
</style>
