<template>
    <div class="bg-white " :class="isLargeScreen ? 'search-arear__container' : 'search-arear__container--mobile'">
        <div class="arear">
            <SearchArearContent />
        </div>
    </div>


    <teleport to="body">
        <transition name="fade">
            <div v-if="searchState">
                <div class="overlay fixed  w-full inset-0  h-full  z-[9] " :class="{ 'open': searchState }"></div>
            </div>
        </transition>
    </teleport>
</template>

<script setup>
import SearchArearContent from "@/common/components/ui/content/search/SearchArearContent.vue";
import { onMounted, inject, } from "vue";
import { useMediaQuery, onClickOutside, } from '@vueuse/core'
const isLargeScreen = useMediaQuery('(min-width: 949px)')


const { searchState, closeSearch } = inject('useSearch')

onMounted(() => {
    const header = document.getElementById('header')
    onClickOutside(header, () => {
        closeSearch.value()
    })
})



</script>

<style scoped>
.search-arear__container {
    position: absolute;
    width: 90cqw;
    /* width: 90%; */
    max-width: 919px;
    min-width: 100%;
    max-height: 650px;
    padding: 42px 38px;
    top: 90px;
    right: 0;
    left: 50%;
    background-color: #fff;
    border-radius: 23px;
    transform: translate(-50%);
    z-index: 1;
}


.search-arear__container--mobile {
    border-radius: 0;
    height: calc(100vh - 64px);
    left: 0;
    margin-top: 64px;
    max-width: 100%;
    overflow-y: scroll;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 1;

}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
