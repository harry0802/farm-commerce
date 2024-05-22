<template>
    <SupplierCard>
        <div class="supplier__content  grid gap-8 ">
            <div class="supplier__photo overflow-hidden rounded-md">
                <div class="photo__content ">
                    <img class="w-full object-cover" loading="lazy" :src="productSupplier.supplierimg" alt="">
                </div>
            </div>
            <SupplierText />
        </div>
    </SupplierCard>
</template>

<script setup>
import SupplierCard from '../../../ui/card/SupplierCard.vue'
import SupplierText from '../../../ui/text/SupplierText.vue'

import { inject } from "vue";
const { productSupplier } = inject('ProdictSupplier')




</script>

<style scoped>
img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

@media only screen and (min-width: 600px) {
    img {
        width: 292px;
    }

}

@media only screen and (min-width: 950px) {
    .supplier__content {
        grid-template-columns: 292px 1fr;
    }
}
</style>
