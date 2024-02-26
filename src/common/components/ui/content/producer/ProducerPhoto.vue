<template>
    <div class="producer-photo__content">
        <figure>
            <img :src="photoPath" alt="">
        </figure>
    </div>
</template>

<script setup>

import { defineProps } from 'vue'
defineProps({
    photoPath: String
})


</script>

<style scoped>
.producer-photo__content {
    max-width: 584px;
}

img {
    aspect-ratio: 800 / 533;

}
</style>
