<template>
    <component :is="tag" :style="{ maxHeight: realMaxHeight, overflow: 'hidden' }" ref="container">
        <span style="box-shadow: transparent 0 0">
            <span v-if="!isServer" :attrs="{ 'aria-label': text ? text.trim() : '' }">
                {{ isServer ? content : realContent }}
            </span>
            <slot name="before" v-if="before" v-bind="slotProps" />
            <slot />
            <slot name="after" v-if="after" v-bind="slotProps" />
        </span>
    </component>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    tag: {
        type: String,
        default: 'div'
    },
    autoresize: {
        type: Boolean,
        default: false
    },
    maxLines: Number,
    lineHeight: Number,
    maxHeight: [String, Number],
    ellipsis: {
        type: String,
        default: '…'
    },
    expanded: Boolean
})

// 组件中使用 isServer.value 来检测当前环境
const isServer = ref(typeof window === 'undefined');


const data = ref({
    offset: 0,
    text: getText(),
    nonTextNodes: getNonTextNodes(),
    before: null,
    after: null,
    localExpanded: !!expanded.value,
});



// 函數初始化
const init = function () {


}


</script>

<style scoped></style>
