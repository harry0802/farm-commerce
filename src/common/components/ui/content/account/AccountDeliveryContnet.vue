<template>
    <AccountDeliveryCard>
        <template #deliveryHeading>
            <h2 class="u-text-large">即將出貨</h2>
            <AccountSubscribeDialog title="停止出貨" description="請選擇你想要停止出貨的日期" :class="'sm:h-[600px]'">
                <template #button>
                    <Button class="u-pirmary-button  text-color-primary " :class="{ pause: !isPause }"
                        variant="disabled">
                        <Icon class="text-lg " icon="uiw:date" />
                        <span class="max-sm:hidden  text-base ml-2 -tracking-tight">設定暫停配送的日期</span>
                    </Button>
                </template>
            </AccountSubscribeDialog>
        </template>
    </AccountDeliveryCard>
</template>

<script setup>
import AccountDeliveryCard from "@/common/components/ui/card/AccountDeliveryCard.vue";
import AccountSubscribeDialog from "@/common/components/ui/popup/AccountSubscribeDialog.vue";
import { ref } from "vue";
import { Button } from '@/common/composables/ui/button'
import { Icon } from '@iconify/vue';
const isPause = ref(false)

</script>

<style scoped>
.iconify {
    stroke-width: .9;
    stroke: currentColor;
}

.u-pirmary-button {
    @apply w-auto max-w-[276px] max-sm:rounded-full max-sm:p-0 max-sm:w-[56px]
}

.u-pirmary-button.pause {
    @apply bg-white border-[1.5px] hover:bg-color-grey-light transition-colors duration-300
}
</style>
