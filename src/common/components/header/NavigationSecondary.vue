<template>
  <base-navigations class="secondary-nav__wrap " :desc="'Secondary Navigation'">
    <div class="secondary-nav__container nav-container">
      <div class="secondary-nav__section secondary-nav__link">
        <a href="#" class="secondary-nav__links--item">關於我們</a>
        <a href="#" class="secondary-nav__links--item">食譜</a>
      </div>

      <div class="secondary-nav__section secondary-nav__user">
        <button @click="cartStore.toggleCart" aria-label="call Shopping car" class="user__button">
          <Icon icon="memory:calendar-month" />
          <span v-if="accountStore.isaAuthenticated">購物日期：{{ cartStore.calcUserSelectDay }}</span>
          <span v-else> 請選擇出貨日期</span>
        </button>

        <div class="secondary-nav__user--accout user__button relative group cursor-pointer">
          <Icon icon="ri:user-5-fill" />
          <div v-if="!accountStore.isaAuthenticated">
            <RouterLink :to="{ name: 'login', query: { redirect: '/home' } }">登陸</RouterLink>
            <span class="p-2">|</span>
            <RouterLink :to="{ name: 'zip-check' }">註冊</RouterLink>
          </div>
          <div class="" v-else>
            <p>嗨 {{ profileInfoStore.personalInfo.user_LastName.val }} !</p>
          </div>
          <ProfiledMenu v-if="accountStore.isaAuthenticated" />
        </div>
      </div>
    </div>
  </base-navigations>

</template>

<script setup>
import BaseNavigations from "../ui/navigations/BaseNavigations.vue";
import { inject, } from "vue";
import { Icon } from "@iconify/vue";
import ProfiledMenu from "@/common/components/ui/menu/ProfiledMenu.vue";

const accountStore = inject('accountStore')
const cartStore = inject('cartStore')
const profileInfoStore = inject('profileInfoStore')





</script>

<style scoped>
.secondary-nav__wrap {
  position: relative;
  z-index: 20;
  height: 40px;
  padding: 0 24px;
  color: #fff;
  @apply bg-color-primary-light;
}

.secondary-nav__section {
  display: grid;
  height: 100%;
  align-items: center;
  grid-auto-flow: column;
}

.secondary-nav__link {
  grid-gap: 32px;
  gap: 32px;
}

.secondary-nav__user {
  grid-gap: 40px;
  gap: 40px;
}

.user__button {
  display: flex;
  align-items: center;
}

.user__button> :not(:first-child) {
  margin-left: 12px;
}
</style>
