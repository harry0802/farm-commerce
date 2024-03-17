<template>
    <form class="join-page__contnet--from grid-cols-4 text-color-primary " @submit.prevent="sendRequset">
        <FormField v-slot="{ componentField }" name="userFirstName">
            <CostomInput class=" join-input" :componentField="componentField" :userLabel="'姓'"
                :userDescription="'請輸入相應內容'" />
        </FormField>
        <FormField v-slot="{ componentField }" name="userLastName">
            <CostomInput class="join-input" :componentField="componentField" :userLabel="'名'"
                :userDescription="'請輸入相應內容'" />
        </FormField>
        <FormField v-slot="{ componentField }" name="userEmail">
            <CostomInput class="join-input" :componentField="componentField" :userLabel="'郵件地址'"
                :userDescription="'推薦 @yopmail.com 信箱'" :userPlaceholder="'Ex: furryfriendfan@yopmail.com'"
                :customType="'email'" />
        </FormField>
        <FormField v-slot="{ componentField }" name="userEmailDup">
            <CostomInput class="join-input" :componentField="componentField" :userLabel="'確認郵件地址'"
                :userDescription="'請輸入相應內容'" :customType="'email'" />
        </FormField>
        <FormField v-slot="{ componentField }" name="userPassword">
            <div class="join-input relative">
                <CostomInput :componentField="componentField" :userLabel="'密碼'" :userDescription="'請輸入相應內容'"
                    :customType="passwordType" />

                <div class="absolute top-0 right-4 translate-x-2/4 sm:left-[91.22%]  translate-y-1/4">
                    <Icon @click="showPassword" :icon="passwordIcon" />
                </div>
            </div>

        </FormField>
        <FormField v-slot="{ componentField }" name="userPasswordDup">
            <CostomInput class="join-input" :componentField="componentField" :userLabel="'確認密碼'"
                :userDescription="'請輸入相應內容'" :customType="passwordType" />
        </FormField>

        <p class="">密碼必須包含 1 個大寫字母、1 個小寫字母、1 個數字，長度介於 8 到 47 個字元之間。</p>

        <div class="flex gap-4 m-auto ">
            <div class="flex items-center border-2 relative rounded">
                <input type="checkbox" id="sign-up">
                <Icon class="sign-up-icon text-white bg-color-primary " icon="memory:check" />
            </div>
            <label for="sign-up">註冊後願意接收新商品提醒、供應商更新等。</label>
        </div>
        <div class="">
            <button v-if="!loading" class="u-pirmary-button" type="submit">下一步</button>
            <LoadingCat2 v-else class="h-[50px] " />
        </div>
    </form>
</template>

<script setup>
// zod
import { Form, FormField } from "@/common/composables/ui/form";
import CostomInput from "@/common/components/ui/from/CostomInput.vue";
import { userFields } from "@/Plugins/zodValidators.js";
import { inject } from "vue";
import { Icon } from '@iconify/vue';
import { useRouter } from "vue-router";
import LoadingCat2 from '../../../ui/animat/LoadingCat2.vue'
const { registerClient } = inject('personall')
const { onSubmit,
    passwordIcon,
    passwordType,
    showPassword,
    loading } = userFields()







const router = useRouter()
const sendRequset = async function () {
    try {
        loading.value = true
        const data = await onSubmit()
        if (!data) return
        const response = await registerClient.value(data)
        if (!response) return
        router.push({ name: 'verify-email-otp' })
    } finally {
        loading.value = false
    }

}


</script>
<style scoped>
* {
    font-family: RiiT_F;
}



.join-page__contnet--from * {
    grid-column: span 4;
}

.join-input {
    @apply col-span-4 sm:col-span-2 text-left
}

.join-input>input {
    @apply max-[599px]:max-w-none
}


input[type=checkbox] {
    appearance: none;
    z-index: 10;
    width: 20px;
    height: 20px;

}

.sign-up-icon {
    visibility: hidden;
    font-size: 20px;
    position: absolute;
    left: 0;
    top: 0;
}

input[type=checkbox]:checked~.sign-up-icon {
    visibility: visible;
}
</style>
