<template>
    <div class="producer__details">
        <PoducerTitle :primaryTitle="producerInfo.producer__name" :secondary="producerInfo.producer__location" />
        <div class="producer__text">
            <p class="text-color-eva-dark-green"> {{ producerInfo.producer__description
            }}</p>
        </div>
    </div>
</template>

<script setup>
import PoducerTitle from "../../title/PoducerTitle.vue";
import { inject } from "vue";
const producerInfo = inject('producerInfo')

</script>

<style scoped></style>
