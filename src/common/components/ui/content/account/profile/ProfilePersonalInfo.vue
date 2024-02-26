<template>
    <AccountProfileInfoCard>
        <template #card-item>
            <AccountProfileItems :profile-info="store.personalInfo" />
        </template>
        <template #card-Button>
            <slot name="customButton" />
        </template>
    </AccountProfileInfoCard>
</template>

<script setup>
import AccountProfileInfoCard from '@/common/components/ui/card/AccountProfileInfoCard.vue'
import AccountProfileItems from "@/common/components/ui/text/AccountProfileItems.vue";
import { inject } from 'vue';
const store = inject(['store'])



</script>

