<template>
  <div class="mobile-menu__user -mx-6 ">
    <div v-if="!accountStore.isaAuthenticated" class="user__content py-4">
      <RouterLink class="user__login" :to="{ name: 'login', query: { redirect: '/home' } }">
        <Icon icon="pixelarticons:user" />
        登入
      </RouterLink>
      <RouterLink class="user__register" :to="{ name: 'zip-check' }">
        <Icon icon="pixelarticons:user-plus" />
        加入我們
      </RouterLink>
    </div>
    <div v-else>
      <div class="flex place-items-center py-4 px-6 ">
        <Icon icon="ri:user-5-fill" />
        <p>嗨 {{ profileInfoStore.personalInfo.user_LastName.val }} !</p>
      </div>
      <MoblieProfileMenu class="px-6" />
    </div>

  </div>

</template>

<script setup>
import MoblieProfileMenu from "@/common/components/ui/menu/MoblieProfileMenu.vue";
import { inject } from "vue";
import { Icon } from "@iconify/vue";
const accountStore = inject('accountStore')
const profileInfoStore = inject('profileInfoStore')


</script>

<style scoped>
.mobile-menu__user {
  @apply my-10;
  background: #fff8eb;
  ;
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
