<template>
    <form @submit.prevent class="grid gap-6 ">
        <div class="join-input__control m-auto max-w-[272px] w-full text-left ">
            <label class="mb-1" for="code">請輸入驗證碼</label>
            <input :class="{ enterError: verifyCode.field.userError }" class="h-12 py-4 px-3.5" type="text" id="code"
                v-model.trim="verifyCode.field.userEnter">
            <div class="mt-2 flex items-center" v-if="verifyCode.field.userError">
                <Icon class="enterErrorHelp text-3xl" icon="game-icons:surprised" />
                <span class="enterErrorHelp"> 哎呀！請您再確認一下你的驗證碼</span>
            </div>
        </div>
        <div class="submit__container flex justify-center">
            <button v-if="!showMewMew" class="mt-4 u-pirmary-button max-sm:max-w-none " type="submit"
                @click="checkVerifyCode">驗證</button>
            <LoadingCat2 v-else class="h-[50px] " />
        </div>
    </form>
</template>

<script setup>
import LoadingCat2 from '../../../ui/animat/LoadingCat2.vue'
import { accountFields, showMewMew, store } from '@/Plugins/inputValidation.js'
import { Icon } from '@iconify/vue';

import { useRouter } from 'vue-router';

const router = useRouter()


const { fields } = accountFields()
const { verifyCode } = fields


const checkVerifyCode = async function () {
    showMewMew.value = true
    try {
        const reponse = await store.loginEmailOTP(verifyCode)
        if (reponse) {
            router.push({ name: 'delivery-address' })
        }
        verifyCode.field.userError = true
    } catch (err) {
        console.error(err.message);
    } finally {
        showMewMew.value = false
    }
}




</script>

<style scoped>
* {
    font-family: RiiT_F;
}

.join-input__control>input {
    max-width: none;
}
</style>
