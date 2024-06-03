<template>
    <AccountProfileInfoCard>
        <template #card-item>
            <div class="flex flex-col justify-end  col-span-full gap-y-6">
                <p>帳戶上沒有禮金</p>
                <p class="u-text-large text-color-primary-light">$0</p>
            </div>
        </template>

    </AccountProfileInfoCard>
</template>

<script setup>
import AccountProfileInfoCard from '@/common/components/ui/card/AccountProfileInfoCard.vue'

</script>
