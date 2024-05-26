<template>

  <select
    class="select__detail text-color-eva-dark-green focus:border-color-eva-dark-yellow transition-colors duration-300"
    v-model="selectedQuantity" @change="handleSendAmount()">
    <option disabled>請選擇你要的數量</option>
    <oder-edit-slect-option v-model="selectedQuantity" v-for="option in options" :key="option" :optionValue="option" />
  </select>

  <div v-if="loading" class="absolute w-full rounded h-full bg-[#f5f5f58c] inset-0">
    <LoadingCat2 class=" absolute inset-0  max-h-[80px] aspect-square" />
  </div>

</template>

<script setup>
import OderEditSlectOption from "../../../ui/product/siderbar/OderEditSlectOption.vue";
import { userHandleProductItem } from "@/Plugins/zodValidators.js";
import { ref, toRefs, watch } from "vue";
import LoadingCat2 from "@/common/components/ui/animat/LoadingCat2.vue";

const props = defineProps({ product: Object })
const options = 99;
const selectedQuantity = ref(props.product.quantity);

const {
  setProduct,
  theAmount,
  loading,
  sendAmount } =
  toRefs(userHandleProductItem(props.product, props.product.quantity))

const handleSendAmount = () => {
  theAmount.value = selectedQuantity.value
  sendAmount.value()
}

watch(() => props.product, (newVal) => {
  setProduct.value(newVal)
  selectedQuantity.value = newVal.quantity
})

</script>

<style scoped>
select {
  max-width: 64px;
  height: 24px;
  padding: 0 8px;
  border-radius: 2px;
  /* background: #ccc; */
  border: 2px solid transparent;
  outline: none;
  transition: all 0.3s;
}
</style>
