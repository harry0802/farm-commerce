<template>
    <SupplierCard>

        <div v-if="storageTips" class="supplier__content">
            <p class="text-color-primary">{{ storageTips.storage_tips }}</p>
        </div>
    </SupplierCard>
</template>

<script setup>
import SupplierCard from '../../../ui/card/SupplierCard.vue'
import { inject, ref } from "vue";
const { productStorage } = inject('ProdictSupplier')

const storageTips = ref(null)
if (productStorage) {
    const [product] = productStorage
    storageTips.value = product
}




</script>

<style scoped></style>

