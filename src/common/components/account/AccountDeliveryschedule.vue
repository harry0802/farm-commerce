<template>
    <div class="section-container">
        <AccountEmptyCard :title="'即將出貨'" :description="'目前沒有即將要出貨的訂單'" />
    </div>
</template>

<script setup>
import AccountEmptyCard from "@/common/components/ui/card/AccountEmptyCard.vue";
</script>

<style scoped></style>
