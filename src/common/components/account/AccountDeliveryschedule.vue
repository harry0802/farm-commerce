<template>
    <div class="section-container">
        <!-- <AccountEmptyCard :title="'即將出貨'" :description="'目前沒有即將要出貨的訂單'" /> -->
        <AccountDeliveryContnet />
    </div>
</template>

<script setup>
import AccountEmptyCard from "@/common/components/ui/card/AccountEmptyCard.vue";
import AccountDeliveryContnet from "@/common/components/ui/content/account/AccountDeliveryContnet.vue";
</script>

<style scoped></style>
