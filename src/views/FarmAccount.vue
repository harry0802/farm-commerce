<template>
    <BaseMainPage>
        <template #page>
            <AccountMainSection />
        </template>
        <template #sidebar>
            <slot name="sidebar" />
        </template>
    </BaseMainPage>
</template>
<script setup>
import BaseMainPage from "@/common/components/ui/card/BaseMainPage.vue";
import AccountMainSection from "@/common/components/ui/section/AccountMainSection.vue";
import useAccountStore from "@/store/modules/account/accountStore.js";
import { provide, toRefs, } from "vue";
import { useOrderStore } from "@/store/modules/order/index.js";
const { subscription, myorder, createGeneralSubScribeConstruction, handleOrderRemoveSubScribe } = toRefs(useOrderStore())
const accountStore = useAccountStore
const { changDeliveryDayAll, changDeliveryDay } = createGeneralSubScribeConstruction.value()

provide('accountStore', accountStore)
provide('orderStore', { subscription, myorder })
provide('handelSubScribe', { changDeliveryDayAll, changDeliveryDay, handleOrderRemoveSubScribe })

</script>
