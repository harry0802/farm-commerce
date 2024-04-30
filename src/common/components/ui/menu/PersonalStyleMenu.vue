<template>
    <div
        class="nav-dropdown-wrap    group-hover:opacity-100 group-hover:pointer-events-auto  transition-opacity duration-300 ">
        <div class="nav-dropdown w-full public__item-link ">
            <RouterLink v-for="(navs, i ) in personalStyle.categories" :key="i" :to="`/shop/home/${navs.path}`"
                class="  flex place-items-center cursor-pointer" :exact-active-class="'isSelector'">
                {{ navs.category }}
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { toRefs } from "vue";
import { useOrderStore } from "@/store/modules/order/index.js";
const { personalStyle } = toRefs(useOrderStore())


</script>

<style scoped>
.public__item-link::after {
    content: "";
    position: absolute;
    inset: 0;
    top: 21px;
    width: 103%;
    background-image: url("@/assets/imgs/texture_01_white.png");
    background-size: 7px auto;
    background-color: rgba(67, 83, 52, 0.6);
    border-radius: 6px;
    transform: translate(0px, 7px);
    z-index: -1;
}

.nav-dropdown-wrap>.nav-dropdown>* {
    font-family: "cjkfonts";
}



.nav-dropdown-wrap {
    position: absolute;
    right: 50%;
    margin-left: -16px;
    padding-top: 28px;
    opacity: 0;
    pointer-events: none;
    transform: translateX(50%);
}

.nav-dropdown {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    box-shadow: 0px 0px 3px rgba(7, 38, 30, 0.04),
        0px 0px 5px rgba(7, 38, 30, 0.04), 0px 0px 3px rgba(7, 38, 30, 0.04);

}

.nav-dropdown>a {
    min-width: 250px;
    padding: 16px;
    padding-left: 16px;
}


.nav-dropdown>a {
    position: relative;
    z-index: 1;
    overflow: hidden;
}

.nav-dropdown>a::before {
    content: "";
    display: block;
    inset: 0;
    position: absolute;
    width: 150%;
    height: 100%;
    z-index: -1;
    transform: translateX(-100%);
    clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
    opacity: 0;
    transition: transform 0.3s cubic-bezier(0.5, 1, 0.89, 1), opacity .4s;
    @apply bg-b-color-green-light;
}

.nav-dropdown>a:hover:before {
    opacity: 1;
    transform: translateX(0%);
    transition: transform 0.4s cubic-bezier(0.5, 1, 0.89, 1), opacity .1s ease-in;
}

.nav-dropdown> :not(:last-child) {
    border-bottom: 1px solid #eee8;
}
</style>
