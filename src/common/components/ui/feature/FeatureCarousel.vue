<template>
    <Carousel ref="carouselRef" init-api="setApi" :opts="{
        align: 'center',
        loop: true,
    }" :plugins="[ClassNames()]">
        <CarouselContent>
            <slot name="CarouselItem" />
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
</template>

<script setup lang="ts">
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/common/composables/ui/carousel'
import ClassNames from 'embla-carousel-class-names'

</script>