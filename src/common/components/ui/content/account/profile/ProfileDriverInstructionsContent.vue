<template>
    <AccountProfileInfoCard>
        <template #card-item>
            <div>
                <p>{{ store.driverInstructions.suer_driverTips }}</p>
            </div>
        </template>
        <template #card-Button>
            <slot name="customButton" />
        </template>
    </AccountProfileInfoCard>
</template>

<script setup>
import AccountProfileInfoCard from '@/common/components/ui/card/AccountProfileInfoCard.vue'
import { inject } from 'vue';
const { store } = inject(['store'])


</script>
