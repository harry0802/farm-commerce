<template>
    <AccountProfileFormCard>
        <template #form-table>
            <div class="join-input__control">
                <label for="oldPassword">當前的密碼</label>
                <input id="oldPassword" type="text">
                <div class="user-hlper">*不可空白</div>
            </div>
            <div class="join-input__control ">
                <label for="Password">新密碼</label>
                <input id="Password" type="text">
                <div class="user-hlper">*不可空白</div>
            </div>
            <div class="join-input__control">
                <label for="passwordDup">確認新密碼</label>
                <input id="passwordDup" type="text">
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
label,
.user-hlper {
    font-family: RiiT_F;
    @apply text-color-primary
}
</style>

