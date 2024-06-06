<template>
    <div class="flex items-baseline">
        <h2 class=" u-text-giant ">{{ DeliveryDay }}</h2>
        <AccountSubscribeDialog title="更改交貨日期" description="請選擇您希望將訂閱轉移到的日期。">
            <template #customContent>
                <SubscribeChangDeliveryDay :week="DeliveryDay" />
            </template>
            <template #button>
                <button class="ml-2 text-color-primary-light underline font-semibold tracking-wider">更換日期</button>
            </template>
        </AccountSubscribeDialog>
    </div>

</template>

<script setup>
import AccountSubscribeDialog from "@/common/components/ui/popup/AccountSubscribeDialog.vue";
import SubscribeChangDeliveryDay from "@/common/components/ui/popup/subscribe/SubscribeChangDeliveryDay.vue";
defineProps({
    DeliveryDay: String
})

</script>
