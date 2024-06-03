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
import { provide, onMounted } from "vue";
import { toast } from 'vue-sonner'
import { useProfileInfoStore } from "@/store/modules/profile/profileStore.js";
import useAccountStore from "@/store/modules/account/accountStore.js";
import { updateAccount, multipleTablesChannel, getAccountInfo } from "@/common/composables/profileData.js";
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




const store = useProfileInfoStore();
const account = useAccountStore()



provide('store', { updateAccount, store })
provide('account', account)
provide('toast', toast)
onMounted(() => {
    multipleTablesChannel();
    getAccountInfo();
})
</script>

<style scoped>
* {
    @apply text-color-primary
}

.card-computer {
    @apply min-[1439px]:col-span-4
}
</style>
