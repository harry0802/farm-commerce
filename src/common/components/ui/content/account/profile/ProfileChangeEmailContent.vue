<template>
    <AccountProfileInfoCard>
        <template #card-item>
            <div>
                <div class="text-lg mb-2">{{ store.email.title }}</div>
                <div class="">{{ store.email.val }}</div>
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
const { store } = inject('store')
</script>
