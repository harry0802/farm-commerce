<template>

    <AccountSubscribeDialog title="登出">
        <template #button>
            <slot />
        </template>

        <template #description>
            <p class="font-[cjkfonts] leading-8  text-base  text-color-primary">
                確定要登出？ <span class="font-[cjkfonts] "> 如果需要訂購需要再次登入</span><br />
                或者僅需關閉此頁面，即可享受保持登入狀態的便利！<br />
                下次在此設備上購物時，您將無需重新登入。期待再次光臨！<br />
            </p>
        </template>

        <template v-slot:customContent="{ handleClose }">
            <PopupLogingoutButton :cancel-fn="handleClose" />
        </template>
    </AccountSubscribeDialog>


</template>

<script setup>
import AccountSubscribeDialog from "@/common/components/ui/popup/AccountSubscribeDialog.vue";
import PopupLogingoutButton from "@/common/components/ui/button/PopupLogingoutButton.vue";
</script>
