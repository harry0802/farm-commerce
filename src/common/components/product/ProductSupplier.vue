<template>
    <div v-if="productPageNavBtnBar">
        <ProdcutSupplierCard>
            <template #selectorBtn>
                <ProductSupplierBtn v-for=" (item, _, i) in productPageNavBtnBar" :key="i" :data="item"
                    :curremtCp="currentComponents" :index="i" @updateComponents="handleUpdateComponents" />
            </template>

            <template #selectorContent>
                <component :is="tabs[currentComponents]" />
            </template>

        </ProdcutSupplierCard>
    </div>
</template>

<script setup>
import ProdcutSupplierCard from "../ui/card/ProdcutSupplierCard.vue"
import ProductSupplierBtn from '../ui/button/ProductSupplierBtn.vue'
import SupplierInfoIngredientsAndNutrition from '../ui/content/supplier/SupplierInfoIngredientsAndNutrition.vue'
import SupplierInfomation from '../ui/content/supplier/SupplierInfomation.vue'
import SupplierInfoStorage from '../ui/content/supplier/SupplierInfoStorage.vue'
import { ref, inject } from 'vue'


const currentComponents = ref('SupplierInfomation')
const productPageNavBtnBar = inject('productPageNavBtnBar')




const tabs = {
    SupplierInfoIngredientsAndNutrition,
    SupplierInfomation,
    SupplierInfoStorage
}

const handleUpdateComponents = function (newComponents) {
    currentComponents.value = newComponents
}



</script>

<style scoped></style>
