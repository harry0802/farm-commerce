<template>
    <form @submit.prevent="submitFrom">
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
                <button v-if="!loading" @click="submitFrom" class="u-pirmary-button" type="submit ">
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
import { ref, onMounted, inject } from "vue";
import { Form, FormField } from "@/common/composables/ui/form";
import { useField, checkZipcode } from "@/Plugins/zodValidators.js";
import CostomSelect from "@/common/components/ui/from/CostomSelect.vue";
import LoadingCat2 from '../../../ui/animat/LoadingCat2.vue'
const router = useRouter()

// --- zod 
const twZipcode = ref('')
const { onSubmit, defineHandleFn, initializeZipcodeWithPage, loading } = checkZipcode()

//  twzipcode 套件設定 傳遞到 zod 
const { handleChange: setCountys } = useField('countys')
const { handleChange: setDistricts } = useField('districts')
const { value, handleChange: setZipcode, } = useField('zipCodeDefault')
defineHandleFn(setCountys, setDistricts, setZipcode)

const { setUserArea } = inject('zipCheck')


const submitFrom = async function () {
    try {
        const data = await onSubmit()
        if (!data) return
        const { zipCodeDefault } = data
        loading.value = true
        const response = await queryZipCode(zipCodeDefault)
        if (response.length > 0) {
            setUserArea.value(response)
            router.replace({ name: 'in-area' })
        } else {
            router.replace({ name: 'out-area' })
        }
    } finally {
        loading.value = false
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
</style>
