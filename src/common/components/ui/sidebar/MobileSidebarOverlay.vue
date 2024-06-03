<template>
  <div class="overlay " :class="{ open: toggleSiderBar }" @click="closeSiderBar"></div>
</template>

<script setup>
import rootStore from "@/store/rootStore.js";
import { toRefs, watch } from "vue";
const { toggleSiderBar } = toRefs(rootStore());
const closeSiderBar = () => toggleSiderBar.value = false

watch(toggleSiderBar, (newVal) => {
  newVal ?
    document.body.style.overflow = 'hidden' :
    document.body.style.overflow = 'auto'
},)
</script>
