<template>
    <BaseMainPage>
        <template #page>
            <Features />
            <MountainFlow class="bg-color-primary-light  text-b-color-browm" />
            <Advantages />
        </template>
        <template #sidebar>
            <slot name="sidebar" />
        </template>
    </BaseMainPage>
</template>

<script setup>

import MountainFlow from "@/common/components/ui/section/MountainFlow.vue";
import BaseMainPage from "@/common/components/ui/card/BaseMainPage.vue";
import Features from "@/common/components/featuresAndAdvantages/Features.vue";
import Advantages from "@/common/components/featuresAndAdvantages/Advantages.vue";

</script>