<template>
    <form @submit="submitFrom">
        <div class="grid w-full gap-y-6 gap-x-8 sm:grid-cols-2 twzipcode" ref="twZipcode">
            <FormField name="countys">
                <CostomSelect :userLabel="'縣市*'" :userDescription="'輸入要更改的內容'">
                    <select
                        class="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50   py-4 px-3.5 h-auto transition-shadow   duration-300"
                        data-role="county" />
                </CostomSelect>
            </FormField>

            <FormField name="districts">
                <CostomSelect :user-label="'地區*'" :user-description="'輸入要更改的內容'">
                    <select
                        class="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50   py-4 px-3.5 h-auto transition-shadow   duration-300"
                        data-role="district" />
                </CostomSelect>
            </FormField>

            <FormField name="zipCodeDefault">
                <CostomSelect :user-label="'郵遞區號*'" :user-description="'輸入要更改的內容'">
                    <input v-model.number="value"
                        class="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50   py-4 px-3.5 h-auto transition-shadow   duration-300"
                        data-role="zipcode" />
                </CostomSelect>
            </FormField>

            <div class="submit__container self-center">
                <button v-if="!showMewMew" @click="submitFrom" class="u-pirmary-button" type="submit ">
                    下一步
                </button>
                <LoadingCat2 v-else class="h-[50px] " />
            </div>
        </div>
    </form>


</template>

<script setup>

import { useRouter } from "vue-router";
import { queryZipCode } from "@/Plugins/supabaseClinets.js";
import LoadingCat2 from '../../../ui/animat/LoadingCat2.vue'
const router = useRouter()


// --- zod 
import { ref, onMounted, inject } from "vue";
import { showMewMew } from "@/Plugins/inputValidation.js";

import { Form, FormField } from "@/common/composables/ui/form";
import CostomSelect from "@/common/components/ui/from/CostomSelect.vue";
import { useField, checkZipcode } from "@/Plugins/zodValidators.js";
const twZipcode = ref('')
const { onSubmit, defineHandleFn, initializeZipcodeWithPage } = checkZipcode()

const { handleChange: setCountys } = useField('countys')
const { handleChange: setDistricts } = useField('districts')
const { value, handleChange: setZipcode, } = useField('zipCodeDefault')
defineHandleFn(setCountys, setDistricts, setZipcode)

const { setUserArea } = inject('zipCheck')


const submitFrom = async function () {
    const data = await onSubmit()
    if (!data) return
    const { zipCodeDefault } = data
    showMewMew.value = true
    const response = await queryZipCode(zipCodeDefault)
    if (response.length > 0) {
        setUserArea.value(response)
        router.replace({ name: 'in-area' })
    } else {
        router.replace({ name: 'out-area' })
    }
}

onMounted(() => {
    initializeZipcodeWithPage(twZipcode.value)
})
</script>

<style scoped>
* {
    font-family: "RiiT_F";
}

/* input {
    max-width: none;
    border-start-start-radius: 0;
    border-start-end-radius: 0;
} */

/* .join-input__control>div>select {
    border-bottom: transparent;
    border-end-end-radius: 0;
    border-end-start-radius: 0;
    padding: 0;
    text-align: center;
    max-width: 30%;

} */

/* select:first-child {
    border-start-end-radius: 0;
}

select:last-child {
    border-start-start-radius: 0;
    border-left: transparent;
}

.join-input__control select:checked,
.join-input__control select:focus,
.join-input__control select:active {
    outline: none;
    border-color: #949291;
} */
</style>
