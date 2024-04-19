<template>
  <li class="item__list--edit">
    <p class="edit__price">{{ price }}</p>
    <!-- 數量與移除 -->
    <div class="edit__control">
      <div class="edit__contro--select">
        <product-edit-select />
        <button class="edit__contro--remove mt-2 text-right">移除商品</button>
      </div>
    </div>
  </li>
</template>

<script setup>
import ProductEditSelect from "../../../cartsidebar/cartProdut/productItem/ProductEditSelect.vue";
defineProps({
  price: String,
  quantity: String,
})

</script>

<style scoped>
* {
  font-family: GalmuriMono9;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 2px;
}

.item__list--edit {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  align-items: flex-end;
}

.edit__contro--select {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @apply text-color-eva-light-red;
}
</style>
