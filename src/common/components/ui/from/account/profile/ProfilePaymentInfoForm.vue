<template>
    <AccountProfileFormCard>
        <template #form-tiitle>
            <div>
                <p class="pb-5">
                    輸入新的電子郵件位址。
                </p>
            </div>
        </template>
        <template #form-table>
            <div class="join-input__control col-span-2">
                <label for="credit-card">信用卡</label>
                <input id="credit-card" type="text">
            </div>
        </template>

        <template #form-Button>
            <slot name="customButton"></slot>
        </template>
    </AccountProfileFormCard>
</template>

<script setup>
import AccountProfileFormCard from '@/common/components/ui/card/AccountProfileFormCard.vue'
</script>
<style scoped>
* {
    font-family: RiiT_F;
    @apply text-color-primary
}
</style>
