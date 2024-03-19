<template>
    <main id="main">
        <Login />
        <slot name="sidebar"></slot>
    </main>
</template>
<script setup>
import Login from "@/common/components/login/Login.vue";


</script>
