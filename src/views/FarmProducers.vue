<template>
    <main id="main">
        <ProducerInfomation />
        <slot name="sidebar"></slot>
    </main>
</template>

<script setup>
import ProducerInfomation from "@/common/components/producers/ProducerInfomation.vue";


</script>

<style scoped></style>
