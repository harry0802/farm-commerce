<template>
    <SupplierCard>
        <div v-if="producer.description" class="supplier__content">
            <p class="text-color-primary">{{ producer.description }}</p>
        </div>
    </SupplierCard>
    <SupplierCard class="mt-4">
        <div v-if="producer.img" class="supplier__content">
            <img :src="producer.img" alt="">
        </div>
    </SupplierCard>
</template>

<script setup>
import SupplierCard from '../../../ui/card/SupplierCard.vue'
import { inject } from "vue";
const { productIngredients } = inject('ProdictSupplier')

const [producer] = productIngredients;


</script>

<style scoped>
img {
    height: auto;
    width: 100%;
    max-width: 343px;
}
</style>
