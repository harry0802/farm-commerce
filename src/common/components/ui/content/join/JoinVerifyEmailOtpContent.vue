<template>
    <div class="join-page__contnet">
        <h1 class="u-text-large">檢查您的信箱！</h1>
        <p class="text-color-primary">驗證碼將送至 : {{ store.userInfo.user_Email }}</p>
        <JoinVerifyEmailOtpFrom class="text-color-primary text-left " />
    </div>
</template>

<script setup>
import JoinVerifyEmailOtpFrom from '../../../ui/from/join/JoinVerifyEmailOtpFrom.vue'
import { inject } from "vue";

const { store } = inject('verifyEmailOtp')



</script>

<style scoped>
* {
    font-family: RiiT_F;
}
</style>
