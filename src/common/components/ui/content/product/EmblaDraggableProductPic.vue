<template>
    <div class="prduct-info__photo">
        <div class="photo__draggable  overflow-hidden" ref="emblaNode">
            <div class="draggable__content ">
                <div v-if="imgpath.length < 0">
                    <div v-for=" (path, i) in imgpath " class="rounded-lg" :key="i">
                        <img :src="path" alt="">
                    </div>
                </div>
                <div v-else>
                    <img class="rounded-lg" :src="imgpath" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
import emblaCarouselVue from 'embla-carousel-vue'
const [emblaNode, emblaApi] = emblaCarouselVue({ loop: false, })
emblaApi

defineProps({
    imgpath: Array
})

</script>

<style scoped></style>
