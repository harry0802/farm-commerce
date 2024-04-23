<template>
    <AccountProfileInfoCard>
        <template #card-item>
            <div v-if="store.paymentInfo" class="gap-3 justify-between place-items-center">
                <div>
                    <p class="text-lg">信用卡號:
                        {{ `xxxx-${card_cardNumber}` }}</p>
                </div>
                <div>
                    <p>到期日：
                        {{ store.paymentInfo.card_date }}</p>
                </div>
            </div>
            <!-- card_date -->
            <div v-else>
                <p class="text-lg">
                    尚未綁定信用卡
                </p>
            </div>

        </template>
        <template #card-Button>
            <slot v-if="store.paymentInfo" name="customButton" />
            <div v-else class="card__action  mt-8 col-span-full place-self-end">
                <RouterLink :to="{ name: 'payment-info' }" class="text-lg  text-color-primary-light flex items-center ">
                    <Icon class="mr-1 text-xl" icon="majesticons:creditcard-plus-line" />
                    綁定信用卡
                </RouterLink>
            </div>
        </template>
    </AccountProfileInfoCard>
</template>

<script setup>
import AccountProfileInfoCard from '@/common/components/ui/card/AccountProfileInfoCard.vue'
import { inject, computed } from "vue";
import { Icon } from '@iconify/vue';
const { store } = inject('store')

const card_cardNumber = computed(() => {
    const card = store.paymentInfo.card_cardNumber + ''
    return card.slice(-4)
})

</script>
