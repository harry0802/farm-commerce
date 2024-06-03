<template>
  <div class=" product-item__details details__content flex flex-col h-full">
    <div class="details__texts flex flex-col grow h-full min-h-[115px]">
      <div class="texts__supplier-and-pdinfo flex flex-col ">
        <RouterLink :to="`/producers/${productItem.supplier_name}`"
          class="btn__linkUnderline--animate supplier-and-pdinfo--supplier">{{ productItem.supplier_name }}</RouterLink>

        <RouterLink :to="`/product/${productItem.product_name}-${productItem.product_code}`"
          class="btn__linkUnderline--animate supplier-and-pdinfo--pdinfo text-lg tracking-wide">
          {{ productItem.product_name }}</RouterLink>
      </div>
      <div class="texts__price-and-weight flex justify-between pt-1.5 pb-2.5 auto ">
        <p class="font-[GalmuriMono9] tracking-wider price-and-weight--weight">{{ productItem.weight }}</p>

        <strong class=" price-and-weight--price font-bold ">
          <span v-if="salePrice" class="mr-2  text-color-validate-error   font-[GalmuriMono9]">
            {{ productItem.SALE.price }}元
          </span>

          <span :class="saleStyle" class="font-[GalmuriMono9]">
            {{ productItem.price }}元
          </span>
        </strong>
      </div>
    </div>
    <!-- 切割組件 多種按鈕 -->
    <shop-product-item-buttoon v-bind="productItem" />
  </div>

</template>

<script setup>
import ShopProductItemButtoon from "../../ui/button/ShopProductItemButtoon.vue";
import { inject, computed } from "vue";
const productItem = inject('productItem')
const saleStyle = computed(() => productItem.SALE ? !!productItem.SALE.price ? 'onsaleDelete' : '' : '')
const salePrice = computed(() => productItem.SALE ? !!productItem.SALE.price ? productItem.SALE.price : '' : '')
</script>






<style scoped>
* {
  @apply text-color-primary
}

.onsaleDelete {
  text-decoration: line-through;
}

.roduct-item__details {
  height: 100%;
}

.supplier-and-pdinfo--supplier,
.supplier-and-pdinfo--pdinfo {
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.supplier-and-pdinfo--supplier {
  font-size: 14px;
  line-height: 24px;
  -webkit-line-clamp: 1;
}

.supplier-and-pdinfo--pdinfo {
  font-weight: 100;
  font-family: cjkfonts;
  -webkit-line-clamp: 2;
}

.price-and-weight--weight {
  font-size: 14px;
}
</style>
