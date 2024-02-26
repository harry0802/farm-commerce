<template>
    <ul class="flex w-full justify-around  ">
        <li class="">
            <span class="progress-bar-step" :class="{ current: currentName('personal-info').value }">
                個人資訊
            </span>
        </li>

        <li>
            <span class=" progress-bar-step" :class="{ current: currentName('delivery-address').value }">
                配送地址</span>
        </li>
        <li class=" progress-bar-step">
            付款資訊
        </li>
    </ul>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from 'vue-router';

const route = useRoute()
const currentName = (pathName) => computed(() => pathName === route.name)
</script>

<style scoped>
ul {
    background: linear-gradient(0deg, #d3d3d3, #fff 1px);
}

* {
    font-family: RiiT_F;
}

.progress-bar-step {
    border-bottom: 2px solid transparent;
    color: #949291;
    cursor: default;
    display: inline-block;
    min-width: 64px;
    padding-bottom: 8px;
    text-align: center;
}

.current {
    color: #07261e;
    border-bottom-color: #136450;
    cursor: pointer;
}
</style>
