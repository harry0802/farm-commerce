<template>
    <AccountProfileInfoCard>
        <template #card-item>
            <div></div>
        </template>
        <template #card-Button>
            <slot name="customButton" />
        </template>
    </AccountProfileInfoCard>
</template>

<script setup>
import AccountProfileInfoCard from '@/common/components/ui/card/AccountProfileInfoCard.vue'

</script>

