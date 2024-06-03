<template>
    <div
        class="max-sm:fixed max-sm:flex max-sm:flex-col max-sm:w-full max-sm:bottom-0 max-sm:left-0      text-color-primary-light font-[cjkfonts]  max-sm:mt-auto  sm:self-center sm:justify-self-end">
        <button class="btn__link--animate  " @click="cancelFn">
            我再想想
        </button>
        <button @click="signOut" class="sm:pl-6  btn__link--animate">
            確定登出
        </button>
    </div>
</template>

<script setup>
const props = defineProps(
    { cancelFn: Function }
)
import { useRouter } from "vue-router";
const router = useRouter()
import { signOutSpabase } from "@/Plugins/supabaseClinets.js";

const signOut = async function () {
    try {
        await signOutSpabase()
        router.replace({ name: 'home' })
    } finally {
        props.cancelFn()
    }
}
</script>

<style scoped>
button {
    @apply max-sm:py-4 max-sm:border-t max-sm:bg-white
}
</style>
