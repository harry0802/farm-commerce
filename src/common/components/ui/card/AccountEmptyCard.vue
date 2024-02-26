<template>
    <div class="account__empty  supplier__content w-full  grid">
        <h2 class="u-text-large">{{ title }}</h2>
        <h3 class="mt-2 u-text-small">{{ description }}</h3>
        <img class="rounded-md  self-start w-full max-w-[325px max-sm:mt-10" src="@/assets/imgs/26hkhPJ5hmdD87HYA.gif"
            alt="">
        <RouterLink class="mt-16 place-self-start	 text-color-primary-light" :to="'shop/麵包'">開始去購物！</RouterLink>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    title: String,
    description: String,
    link: String
})

</script>

<style scoped>
.account__empty {

    grid-template-areas:
        'title'
        'description'
        'imgs'
        'link'
    ;


}

@media only screen and (min-width:599px) {
    .account__empty {
        grid-template-areas:
            'title title'
            'description imgs'
            'link  imgs'
        ;
        grid-template-columns: auto 325px;
        grid-template-rows: auto 1fr auto;

    }


}



h2 {
    grid-area: title;
}

h3 {
    grid-area: description;
}

img {
    grid-area: imgs;
    object-fit: cover;
}

a {
    grid-area: link;
}
</style>
