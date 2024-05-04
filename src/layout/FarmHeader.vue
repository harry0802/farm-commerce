<template>
  <header id="header" class="sticky z-10 top-0 min-[950px]:-top-10">
    <nav aria-label="Secondary Navgation" class="secondary-nav  hidden">
      <navigation-secondary />
      <navigation-primary />
    </nav>
    <mobile-nav class="mobile_header" />
    <mobile-menu-siderbar />
  </header>
</template>

<script setup>
// import NavMenu from "../common/components/ui/menu/HeaderMenu.vue";
import MobileNav from "@/common/components/header/mobile/MobileNav.vue";
import MobileMenuSiderbar from "@/common/components/header/mobile/MobileMenuSiderbar.vue";
import NavigationSecondary from "@/common/components/header/NavigationSecondary.vue";
import NavigationPrimary from "@/common/components/header/NavigationPrimary.vue";
import useAccountStore from "@/store/modules/account/accountStore.js";
import rootStore from "@/store/rootStore.js";
import store from "@/store/modules/cart/cartStore.js";
import { onMounted, ref, provide } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProfileInfoStore } from "@/store/modules/profile/profileStore.js";
import { getShopData } from "@/Plugins/SupabasePruductsData.js";
import { useWindowSize, watchDebounced } from '@vueuse/core'
const account = useAccountStore()
const cartStore = store()
const profileInfoStore = useProfileInfoStore()
const productData = ref(null)
const useRootStore = rootStore()
const route = useRoute()
const router = useRouter()
const { width } = useWindowSize()
watchDebounced(
  width,
  (newVal) =>
    newVal > 950 ? useRootStore.toggleSiderBar = false : newVal,
  { debounce: 500, maxWait: 1000 },
)

provide('accountStore', account)
provide('cartStore', cartStore)
provide('profileInfoStore', profileInfoStore)
provide('productData', productData)
provide('vueRouter', { route, router })
provide('useRootStore', useRootStore)

onMounted(() => {
  (async () => productData.value = await getShopData())()
})

</script>

<style scoped>
#header {
  background: linear-gradient(0deg, #d3d3d3, #fff 1px);
}


@media only screen and (min-width: 950px) {
  .mobile_header {
    display: none;
  }

  .secondary-nav {
    display: block;
  }
}
</style>
