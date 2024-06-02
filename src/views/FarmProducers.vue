<template>
    <BaseMainPage>
        <template #page>
            <ProducerInfomation />
        </template>
        <template #sidebar>
            <slot name="sidebar" />
        </template>
    </BaseMainPage>
</template>

<script setup>
import ProducerInfomation from "@/common/components/producers/ProducerInfomation.vue";
import BaseMainPage from "@/common/components/ui/card/BaseMainPage.vue";
</script>

<style scoped></style>
