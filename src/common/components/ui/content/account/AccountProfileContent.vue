<template>
    <div class="section-container grid-line  items-start">
        <ProfileInfomation />
        <ProfileDeliveryAddress />
        <ProfileDriverInstructions class="card-computer" />
        <ProfileCredit class="card-computer" />
        <ProfileNeedHelp class="card-computer" />
        <ProfileNotifications class="card-computer" />
        <ProfileChangeEmail class="card-computer" />
        <ProfilePaymentInfo class="card-computer" />
        <ProfileBillingAddress />
        <ProfileChangePassword />
    </div>
</template>

<script setup lang="ts">
import { provide, } from "vue";
import { toast } from 'vue-sonner'
import { updateAccount, store } from "@/common/composables/profileData.js";
import {
    ProfileInfomation,
    ProfileDeliveryAddress,
    ProfileDriverInstructions,
    ProfileCredit,
    ProfileNeedHelp,
    ProfileNotifications,
    ProfileChangeEmail,
    ProfilePaymentInfo,
    ProfileBillingAddress,
    ProfileChangePassword
} from "@/common/components/account/profile/index.js";
provide('store', { updateAccount, store })
provide('toast', toast)
</script>

<style scoped>
* {
    @apply text-color-primary
}

.card-computer {
    @apply min-[1439px]:col-span-4
}
</style>
