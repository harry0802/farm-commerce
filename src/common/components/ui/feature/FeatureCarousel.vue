<template>
    <Carousel :opts="{
        align: 'start',
        loop: true,
    }">
        <CarouselContent>
            <slot name="CarouselItem" />
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
</template>

<script setup >
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/common/composables/ui/carousel'

</script>