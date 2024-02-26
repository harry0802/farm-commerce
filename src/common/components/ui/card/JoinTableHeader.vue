<template>
    <div class="join-page__contnet max-w-[792px]">
        <h1 class="u-text-large">創建一個帳號開始您的購物之旅</h1>
        <JoinPersonalInfoNavigations />
        <slot>

        </slot>
    </div>
</template>
<script setup>
import JoinPersonalInfoNavigations from "../../ui/navigations/JoinPersonalInfoNavigations.vue";
</script>
