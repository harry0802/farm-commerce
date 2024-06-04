<template>
    <div class="arear__content ">
        <ArearSearchConten />
        <ArearProductContent />
    </div>
</template>

<script setup>
import ArearSearchConten from "@/common/components/search/arear/ArearSearchConten.vue";
import ArearProductContent from "@/common/components/search/arear/ArearProductContent.vue";

</script>

<style scoped>
.arear__content {
    display: grid;
    grid-template-areas:
        "search-group products"
        "search-group products";
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto;
    max-height: 600px;
}




@media only screen and (max-width: 599px) {
    .arear__content {
        display: flex;
        flex-direction: column;
    }
}


@media only screen and (max-width: 774px) {
    .arear__content {
        grid-template-columns: 225px 1fr;
    }
}



@media only screen and (max-width: 949px) {
    .arear__content {
        border-top: 1px solid rgba(7, 38, 30, .08);
        max-height: calc(100vh - 64px);
        padding: 20px 41px 70px;
    }
}
</style>
