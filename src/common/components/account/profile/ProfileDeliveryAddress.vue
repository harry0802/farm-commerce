<template>
    <AccountProfileCard :title="'收貨位址'">
        <component :is="isForm?  ProfileDeliveryAddressForm :ProfileDeliveryAddress">
            <template #customButton>
                <AccountProfileActionBtn v-model="isForm" />
            </template>
        </component>
    </AccountProfileCard>
</template>

<script setup>
import AccountProfileCard from "@/common/components/ui/card/AccountProfileCard.vue";
import AccountProfileActionBtn from '@/common/components/ui/button/AccountProfileActionBtn.vue'
import ProfileDeliveryAddress from "@/common/components/ui/content/account/profile/ProfileDeliveryAddress.vue";
import ProfileDeliveryAddressForm from '@/common/components/ui/from/account/profile/ProfileDeliveryAddressForm.vue'
import { ref, provide } from "vue";
const isForm = ref(false)
const closeForm = () => isForm.value = false
provide('closeForm', closeForm)

</script>

<style scoped>
.card__action {
    @apply flex justify-end mt-8 col-span-full
}
</style>
