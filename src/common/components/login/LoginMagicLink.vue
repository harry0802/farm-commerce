<template>
    <div class="join-page__section">
        <div class="join-page__contnet max-w-full place-content-center place-items-center text-color-primary">
            <div class="u-text-giant tracking-widest">歡迎回來！</div>
            <div class="max-w-[600px] "><img class="rounded-md shadow-lg" src="@/assets/imgs/welcom.webp" alt=""></div>
            <div class="tracking-wider">請按下按鈕後即可進行登入</div>
            <div class="text-center">
                <button @click="login" class="u-pirmary-button ">登陸</button>
            </div>
        </div>
    </div>

</template>

<script setup>

import { useRoute, useRouter } from 'vue-router'
import { confirmMagicLink, setErrorToast } from "@/Plugins/supabaseClinets.js";

const route = useRoute()
const router = useRouter()


const login = async () => {
    if (route.query) {
        const { token, type, address } = (route.query)
        if (!token || !type || !address) {
            setErrorToast('請前往信箱獲取連結')
            return
        }

        const response = await confirmMagicLink(token, type, address)
        if (!response) return
        router.replace('home')
    }
}
</script>

<style scoped>
* {
    font-family: "SentyGoldSand";

}

img {
    max-height: 300px;
    aspect-ratio: 100/75;
}
</style>
