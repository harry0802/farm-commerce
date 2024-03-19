<template>
    <div class="join-page__section">
        <div class="join-page__contnet max-w-full place-content-center place-items-center text-color-primary">
            <div>登陸您的帳戶</div>
            <div>
                <LoginFrom />
            </div>
            <div>
                <p>
                    第一次來嗎？
                </p>
                <a href="#">快來加入我們！</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import LoginFrom from "@/common/components/ui/from/login/LoginFrom.vue";
</script>
