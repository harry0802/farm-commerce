<template>
    <div class="join-page__contnet">
        <div>
            <h1 class="u-text-large ">很抱歉我們還未提供送貨到該地區的服務。不過別擔心，這只是暫時的！</h1>
            <p class="text-color-primary max-w-[272px] mx-auto mt-6">目前，我們僅在台灣提供配送服務，<br />不包括外島地區和特定限定區域。</p>
        </div>
        <div class="join-page__link flex justify-evenly text-color-primary-light">
            <RouterLink :to="{ name: 'zip-check', }">返回再次輸入</RouterLink>
            <a href="" class="ml-3">不知道郵遞區號?</a>
        </div>
    </div>
</template>

<script setup></script>

<style scoped></style>
