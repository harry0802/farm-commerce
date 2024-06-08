<template>
    <BaseMainPage>
        <template #page>
            <LoginMagicLink />
        </template>
        <template #sidebar>
            <slot name="sidebar" />
        </template>
    </BaseMainPage>

</template>

<script setup>
import BaseMainPage from "@/common/components/ui/card/BaseMainPage.vue";
import LoginMagicLink from "@/common/components/login/LoginMagicLink.vue";
</script>

<style scoped></style>
