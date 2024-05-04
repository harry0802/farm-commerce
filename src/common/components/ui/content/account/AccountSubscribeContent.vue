<template>
    <div class="subscribeCard__contnet supplier__content grid gap-x-6 gap-y-10   sm:py-6 sm:px-8 ">
        <div class="subscribeCard__image w-[136px] ">
            <slot name="image" />
        </div>
        <div class="subscribeCard__button  h-9 self-start justify-self-end underline text-color-primary-light">
            <slot name="button" />
        </div>
        <div class="subscribeCard__details ">
            <slot name="details" />
        </div>
        <slot name="form" />

    </div>
</template>


<script setup>

</script>
<style scoped>
.subscribeCard__contnet {
    grid-template-areas:
        "image button button"
        "details details details";
    grid-template-columns: auto auto 1fr;
}

.subscribeCard__image {
    grid-area: image;
}

.subscribeCard__button {
    grid-area: button;
}

.subscribeCard__details {
    grid-area: details;
}

@media only screen and (min-width: 600px) {
    .subscribeCard__contnet {
        grid-template-areas: "image details button";
    }

}
</style>
