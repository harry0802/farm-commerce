<template>
    <AccountProfileInfoCard>
        <template #card-item>
            <AccountProfileItems v-if="store.billingAddress" :profileInfo="store.billingAddress" />
            <div v-else>
                <p class="text-lg ">尚未綁定帳單地址</p>
            </div>
        </template>
        <template #card-Button>
            <slot v-if="store.billingAddress" name="customButton" />
            <div v-else class="card__action  mt-8 col-span-full place-self-end">
                <RouterLink :to="{ name: 'payment-info' }" class="text-lg  text-color-primary-light flex items-center ">
                    <Icon class="mr-1 text-xl" icon="material-symbols-light:add-notes-outline" />
                    添加帳單地址
                </RouterLink>
            </div>
        </template>
    </AccountProfileInfoCard>
</template>

<script setup>
import AccountProfileInfoCard from '@/common/components/ui/card/AccountProfileInfoCard.vue'
import AccountProfileItems from "@/common/components/ui/text/AccountProfileItems.vue";
import { Icon } from '@iconify/vue';
import { inject } from 'vue';
const { store } = inject('store')





</script>
