<template>
    <div>
        <div class=" arear-products flex mt-10 gap-2    sm:gap-[30px] ">
            <!-- loop < 6 -->
            <div v-for="product, i in searchArearProduct" :key="i"
                class="products-items flex flex-col gap-2 sm:flex-row">
                <div
                    class="products-img flex-shrink-0 h-[105px] w-[105px] border rounded overflow-hidden border-color-grey-light ">
                    <img class="h-full w-full aspect-square object-cover " :src="product.imgurl" alt="">
                </div>

                <div class="products-links flex flex-col">
                    <RouterLink :to="`/product/${product.productName}-${product.productCode}`"
                        class="btn__linkUnderline--animate text-color-primary-light "> {{ product.productName }}
                    </RouterLink>
                    <RouterLink :to="`/producers/${product.supplierName}`"
                        class="text-[#949291] mt-2 btn__linkUnderline--animate "> {{ product.supplierName }}
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject } from "vue";
const { searchArearProduct } = inject('useSearch')
</script>

<style scoped>
.arear-products {
    grid-area: products;
    overflow: auto;
}


@media only screen and (min-width:600px) {

    .arear-products {
        display: grid;
        font-size: 14px;
        font-weight: 400;
        gap: 10px 27px;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        line-height: 150%;

    }
}


@media only screen and (min-width:780px) {
    .arear-products {

        grid-template-columns: 1fr 1fr;
        grid-template-rows: 125px 125px 125px;

    }
}
</style>
