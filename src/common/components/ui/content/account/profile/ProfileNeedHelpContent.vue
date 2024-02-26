<template>
    <AccountProfileInfoCard>
        <template #card-item>
            <div class="flex flex-col justify-end  col-span-full gap-y-6 text-color-primary-light text-lg">
                <p>前往常見問題 </p>
                <p>聯繫我們</p>
            </div>
        </template>
        <template #card-Button>
            <slot name="customButton" />
        </template>
    </AccountProfileInfoCard>
</template>

<script setup>
import AccountProfileInfoCard from '@/common/components/ui/card/AccountProfileInfoCard.vue'

</script>

