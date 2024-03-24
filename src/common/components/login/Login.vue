<template>
    <div class="join-page__section overflow-hidden">
        <div class="content flex  max-w-full place-content-center place-items-center text-color-primary ">
            <BaseCard class="w-full max-w-[600px]">
                <template #Card-Title>
                    <div class="u-text-giant text-center">歡迎</div>
                </template>
                <template #Card-Description>
                    <p class="text-lg text-center tracking-wider">新鮮的農產品正在等待你</p>
                </template>
                <template #Card-Content>
                    <div class="grid gap-5">
                        <div>
                            <Button @click="isPassword = !isPassword"
                                class="flex  m-auto  gap-1   place-content-center " variant="outline">
                                <Icon class="text-[20px]  "
                                    :icon="isPassword ? 'simple-icons:simplelogin' : 'carbon:password'" />
                                {{ isPassword ? '使用無密碼登錄' : '使用密碼登錄' }}
                            </Button>
                        </div>
                        <component class="m-auto w-[70%]" :is="isPassword?LoginPassword:LoginEmail">
                        </component>
                    </div>
                </template>
                <template #Card-Footer>
                    <div class="mt-5  flex-col place-content-end">
                        <p>初次訪問？</p>
                        <RouterLink :to="{ name: 'zip-check' }" class="text-color-primary-light ">加入我們！
                        </RouterLink>
                    </div>
                </template>
            </BaseCard>
            <div>
            </div>
        </div>
    </div>

</template>

<script setup>
import BaseCard from "@/common/components/ui/card/BaseCard.vue";
import { Button } from "@/common/composables/ui/button";
import { Icon } from '@iconify/vue';
import { provide, ref } from "vue";
import LoginPassword from "@/common/components/ui/from/login/LoginPassword.vue";
import LoginEmail from "@/common/components/ui/from/login/LoginEmail.vue";
import {
    signInWithPassword,
    signinWithEmail,
    toast,
} from "@/Plugins/supabaseClinets.js";
import {
    userLoginPassword,
    userLoginEmail,

} from "@/Plugins/zodValidators.js";
import { useRouter } from "vue-router";

const isPassword = ref(true)
const router = useRouter()

provide('zodValidators', {
    userLoginPassword,
    userLoginEmail
})

provide('supabaseClinets', {
    signInWithPassword,
    signinWithEmail,
    toast,
    router,
})


</script>
<style scoped>
* {
    font-family: RiiT_F;
}
</style>
