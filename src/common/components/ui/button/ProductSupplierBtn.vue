<template>
    <button class="relative pb-2 text-color-primary cursor-pointer"
        :class="{ 'isSelector': curremtCp === data.components }" @click="scrollToSlide(index)" v-if="data.state">{{
            data.title }}</button>
</template>

<script setup>

import { defineProps, inject, defineEmits } from 'vue'


const emblaApi = inject('emblaApi');
const props = defineProps({
    data: Object,
    curremtCp: String
    , index: Number,
    components: Array
})


const emit = defineEmits(['updateComponents'])

const scrollToSlide = (index) => {
    emblaApi.value.scrollTo(index)
    emit('updateComponents', props.data.components)

};
</script>

<style scoped>
button {
    font-family: RiiT_F;
    font-size: 18px;
    flex-shrink: 0;
}

button:not(:first-of-type) {
    margin-left: 2.5rem;
}

button::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #136450;
    border-radius: 24px;
    opacity: 0;
    transition: opacity .25s ease-in-out;
}

button.isSelector::after {
    opacity: 1;
}

button:hover::after {
    opacity: 1;
}
</style>
