<template>
    <form class="product-subscribe--wrapper">

        <div class="product-subscribe__selection">
            <div class="product-subscribe__selection--content">
                <slot name="selection"></slot>
            </div>
        </div>
        <slot name="buttomBar"></slot>

    </form>
</template>

<script setup></script>

<style scoped></style>
