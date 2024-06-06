<template>
    <div class="section-container">
        <AccountEmptyCard v-if="!dynamicComponent" :title="'即將出貨'" :description="'目前並沒有訂購任何商品'" />
        <AccountDeliveryContnet v-else />
    </div>
</template>

<script setup>
import { inject, computed } from "vue";
import AccountEmptyCard from "@/common/components/ui/card/AccountEmptyCard.vue";
import AccountDeliveryContnet from "@/common/components/ui/content/account/AccountDeliveryContnet.vue";
const { myorder } = inject('orderStore')
const dynamicComponent = computed(() => myorder.value.length > 0)
</script>

<style scoped></style>
