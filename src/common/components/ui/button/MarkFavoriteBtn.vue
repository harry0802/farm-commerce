<template>

    <div @click="toggleFavor"
        class="mark__Favorite  absolute  flex w-8 h-8  rounded-full bg-white    cursor-pointer hover:scale-110 active:scale-90 transition-transform duration-300 ">
        <Icon :class="{ Favorite: isFavorite }" class=" w-6 h-6 m-auto text-color-grey-light "
            icon="lets-icons:favorite-fill" />
    </div>


</template>

<script setup>
import { computed, toRefs } from "vue";
import { Icon, } from '@iconify/vue';
import { useOrderStore } from "@/store/modules/order/index.js";


const props = defineProps({ data: { type: Object } })

const { myfavorite, addMyfavorite, } = toRefs(useOrderStore())

const toggleFavor = () => addMyfavorite.value(props.data)


const isFavorite = computed(() =>
    myfavorite.value.some((item) => item.product_id === props.data.product_id)
);


// const toggleFavor = () => addrecentlyVie.value({
//     product_id: "ㄧ二三",
//     favorite_date: "",
// });


</script>

<style scoped>
.Favorite {
    @apply text-color-primary-light
}
</style>
