<template>
    <div class="section-container">
        <AccountEmptyCard :title="'以完成訂單'" :description="'目前沒有完成的訂單'" />
    </div>
</template>

<script setup>
import AccountEmptyCard from "@/common/components/ui/card/AccountEmptyCard.vue";
</script>

<style scoped></style>
