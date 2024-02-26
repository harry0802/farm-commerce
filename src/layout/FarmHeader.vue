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
