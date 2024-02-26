<template>
    <article>
        <a class="text-color-primary u-text-medium" href="#">{{ productSupplier.supplierName }}</a>
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

