<template>
  <base-navigations class="secondary-nav__wrap" :desc="'Secondary Navigation'">
    <div class="secondary-nav__container nav-container">
      <div class="secondary-nav__section secondary-nav__link">
        <a href="#" class="secondary-nav__links--item">關於我們</a>
        <a href="#" class="secondary-nav__links--item">食譜</a>
      </div>

      <div class="secondary-nav__section secondary-nav__user">
        <button @click="cartStore.toggleCart" aria-label="call Shopping car" class="user__button">
          <Icon icon="memory:calendar-month" />

          <span v-if="accountStore.isaAuthenticated">{{ cartStore.calcUserSelectDay }}</span>
          <span v-else> 請選擇出貨日期</span>
        </button>

        <div class="secondary-nav__user--accout user__button">
          <Icon icon="ri:user-5-fill" />
          <RouterLink :to="{ name: 'login', query: { redirect: '/home' } }">登陸</RouterLink>
          <span>|</span>
          <RouterLink :to="{ name: 'zip-check' }">註冊</RouterLink>
        </div>
      </div>
    </div>
  </base-navigations>
</template>

<script setup>
import BaseNavigations from "../ui/navigations/BaseNavigations.vue";
import { inject, toRefs, onMounted, computed, ref } from "vue";
import { Icon } from "@iconify/vue";
const accountStore = inject('accountStore')
const cartStore = inject('cartStore')



</script>

<style scoped>
.secondary-nav__wrap {
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
