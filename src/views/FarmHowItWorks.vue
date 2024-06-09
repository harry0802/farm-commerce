<template>
    <BaseMainPage>
        <template #page>
            <WorkProcess />
        </template>
        <template #sidebar>
            <slot name="sidebar" />
        </template>
    </BaseMainPage>
</template>

<script setup>
import MountainFlow from "@/common/components/ui/section/MountainFlow.vue";
import BaseMainPage from "@/common/components/ui/card/BaseMainPage.vue";
import WorkProcess from "@/common/components/howItWork/WorkProcess.vue";
</script>