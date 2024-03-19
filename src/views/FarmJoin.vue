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
const { setUserArea, userArea, registerClient, loginEmailOTP, registerClientAddress } = toRefs(accountStore())
const router = useRouter()
provide('zipCheck', { setUserArea })
provide('areaMap', { userArea })
provide('personall', { registerClient })
provide('verifyEmailOtp', { loginEmailOTP })
provide('deliveryAddress', { registerClientAddress })
provide('deliveryAddress', { registerClientAddress })
provide('welcome', { router })
</script>
