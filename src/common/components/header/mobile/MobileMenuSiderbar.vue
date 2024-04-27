<template>
  <section ref="modalRef" class="mobile__menu min-[950px]:hidden " :class="{ open: toggleSiderBar }">
    <div class="menu__content " :class="{ open: toggleSiderBar }">
      <mobile-menu-categories />
      <mobile-menu-user />
      <mobile-menu-navigations />
      <mobil-menu-social />
    </div>
  </section>
</template>

<script setup>
import {
  MobileMenuCategories,
  MobilMenuSocial,
  MobileMenuUser,
  MobileMenuNavigations,
} from "@/common/components/ui/content/mobile/index.js";
import rootStore from "@/store/rootStore.js";
import { ref, toRefs } from "vue";


const { toggleSiderBar } = toRefs(rootStore());
const modalRef = ref(null)

</script>

<style>
.mobile__menu {
  position: fixed;
  top: 64px;
  left: 0;
  bottom: 0px;
  background: #fff;
  z-index: 9;
  opacity: 0;
  /* transform: translate(); */
  transform: translateX(-100%);
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.menu__content {
  display: none;
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  @apply px-6;
}

.menu__content.open {
  display: block;
}

.open.mobile__menu {
  opacity: 1;
  transform: translate(0%);
}
</style>
