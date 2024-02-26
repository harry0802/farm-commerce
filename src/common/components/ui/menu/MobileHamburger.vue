<template>
  <div @click="toggleNavMenu(toggleSiderBar)" class="hamburger">
    <div class="hamburger__item">
      <span class="hamburger__item--line" :class="{ active: toggleSiderBar }"></span>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue";
import rootStore from "@/store/rootStore.js";
const { toggleSiderBar } = toRefs(rootStore());


const toggleNavMenu = function () {
  toggleSiderBar.value ? toggleSiderBar.value = false : toggleSiderBar.value = true
};


</script>

<style scoped>
.hamburger {
  @apply flex justify-center items-center w-6 h-6;
}

.hamburger__item {
  @apply relative inline-block w-5 h-3;
}

.hamburger__item--line,
.hamburger__item--line:before,
.hamburger__item--line::after {
  @apply absolute block w-5 h-0.5 rounded-lg;
  background: #000;
  bottom: 0;
}

.hamburger__item--line:before {
  content: "";
  top: -6px;
  visibility: visible;
  transition: 0.3s;
}

.hamburger__item--line::after {
  content: "";
  bottom: 12px;
  transition: 0.3s cubic-bezier(0.83, 0, 0.17, 1);
}

/* 明确覆盖伪元素样式 */
.hamburger__item--line.active {}

/* 明确覆盖伪元素样式 */
.active.hamburger__item--line {
  transform: translate3d(0, -6px, 0) rotate(-45deg);
  transition: 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.active.hamburger__item--line:after {
  visibility: visible;
  bottom: 0;
  opacity: 0;
  transition: 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.active.hamburger__item--line:before {
  visibility: visible;
  transform: rotate(-90deg);
  top: 0;
  transition: 0.4s;
}
</style>
