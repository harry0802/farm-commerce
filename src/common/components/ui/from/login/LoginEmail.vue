<template>
    <form @submit.prevent="onSubmit">
        <FormField v-slot="{ componentField }" name="userEmail">
            <CostomInput :component-field="componentField" user-label="信箱帳號" />
        </FormField>
        <div class="m-auto w-28 mt-8 flex flex-col ">
            <button v-if="!loading" class="u-pirmary-button" type="submit">寄出</button>
            <LoadingCat2 v-else class="m-auto w-12 h-12" />
        </div>
    </form>
</template>

<script setup>
import { Form, FormField } from "@/common/composables/ui/form";
import CostomInput from "@/common/components/ui/from/CostomInput.vue";
import LoadingCat2 from "@/common/components/ui/animat/LoadingCat2.vue";
import { inject } from "vue";
const { userLoginEmail } = inject('zodValidators')
const { handleSubmit, loading } = userLoginEmail()

const { signinWithEmail } = inject('supabaseClinets')


const onSubmit = handleSubmit(async ({ userEmail }) => {
    try {
        loading.value = true
        await signinWithEmail(userEmail)
    } finally {
        loading.value = false
    }
})





</script>

<style scoped>
* {
    text-align: left;
}
</style>
