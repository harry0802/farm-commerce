<template>
    <Icon icon="mdi:triangle"
        class="absolute text-xs -left-[10px] top-6 opacity-0 group-hover:opacity-100  transition-opacity duration-300 " />
    <div
        class="nav-dropdown-wrap group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
        <div class="nav-dropdown text-color-primary-light public__item-link">
            <RouterLink v-for="(navs, i ) in useRootStore.mobileSildeBarCategoryNav" :key="i" :to="{ name: navs.path }"
                class="  flex place-items-center cursor-pointer" :exact-active-class="'isSelector'">
                <Icon class="   mr-2" :icon="navs.icon" />
                {{ navs.title }}
            </RouterLink>
            <PopupLogingount>
                <template #default>
                    <div class="nav-dropdown--link flex">
                        <Icon class=" text-2xl  mr-2" icon="memory:logout" />
                        <button class="text-left w-full">
                            安全登出
                        </button>
                    </div>
                </template>
            </PopupLogingount>
        </div>
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { inject } from "vue";
import PopupLogingount from "@/common/components/ui/button/PopupLogingount.vue";
const useRootStore = inject('useRootStore')




</script>

<style scoped>
.public__item-link::after {
    content: "";
    position: absolute;
    inset: 0;
    top: 26px;
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
    margin-left: -16px;
    top: 0px;
    right: 0;
    padding-top: 32px;
    opacity: 0;
    pointer-events: none;
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

.nav-dropdown>a,
.nav-dropdown>.nav-dropdown--link {
    min-width: 250px;
    padding: 16px;
    padding-left: 16px;
}

/* .nav-categorie:hover .nav-dropdown-wrap {
    opacity: 1;
    pointer-events: auto;
} */

.nav-dropdown>a,
.nav-dropdown>.nav-dropdown--link {
    position: relative;
    z-index: 1;
    overflow: hidden;
}

.nav-dropdown>a::before,
.nav-dropdown>.nav-dropdown--link::before {
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

.nav-dropdown>a:hover:before,
.nav-dropdown--link:hover:before {
    opacity: 1;
    transform: translateX(0%);
    transition: transform 0.4s cubic-bezier(0.5, 1, 0.89, 1), opacity .1s ease-in;
}

.nav-dropdown> :not(:last-child) {
    border-bottom: 1px solid #eee8;
}

.iconify {
    stroke-width: .5px;
    stroke: currentColor;
}
</style>
