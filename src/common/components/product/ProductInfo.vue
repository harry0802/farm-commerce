<template>
    <ProductInfoCard>
        <template #breadcrumbs>
            <ProductInfoNavgations />
        </template>

        <template #productItem>
            <ProductInfoItem />
        </template>

        <template #productDescription>
            <ProductInfoText />
        </template>
    </ProductInfoCard>
</template>

<script setup>
import ProductInfoCard from '../ui/card/ProductInfoCard.vue'
import ProductInfoNavgations from '../ui/navigations/ProductInfoNavgations.vue'
import ProductInfoText from '../ui/text/ProductInfoText.vue'
import ProductInfoItem from '../ui/product/ProductInfoItem.vue'



</script>

<style scoped></style>
