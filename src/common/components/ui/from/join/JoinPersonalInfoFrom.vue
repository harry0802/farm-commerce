<template>
    <form class="join-page__contnet--from grid-cols-4 text-color-primary " @submit="sendRequset">
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
                :userDescription="'請輸入相應內容'" :userPlaceholder="'Ex: furryfriendfan@yopmail.com'" />
        </FormField>
        <FormField v-slot="{ componentField }" name="userEmailDup">
            <CostomInput class="join-input" :componentField="componentField" :userLabel="'確認郵件地址'"
                :userDescription="'請輸入相應內容'" />
        </FormField>
        <FormField v-slot="{ componentField }" name="userPassword">
            <CostomInput class="join-input" :componentField="componentField" :userLabel="'密碼'"
                :userDescription="'請輸入相應內容'" />
        </FormField>
        <FormField v-slot="{ componentField }" name="userPasswordDup">
            <CostomInput class="join-input" :componentField="componentField" :userLabel="'確認密碼'"
                :userDescription="'請輸入相應內容'" />
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
            <button @click="sendRequset" class="u-pirmary-button" type="submit">下一步</button>
        </div>

    </form>

</template>

<script setup>
// zod
import { Form, FormField } from "@/common/composables/ui/form";
import CostomInput from "@/common/components/ui/from/CostomInput.vue";
import { userFields } from "@/Plugins/zodValidators.js";
const { onSubmit } = userFields()
import { inject } from "vue";

const { registerClient } = inject('personall')





/*
userFirstName
userLastName
userEmail
userEmailDup
userPassword
userPasswordDup
*/

// 

import { Icon } from '@iconify/vue';
import { useRouter } from "vue-router";

const router = useRouter()


const sendRequset = async function () {

    if (!onSubmit()) return


    return


    registerClient.value(
        {
            userFirstName,
            userLastName,
            userEmail,
            userPassword,
        }
    )
    router.push({ name: 'verify-email-otp' })
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
