<template>
    <div class="section-container ">
        <div class="supplier__content sm:py-6">
            <div class="flex justify-between pb-6">
                <slot name="deliveryHeading" />
            </div>

            <div class="pause__tips pb-4 flex items-center gap-2 text-color-primary">
                <Icon class=" text-xl" icon="memory:alert-circle-fill" />
                <slot name="deliveryTips" />
                <p>
                    {{ 1 }} 至 {{ 2 }}
                    期間，您的送貨將暫停。
                    點擊日曆以恢復。
                </p>
            </div>
            <slot name="deliverySchedule"></slot>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style scoped></style>
