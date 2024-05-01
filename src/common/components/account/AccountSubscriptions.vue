<template>
    <div class="section-container  grid-line">
        <!-- <AccountEmptyCard class="col-span-12" :title="'會員訂閱'" :description="'目前並沒有訂購任何商品'" /> -->
        <SubscribeSection />
    </div>
</template>

<script setup>
import AccountEmptyCard from "@/common/components/ui/card/AccountEmptyCard.vue";
import SubscribeSection from "@/common/components/ui/section/SubscribeSection.vue";
</script>

<style scoped></style>
