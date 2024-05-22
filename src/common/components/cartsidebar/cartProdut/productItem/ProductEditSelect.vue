<template>

  <select
    class="select__detail text-color-eva-dark-green focus:border-color-eva-dark-yellow transition-colors duration-300"
    v-model="selectedQuantity">
    <option disabled>請選擇數量</option>
    <oder-edit-slect-option v-model="selectedQuantity" v-for="option in options" :key="option" :optionValue="option" />
  </select>
</template>

<script setup>
import { ref } from "vue";
import OderEditSlectOption from "../../../ui/product/siderbar/OderEditSlectOption.vue";

const options = [1, 2, 3, 4];

const selectedQuantity = ref(1);
</script>

<style scoped>
select {
  width: 54px;
  height: 24px;
  padding: 0 8px;
  border-radius: 2px;
  /* background: #ccc; */
  border: 2px solid transparent;
  outline: none;
  transition: all 0.3s;
}
</style>
