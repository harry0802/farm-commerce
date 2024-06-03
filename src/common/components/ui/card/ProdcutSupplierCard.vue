<template>
    <div class="product-supplier ">
        <EmblaDraggableNavgition>
            <template #selectorItem>
                <slot name="selectorBtn" />
            </template>
        </EmblaDraggableNavgition>
        <div class="product-supplier__infomation py-10 px-4 sm:px-6 ">
            <slot name="selectorContent" />
        </div>
    </div>
</template>

<script setup>
import EmblaDraggableNavgition from '../../ui/navigations/EmblaDraggableNavgition.vue'
</script>

<style scoped>
.product-supplier__infomation {
    background-color: #FCFBF7;
}
</style>
