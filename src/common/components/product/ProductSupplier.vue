<template>
    <div v-if="productPageNavBtnBar">
        <ProdcutSupplierCard>
            <template #selectorBtn>
                <ProductSupplierBtn v-for=" (item, _, i) in productPageNavBtnBar" :key="i" :data="item"
                    :curremtCp="currentComponents" :index="i" @updateComponents="handleUpdateComponents" />
            </template>

            <template #selectorContent>
                <component :is="tabs[currentComponents]"></component>
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

// const init = function (storage, ingredients) {
//     const productStorageLength = storage ? storage.length : 0
//     const productIngredientsLength = ingredients ? ingredients.length : 0
//     navBtn.storagetips.state = calcBoolean(productStorageLength)
//     navBtn.ingredicents.state = calcBoolean(productIngredientsLength)

// }

// const calcBoolean = (length) => length > 0;

// tryOnMounted(() => {
//     init(productStorage, productIngredients);
//     loading.value = false;
// })




</script>

<style scoped></style>
