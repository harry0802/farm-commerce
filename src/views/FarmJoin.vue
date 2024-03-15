<template>
    <main id="main">
        <RouterView></RouterView>
        <slot name="sidebar"></slot>
    </main>
</template>

<script setup>

import { toRefs, provide } from "vue";
import accountStore from "@/store/modules/account/accountStore.js";

const { setUserArea } = toRefs(accountStore())


provide('zipCheck', { setUserArea })


</script>
