<template>

    <form @submit.prevent="onSubmit" class="grid gap-6 ">
        <FormField v-slot="{ componentField }" name="pin">
            <CostomInput class="text-left" user-label="請輸入驗證碼" userDescription="6位數字號碼" userPlaceholder="Ex:123456"
                v-bind="componentField"></CostomInput>
        </FormField>
        <div class="submit__container flex justify-center">
            <button v-if="!loading" class="mt-4 u-pirmary-button max-sm:max-w-none " type="submit">驗證</button>
            <LoadingCat2 v-else class="h-[50px] " />
        </div>
    </form>

</template>

<script setup>
// zod
import LoadingCat2 from '../../../ui/animat/LoadingCat2.vue'
import CostomInput from "@/common/components/ui/from/CostomInput.vue";
import { inject } from "vue";
import { Form, FormField } from "@/common/composables/ui/form";
import { verifyEmailOtp } from "@/Plugins/zodValidators.js";
import { useRouter } from 'vue-router';
const router = useRouter()
const {
    loading,
    handleSubmit,
} = verifyEmailOtp()
const { loginEmailOTP } = inject('verifyEmailOtp')

const onSubmit = handleSubmit(async ({ pin }) => {
    try {
        loading.value = true
        const reponse = await loginEmailOTP.value(pin)
        if (reponse) {
            router.push({ name: 'delivery-address' })
        }
    } catch (err) {
        console.error(err.message);
    } finally {
        loading.value = false
    }
})

</script>

<style scoped>
* {
    font-family: RiiT_F;
}

.join-input__control>input {
    max-width: none;
}
</style>
