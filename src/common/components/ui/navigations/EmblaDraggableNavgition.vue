<template>
    <nav class=" prodict-supplier__nav p-6 pb-0 sticky top-16 overflow-hidden">
        <div class="section-container nav__draggable w-full embla relative " ref="emblaNode">
            <div class="nav__content flex relative  will-change-transform ">
                <slot name="selectorItem"></slot>
            </div>
            <transition name="fade" mode="out-in">
                <template v-if="showLeft && !reactivet">
                    <span class="nav__mask left"></span>
                </template>
            </transition>

            <transition name="fade" mode="out-in">
                <template v-if="showRight && !reactivet">
                    <span class="nav__mask right"></span>
                </template>
            </transition>
        </div>
    </nav>
</template>

<script setup>
import { ref, computed, provide, watchEffect, onBeforeUnmount, watch } from 'vue'
import emblaCarouselVue from 'embla-carousel-vue'
import { useWindowSize, useThrottleFn } from '@vueuse/core'

const { width } = useWindowSize()
const showLeft = ref(false)
const showRight = ref(true)


const [emblaNode, emblaApi] = emblaCarouselVue({ loop: false, })
const showfog = ref(null)

const touchEndOffset = useThrottleFn(() => {
    const precision = 1;
    const scrolloffset = emblaApi.value ? emblaApi.value.scrollProgress() : 0;
    showfog.value = (scrolloffset * 10).toFixed(precision);
}, 300)


const maskDirection = computed(() => {
    return showfog.value < 5
})
maskDirection
watch(showfog, (newVl) => {
    const currentVl = +newVl;
    if (currentVl >= 0 && currentVl <= 1) {
        showLeft.value = false;
        showRight.value = true;
    } else if (currentVl > 1 && currentVl < 9) {
        showLeft.value = true;
        showRight.value = true;
    } else if (currentVl >= 9) {
        showLeft.value = true;
        showRight.value = false;
    }
});


const removeOnSelectListener = () => {
    if (emblaApi.value) {
        emblaApi.value.off('scroll', touchEndOffset);
    }
}

watchEffect(() => {
    if (emblaApi.value) {
        emblaApi.value.on('scroll', touchEndOffset);
    }
})


const reactivet = computed(() => width.value > 900)


provide('emblaApi', emblaApi);
onBeforeUnmount(() => {
    removeOnSelectListener()
})




</script>

<style scoped>
.prodict-supplier__nav {
    background: linear-gradient(0deg, #d3d3d3, #fff 1px);
}

.nav__mask {
    background: linear-gradient(270deg, #fff 1.95%, hsla(0, 0%, 100%, 0));
    pointer-events: none;
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    max-width: 168px;
    z-index: 1;

}

.nav__mask.right {

    right: -24px;
}

.nav__mask.left {
    background: linear-gradient(90deg, #fff 1.95%, hsla(0, 0%, 100%, 0));
    left: -24px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
