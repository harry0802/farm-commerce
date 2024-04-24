<template>
    <Dialog>
        <slot></slot>

        <DialogContent class="text-color-primary py-8 sm:max-w-[500px]  sm:rounded-3xl">
            <DialogHeader>
                <DialogTitle>
                    <h2 class="text-4xl">登出</h2>
                </DialogTitle>
                <DialogDescription>
                    如果需要訂購需要再次登入
                </DialogDescription>
            </DialogHeader>
            <p>確定要登出？</p>
            <p>或者僅需關閉此頁面，即可享受保持登入狀態的便利！下次在此設備上購物時，您將無需重新登入。</p>
            <p>期待再次光臨！</p>

            <DialogFooter class="text-color-primary-light">
                <DialogClose class="animateBtn">取消</DialogClose>
                <Button @click="signOut" class="pl-6 animateBtn" type="submit">
                    確定登出
                </Button>

            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>


<script setup>


import {
    Dialog
    , DialogClose
    , DialogTrigger
    , DialogHeader
    , DialogTitle
    , DialogDescription
    , DialogContent
    , DialogFooter
} from "@/common/composables/ui/dialog";
import { signOutSpabase } from "@/Plugins/supabaseClinets.js";
import { useRouter } from "vue-router";

const router = useRouter()

const signOut = async function () {
    await signOutSpabase()
    router.replace({ name: 'home' })
}

</script>

<style scoped>
* {
    /* font-family: RiiT_F; */
}

.animateBtn {

    @apply hover:scale-110 active:scale-100 transition-transform duration-200
}
</style>
