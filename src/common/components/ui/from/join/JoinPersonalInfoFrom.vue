<template>
    <form class="join-page__contnet--from grid-cols-4 text-color-primary " @submit.prevent>

        <div class="join-input__control  ">
            <label for="first-name">姓</label>
            <input @blur="userFirstName.validate" :class="{ enterError: userFirstName.field.userError }" id="first-name"
                v-model.trim="userFirstName.field.userEnter" type="text">

            <div class="join-input__helper " v-if="userFirstName.field.userError">
                <Icon class="enterErrorHelp text-3xl" icon="game-icons:surprised" />
                <span class="enterErrorHelp">不可忽略</span>
            </div>

        </div>
        <div class="join-input__control">
            <label for="last-name">名</label>
            <input @blur="userLastName.validate" :class="{ enterError: userLastName.field.userError }" id="last-name"
                v-model.trim="userLastName.field.userEnter" type="text">
            <div class="join-input__helper" v-if="userLastName.field.userError">
                <Icon class="enterErrorHelp text-3xl" icon="game-icons:surprised" />
                <span class="enterErrorHelp">不可忽略</span>
            </div>

        </div>
        <div class="join-input__control">
            <label for="email">
                郵件地址
            </label>

            <input @blur="userEmail.validate" :class="{ enterError: userEmail.field.userError }" id="email" type="text"
                v-model.trim="userEmail.field.userEnter" placeholder="furryfriendfan@yopmail.com
">
            <div class="join-input__helper" v-if="userEmail.field.userError">
                <Icon class="enterErrorHelp text-3xl" icon="game-icons:surprised" />
                <span class="enterErrorHelp">請輸入有效的電子郵件地址。</span>
            </div>
        </div>
        <div class="join-input__control">
            <label for="emailDup">確認郵件地址</label>
            <input @blur="userEmailDup.validate" :class="{ enterError: userEmailDup.field.userError }" id="emailDup"
                type="text" v-model.trim="userEmailDup.field.userEnter">

            <div class="join-input__helper" v-if="userEmailDup.field.userError">
                <Icon class="enterErrorHelp text-3xl" icon="game-icons:surprised" />
                <span class="enterErrorHelp">電子郵件地址需一致。</span>
            </div>
        </div>
        <div class="join-input__control relative">
            <label for="password-lable">
                密碼
            </label>
            <input @blur="userPassword.validate" :class="{ enterError: userPassword.field.userError }" id="password-lable"
                :type="passwordType" v-model.trim="userPassword.field.userEnter">

            <div class="join-input__helper" v-if="userPassword.field.userError">
                <Icon class="enterErrorHelp text-3xl" icon="game-icons:surprised" />
                <span class="enterErrorHelp">請輸入有效密碼。</span>
            </div>
            <div class="absolute top-0 right-4 translate-x-2/4 sm:left-[91.22%] sm:-translate-x-full translate-y-1/4">
                <Icon @click="showPassword" :icon="passwordIcon" />
            </div>

        </div>
        <div class="join-input__control">
            <label for="passwordDup">確認密碼</label>
            <input @blur="userPasswordDup.validate" :class="{ enterError: userPasswordDup.field.userError }"
                :type="passwordType" id="passwordDup" v-model.trim="userPasswordDup.field.userEnter">

            <div class="join-input__helper" v-if="userPasswordDup.field.userError">
                <Icon class="enterErrorHelp text-3xl" icon="game-icons:surprised" />
                <span class="enterErrorHelp">確認密碼需要與密碼一致。</span>
            </div>
        </div>

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

import { Icon } from '@iconify/vue';
import { useRouter } from "vue-router";
import { userFields, store } from "@/Plugins/inputValidation.js";
const router = useRouter()
const { fields,
    passwordIcon,
    passwordType,
    allUserChecks,
    showPassword,
} = (userFields())

const { userFirstName,
    userLastName,
    userEmail,
    userEmailDup,
    userPassword,
    userPasswordDup, } = fields

const sendRequset = async function () {
    if (allUserChecks()) return
    store.registerClient(
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

.join-input__control {
    @apply col-span-4 sm:col-span-2
}

.join-input__control>input {
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

