<template>
  <div class="mobile-menu__user">
    <div class="user__content">
      <a class="user__login" href="">
        <Icon icon="pixelarticons:user" />
        登入
      </a>
      <a class="user__register" href="">
        <Icon icon="pixelarticons:user-plus" />
        加入我們
      </a>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped>
.mobile-menu__user {
  margin: 0 -24px;
  @apply my-10 py-4;
  background: #fff3da;
}
.user__content,
.user__login,
.user__register {
  @apply flex items-center justify-center;
}

.user__login {
  border-right: 1px solid #000;
}
.user__content a {
  padding: 0 2rem;
}

.iconify {
  margin-right: 8px;
}
</style>
