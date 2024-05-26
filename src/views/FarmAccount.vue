<template>
    <BaseMainPage :loading="loading">
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
import { provide, toRefs, ref, onMounted } from "vue";
import { useOrderStore } from "@/store/modules/order/index.js";
const { subscription } = toRefs(useOrderStore())
const accountStore = useAccountStore
const loading = ref(true)
provide('accountStore', accountStore)
provide('orderStore', { subscription })


onMounted(() => {
    setTimeout(() => {
        loading.value = false
    }, 500)

})
</script>
