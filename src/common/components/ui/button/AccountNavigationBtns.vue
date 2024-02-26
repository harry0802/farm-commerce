<template>
    <RouterLink v-for="(navs, i ) in routerNavInfo" :key="i" :to="{ name: navs.path }"
        class=" lowerline relative pb-2 text-color-primary cursor-pointer" :exact-active-class="'isSelector'">
        {{ navs.title }}
    </RouterLink>
    <button class="relative  pb-2 lowerline">安全登出</button>
</template>

<script setup>
const routerNavInfo = [
    { title: '會員訂閱', path: 'subscriptions' },
    { title: '宅配時間表', path: 'delivery-schedule' },
    { title: '用戶檔案', path: 'profile' },
    { title: '訂單紀錄', path: 'order-history' },
    { title: '贈送農產箱，獲得 $25', path: 'referrals' },
];

</script>

<style scoped>
* {
    font-family: SentyGoldSand;
    font-size: 18px;
    flex-shrink: 0;
}

a:not(:first-of-type) {
    /* margin-left: 2.5rem; */
    @apply ml-10 sm:ml-20
}

.lowerline::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #136450;
    border-radius: 24px;
    opacity: 0;
    transition: opacity .25s ease-in-out;
}

.lowerline.isSelector::after {
    opacity: 1;
}

.lowerline:hover::after {
    opacity: 1;
}

button {
    @apply ml-10 sm:ml-20
}
</style>
