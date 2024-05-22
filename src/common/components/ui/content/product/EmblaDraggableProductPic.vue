<template>
    <div class="prduct-info__photo">
        <div class="photo__draggable  overflow-hidden" ref="emblaNode">
            <div class="draggable__content  rounded-lg overflow-hidden">
                <div v-if="imgpath.length < 0">
                    <div v-for=" (path, i) in imgpath " :key="i">
                        <img loading="lazy" class="aspect-square w-full  object-cover" :src="path" alt="">
                    </div>
                </div>
                <div v-else class="rounded-lg overflow-hidden">
                    <img loading="lazy" class=" w-full  object-cover" :src="imgpath" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
import emblaCarouselVue from 'embla-carousel-vue'
const [emblaNode] = emblaCarouselVue({ loop: false, })
defineProps({
    imgpath: Array
})

</script>

<style scoped>
img {
    width: 100%;
}
</style>
