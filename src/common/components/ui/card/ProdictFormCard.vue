<template>
    <form @submit.prevent="onSubmit" class="product-subscribe--wrapper">

        <div class="product-subscribe__selection">
            <div class="product-subscribe__selection--content">
                <slot name="selection"></slot>
            </div>
        </div>
        <slot name="buttomBar"></slot>

    </form>
</template>

<script setup>
import { Form } from "@/common/composables/ui/form";
const props = defineProps({ onSubmit: Function })



</script>

<style scoped></style>
