<template>
    <AccountProfileCard :title="'需要幫助？'">
        <ProfileNeedHelpContent />
    </AccountProfileCard>
</template>

<script setup>
import AccountProfileCard from "@/common/components/ui/card/AccountProfileCard.vue";
import ProfileNeedHelpContent from "@/common/components/ui/content/account/profile/ProfileNeedHelpContent.vue";

</script>

<style scoped>
.card__action {
    @apply flex justify-end mt-8 col-span-full
}
</style>
