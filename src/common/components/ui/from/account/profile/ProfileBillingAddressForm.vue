<template>
    <AccountProfileFormCard>

        <template #form-table>
            <div class="join-input__control">
                <label for="address">地址*</label>
                <input id="address" type="text">
                <div class="user-hlper">*不可空白</div>
            </div>
            <div class="join-input__control ">
                <label for="address-2">樓號</label>
                <input id="address-2" type="text">
            </div>
            <div class="join-input__control">
                <label for="city">城市*</label>
                <input id="city" type="text">
                <div class="user-hlper">*不可空白</div>
            </div>
            <div class="join-input__control">
                <label for="state">地區*</label>
                <input id="state" type="text">
                <div class="user-hlper">*不可空白</div>
            </div>
            <div class="join-input__control">
                <label for="zipcode">郵遞區號*</label>
                <input id="zipcode" type="text">
                <div class="user-hlper">*不可空白</div>
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

