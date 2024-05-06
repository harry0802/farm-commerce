<template>
    <div class="section-container  grid-line">
        <component :is="dynamicComponent" class="col-span-12" :subscription="subscription" :title="'會員訂閱'"
            :description="'目前並沒有訂購任何商品'" />

    </div>
</template>

<script setup>
import { inject, computed } from "vue";
import AccountEmptyCard from "@/common/components/ui/card/AccountEmptyCard.vue";
import SubscribeSection from "@/common/components/ui/section/SubscribeSection.vue";
const { subscription } = inject('orderStore')
const dynamicComponent = computed(() => subscription.value.length > 0 ? SubscribeSection : AccountEmptyCard)
</script>

<style scoped></style>
