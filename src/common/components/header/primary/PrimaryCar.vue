<template>
    <div class="nav__car flex items-center justify-center gap-10  text-color-primary " :class="{ 'pl-20': !searchState }">

        <div class="relative  group w-full " v-if="accountStore.isaAuthenticated && !searchState">
            <RouterLink :active-class="'active'" class="foryou__link " to="/shop/home/foryou">
                <Icon class="text-2xl " icon="memory:home-thatched" />
            </RouterLink>
            <PersonalStyleMenu />
        </div>

        <button v-if="!searchState" aria-label="Open Serach Bar" class="icon__wrapper " @click="openSearch">
            <Icon icon="pixelarticons:search" />
        </button>

        <button v-if="!cartStore.existenceProduct && !cartStore.getshowCart" @click="cartStore.openCart"
            aria-label="Open Car" class="icon__wrapper relative ">
            <Icon icon="mdi:basket-fill" />
            <span v-if="productAmount !== 0"
                class="flex justify-center items-center absolute ring-0 top-0 -translate-y-[50%] translate-x-[50%]   border-[2px] border-color-primary rounded-full w-5 h-5 aspect-square bg-color-eva-dark-yellow font-[GalmuriMono9] text-xs  font-black">{{
        productAmount }}</span>
        </button>

        <button v-if="cartStore.getshowCart" class="text-color-primary text-2xl">
            <Icon icon="pixelarticons:close" @click="cartStore.closeCart" />
        </button>
    </div>

</template>

<script setup>
import PersonalStyleMenu from "@/common/components/ui/menu/PersonalStyleMenu.vue";
import { Icon } from "@iconify/vue";
import { inject, toRefs, computed } from "vue";
import { useOrderStore } from "@/store/modules/order/index.js";



const { productCart } = toRefs(useOrderStore())
const productAmount = computed(() => productCart.value?.length)
const cartStore = inject('cartStore')
const accountStore = inject('accountStore')
const {
    searchState, openSearch }
    = inject('useSearch')





</script>

<style scoped>
.iconify {
    width: 24px;
    height: 24px;
}

.foryou__link::after {
    content: "";
    position: absolute;
    display: block;
    width: 0%;
    height: 2px;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, 0px);
    background: #136450;
    opacity: 0;
    border-radius: 20px;
    transition: all 0.2s cubic-bezier(0.45, 0, 0.55, 1),
        opacity 0.1s cubic-bezier(0.16, 1, 0.3, 1);
}


.nav__car>div:hover .foryou__link::after {
    opacity: 1;
    transform: translate(-50%, 20px);
    width: 100%;
}


.active.foryou__link::after {
    opacity: 1;
    transform: translate(-50%, 20px);
    width: 100%;
}
</style>
