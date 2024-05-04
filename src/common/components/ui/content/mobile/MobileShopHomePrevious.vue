<template>
    <div v-if="currentIndex === 'foryou'" class="flex flex-col w-full text-color-primary">
        <div class="relative ">
            <RouterLink
                class="flex gap-2 subcategorys__link h-12 ml-10 items-center flex-grow border-b border-color-grey-light"
                :to="`/shop/home/foryou`">
                <Icon class="text-2xl " icon="memory:home-thatched" />
                <p>For You</p>
            </RouterLink>

            <Icon @click="useRootStore.siderBarMenuPreviou"
                class="iconify__back absolute inset-y-1/2 transform -translate-y-1/2 "
                icon="pixelarticons:chevron-right" />
        </div>

        <div v-for=" nav in personalStyle.categories" class="relative">
            <RouterLink
                class="subcategorys__link flex h-12 ml-10 items-center flex-grow border-b border-color-grey-light"
                :to="`/shop/home/${nav.path}`"> {{ nav.category }}
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { inject, toRefs } from "vue";
import { useOrderStore } from "@/store/modules/order/index.js";
const { personalStyle } = toRefs(useOrderStore())
const useRootStore = inject('useRootStore')
const currentIndex = defineModel('currentIndex')

</script>

<style scoped>
* {
    font-family: RiiT_F;
}

.iconify__back {
    color: #00bd26;
    stroke-width: 0.5px;
    stroke: currentColor;
    @apply transform rotate-180;
}
</style>