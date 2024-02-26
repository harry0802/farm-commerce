<template>
    <AccountProfileInfoCard>
        <template #card-item>
            <div v-if="store.paymentInfo">
                <div class="text-lg">信用卡帳號</div>
                <div class="">設定中...</div>
            </div>
            <div v-else>
                <p class="text-lg">
                    尚未綁定信用卡
                </p>
            </div>

        </template>
        <template #card-Button>
            <slot v-if="store.paymentInfo" name="customButton" />
            <div v-else class="card__action  mt-8 col-span-full place-self-end">
                <button class="text-lg  text-color-primary-light flex items-center ">
                    <Icon class="mr-1 text-xl" icon="majesticons:creditcard-plus-line" />
                    綁定信用卡
                </button>
            </div>
        </template>
    </AccountProfileInfoCard>
</template>

<script setup>
import AccountProfileInfoCard from '@/common/components/ui/card/AccountProfileInfoCard.vue'
import { store } from "@/common/composables/profileData.js";
import { Icon } from '@iconify/vue';


</script>

