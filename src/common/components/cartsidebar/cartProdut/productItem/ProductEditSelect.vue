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
import { ref, toRefs, watch, onMounted } from "vue";
import LoadingCat2 from "@/common/components/ui/animat/LoadingCat2.vue";

const props = defineProps({ product: Object })
const options = 99;
const selectedQuantity = ref(0);


const {
  setProduct,
  loading,
  sendAmount,
  setNewQty } =
  userHandleProductItem(props.product, props.product.quantity)

const handleSendAmount = () => {
  setNewQty(selectedQuantity.value)
  sendAmount()
}

watch(() => props.product, (newVal) => {
  setProduct(newVal)
  selectedQuantity.value = newVal.quantity
})

onMounted(() => {
  selectedQuantity.value = props.product.quantity
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
