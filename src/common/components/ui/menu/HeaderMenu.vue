<template>
  <div class="nav-classification nav-container">
    <div class="nav-categorie" v-for="(menus) in productData" :key="menus">
      <div class="nav-categories-wrap">
        <RouterLink :class="{ 'active': route.params.id === menus.project }" :to="'/shop/' + `${menus.project}`">{{
      menus.project }}</RouterLink>
        <div class="nav-dropdown-wrap">
          <div class="nav-dropdown " v-for="( menuCategories) in menus.categories">
            <RouterLink :to="'/shop/' + `${menuCategories.category}`">{{ menuCategories.category }}</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from "vue";
const productData = inject('productData')
const { route, router } = inject('vueRouter')



</script>

<style scoped>
.nav-dropdown-wrap>.nav-dropdown>* {
  font-family: "cjkfonts";

}

.nav-classification.nav-container {
  width: 90%;
  @apply text-b-color-green-dark;
  position: relative;
}

.nav-categorie {
  height: 40px;
}

.nav-categories-wrap {
  position: relative;
  height: 100%;
  line-height: 40px;
}

.nav-dropdown-wrap {
  position: absolute;
  margin-left: -16px;
  padding-top: 19px;
  opacity: 0;
  pointer-events: none;
}

.nav-dropdown {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0px 0px 3px rgba(7, 38, 30, 0.04),
    0px 0px 5px rgba(7, 38, 30, 0.04), 0px 0px 3px rgba(7, 38, 30, 0.04);
}

.nav-dropdown>a {
  min-width: 200px;
  padding: 8px;
  padding-left: 16px;
}

.nav-categories-wrap>a::after {
  content: "";
  position: absolute;
  display: block;
  width: 0%;
  height: 2px;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 0px);
  background: #136450;
  opacity: 0;
  border-radius: 20px;
  transition: all 0.2s cubic-bezier(0.45, 0, 0.55, 1),
    opacity 0.1s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-categories-wrap>.active::after {
  opacity: 1;
  transform: translate(-50%, 20px);
  width: 100%;
}

.nav-categorie:hover .nav-categories-wrap a::after {
  opacity: 1;
  transform: translate(-50%, 20px);
  width: 100%;
}

.nav-categorie:hover .nav-dropdown-wrap {
  opacity: 1;
  pointer-events: auto;
}

.nav-dropdown>a {
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.nav-dropdown>a::before {
  content: "";
  display: block;
  inset: 0;
  position: absolute;
  width: 150%;
  height: 100%;
  z-index: -1;
  transform: translateX(-100%);
  clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
  opacity: 0;
  transition: transform 0.3s cubic-bezier(0.5, 1, 0.89, 1), opacity .4s;
  @apply bg-b-color-green-light;
}

.nav-dropdown>a:hover:before {
  opacity: 1;
  transform: translateX(0%);
  transition: transform 0.4s cubic-bezier(0.5, 1, 0.89, 1), opacity .1s ease-in;
}

.nav-dropdown> :not(:last-child) {
  border-bottom: 1px solid #eee8;
}
</style>
