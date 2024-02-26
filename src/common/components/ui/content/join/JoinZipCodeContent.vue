<template>
    <div class="join-page__contnet">
        <div class="join-page__title">
            <h1 class="u-text-large ">讓我們確認一下<br />我們有送達到您的地區。</h1>
            <p class="text-color-primary max-w-[272px] mx-auto mt-6 text-left">目前，我們僅在台灣提供配送服務，<br />不包括外島地區和特定限定區域。</p>
        </div>
        <JoinZipFrom />
    </div>
</template>

<script setup>
import JoinZipFrom from "../../../ui/from/join/JoinZipFrom.vue";
</script>

<style scoped></style>
