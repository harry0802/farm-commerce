<template>
    <main id="main">
        <RouterView></RouterView>
        <slot name="sidebar"></slot>
    </main>
</template>


<script setup>
import { toRefs, provide, onBeforeMount } from "vue";
import { useRouter, onBeforeRouteUpdate, onBeforeRouteLeave } from "vue-router";
import accountStore from "@/store/modules/account/accountStore.js";
const { setUserArea, userArea, registerClient, loginEmailOTP, registerClientAddress, allow, checkAllow, } = toRefs(accountStore())
import { store, } from "@/common/composables/profileData.js";
import useProfileInfoStore from "@/store/modules/profile/profileStore.js";
const aa = useProfileInfoStore()
const router = useRouter()


provide('zipCheck', { setUserArea })
provide('areaMap', { userArea })
provide('personall', { registerClient, router, allow, checkAllow })
provide('verifyEmailOtp', { loginEmailOTP, store, router })
provide('deliveryAddress', { registerClientAddress })
provide('paymentInfo', { router, store, })
provide('welcome', { router })




</script>
