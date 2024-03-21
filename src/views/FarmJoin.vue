<template>
    <main id="main">
        <RouterView></RouterView>
        <slot name="sidebar"></slot>
    </main>
</template>

<script setup>
import { toRefs, provide } from "vue";
import { useRouter } from "vue-router";
import accountStore from "@/store/modules/account/accountStore.js";
import useProfileInfoStore from "@/store/modules/profile/profileStore.js";
const { setUserArea, userArea, registerClient, loginEmailOTP, registerClientAddress } = toRefs(accountStore())
const profileInfoStore = useProfileInfoStore()

const router = useRouter()
// profileInfo 代表用戶已經有該資料
provide('profileInfo', profileInfoStore)

provide('zipCheck', { setUserArea })
provide('areaMap', { userArea })
provide('personall', { registerClient })
provide('verifyEmailOtp', { loginEmailOTP })
provide('deliveryAddress', { registerClientAddress })
provide('paymentInfo', { router })
provide('welcome', { router })
</script>
