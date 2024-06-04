<template>
    <div class="card__action flex-col gap-y-3  sm:flex-row  sm:justify-end mt-8 col-span-full">
        <button @click="closeForm" v-show="isForm" type="button"
            class="u-pirmary-button profil__cancel  text-color-grey-dark sm:mr-8 text-sm  ">
            取消
            <Icon class="ml-2 " icon="vaadin:cross-cutlery" />
        </button>
        <button @click="showForm" class=" u-pirmary-button profil__edit   text-color-primary-light "
            :type="calcBtnType">
            {{ calcBtnText }}
            <Icon class="ml-2 text-lg  " :icon="calcBtnIcon" />
        </button>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { defineModel, computed } from "vue";
const isForm = defineModel();
const calcBtnType = computed(() => isForm.value ? 'submit' : 'button')
const calcBtnText = computed(() => isForm.value ? '儲存' : '編輯')
const calcBtnIcon = computed(() => isForm.value ? 'line-md:circle-to-confirm-circle-transition' : 'pixelarticons:edit-box')


const showForm = function () {
    isForm.value = true
}

const closeForm = function () {
    isForm.value = false
}

</script>

<style scoped>
bottom.u-pirmary-button {
    width: 100%;
}
</style>
