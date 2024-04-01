<template>
    <div v-if="loopData" class="field__container flex flex-col ">
        <label class="mb-1" :for="id">下拉列表</label>
        <select :name="id" v-model="selectedItem"
            class="border-solid border-[1px] border-color-grey-dark py-4 px-3.5 rounded	">
            <option v-for=" item in loopData " :selected="item" :key="item" :value="item"> {{
        item }}</option>
        </select>
        <!-- v-if="item !== defaultOption" -->
    </div>
    <div class=""></div>
</template>

<script setup>
import { defineProps, ref, watch } from "vue";
const props = defineProps({
    id: String,
})
const loopData = 10

const selectedItem = ref(1);

watch(
    () => props.loopData,
    (newValue) => {
        // Update selected item when loopData changes
        selectedItem.value = newValue[0]; // Set to the first item, or adjust as needed
    }
);
</script>

<style scoped>
select {
    outline: none;
    transition: all .3s;
}

select:focus {
    border-color: #000;
}

@media screen and (min-width: 599px) {
    select {
        max-width: 276px;
        margin-top: 1rem;
    }

}
</style>
