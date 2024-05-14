<template>
    <main id="main">
        <AccountPageCard>
            <template #hero>
                <AccountHero />
            </template>
            <template #tab>
                <EmblaDraggableNavgition>
                    <template #selectorItem>
                        <AccountNavigationBtns />
                    </template>
                </EmblaDraggableNavgition>
            </template>
            <template #subscriptions>
                <RouterView />
            </template>
        </AccountPageCard>
        <slot name="sidebar" />
    </main>
</template>
<script setup>
import AccountPageCard from '@/common/components/ui/card/AccountPageCard.vue';
import AccountHero from "@/common/components/ui/section/AccountHero.vue";
import EmblaDraggableNavgition from "@/common/components/ui/navigations/EmblaDraggableNavgition.vue";
import AccountNavigationBtns from "@/common/components/ui/button/AccountNavigationBtns.vue";
import { provide, toRefs } from "vue";
import useAccountStore from "@/store/modules/account/accountStore.js";
import { useOrderStore } from "@/store/modules/order/index.js";

const { subscription } = toRefs(useOrderStore())
const accountStore = useAccountStore
provide('accountStore', accountStore)
provide('orderStore', { subscription })



</script>
