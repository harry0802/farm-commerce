<template>
    <main id="main">
        <RouterView></RouterView>
        <slot name="sidebar"></slot>
    </main>
</template>


<script setup>
import { toRefs, provide, } from "vue";
import { useRouter, } from "vue-router";
import accountStore from "@/store/modules/account/accountStore.js";
const store = accountStore();
const { setUserArea, userArea, registerClient, loginEmailOTP, registerClientAddress, allow, checkAllow, } = toRefs(accountStore())
const router = useRouter()


provide('zipCheck', { setUserArea })
provide('areaMap', { userArea })
provide('personall', { registerClient, router, allow, checkAllow })
provide('verifyEmailOtp', { loginEmailOTP, store, router })
provide('deliveryAddress', { registerClientAddress })
provide('paymentInfo', { router, store, })
provide('welcome', { router })




</script>
