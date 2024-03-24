<template>
    <form @submit.prevent="onSubmit" class="">
        <FormField v-slot="{ componentField }" name="userEmail">
            <CostomInput :componentField="componentField" user-label="信箱帳號" />
        </FormField>
        <div class="relative">
            <FormField v-slot="{ componentField }" name="userPassword">
                <CostomInput :custom-type="passwordType" :componentField="componentField" user-label="密碼" />
            </FormField>
            <div class="    absolute top-0 right-4 translate-x-2/4 sm:left-[91.22%]  translate-y-1/4">
                <Icon class="cursor-pointer" @click="showPassword" :icon="passwordIcon" />
            </div>
        </div>
        <div class="m-auto w-28 mt-8">
            <button v-if="!loading" class="u-pirmary-button" type="submit">登入</button>
            <LoadingCat2 v-else class="m-auto w-12 h-12" />
        </div>
    </form>
</template>

<script setup>
import { inject } from "vue";
import { Form, FormField } from "@/common/composables/ui/form";
import CostomInput from "@/common/components/ui/from/CostomInput.vue";
import LoadingCat2 from "@/common/components/ui/animat/LoadingCat2.vue";
import { Icon } from '@iconify/vue';
const { userLoginPassword, } = inject('zodValidators')
const { signInWithPassword, toast, router } = inject('supabaseClinets')
const {
    handleSubmit,
    loading,
    passwordIcon,
    passwordType,
    showPassword, } = userLoginPassword()





const onSubmit = handleSubmit(async (vl) => {
    try {
        loading.value = true
        const sendData = {
            email: vl.userEmail,
            password: vl.userPassword,
        }
        const respose = await signInWithPassword(sendData)
        console.log(respose);

        if (respose) {
            router.push({ name: 'home' })
            toast.success('歡迎回來')
        }
    } catch (error) {
        toast.error('請確認你的帳號密碼')
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
