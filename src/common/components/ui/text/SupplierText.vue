<template>
    <article>
        <RouterLink :to="`/producers/${productSupplier.supplierName}`"
            class="btn__linkUnderline--animate text-color-primary u-text-medium">{{
            productSupplier.supplierName }}</RouterLink>
        <p class="article__location text-color-grey-dark">{{ productSupplier.supplierLocation }}</p>
        <div class="supplier__paragraph mt-4">
            <p class="text-color-primary">{{ productSupplier.supplierIntroduce }}</p>
        </div>
    </article>
</template>

<script setup>
import { inject } from "vue";
const { productSupplier } = inject('ProdictSupplier')

</script>

<style scoped>
.article__location {
    font-family: RiiT_F;
}
</style>
