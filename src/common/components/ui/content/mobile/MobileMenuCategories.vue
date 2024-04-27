<template>
  <div class="mobile-menu__categories">
    <MobileSubcategoryCard v-for="(product, i) in productData " :key="product.project">

      <Transition name="fade">
        <MobileMenuSubcategorys v-if="store.getSiderBarMenu" v-bind="product" @click="setCurrentIndex(i)" />
        <MobileMenuCategoriesDetails v-else v-model:currentIndex="currentIndex" :project="product" />
      </Transition>

    </MobileSubcategoryCard>
  </div>
</template>


<script setup>
import MobileMenuSubcategorys from "../../navigations/MobileMenuSubcategorys.vue";
import MobileMenuCategoriesDetails from "./MobileMenuCategoriesDetails.vue";
import MobileSubcategoryCard from "@/common/components/ui/card/MobileSubcategoryCard.vue";
import { onMounted, inject, ref } from "vue";
import rootStore from "@/store/rootStore.js";
const store = rootStore();
const currentIndex = ref(null)
const setCurrentIndex = (i) => currentIndex.value = i
const productData = inject('productData')

onMounted(() => store.siderBarMenuInit());
</script>


<style scoped>
.fade-enter-active {
  transition: all .4s ease-in-out;
}

.fade-leave-active {
  display: none;
}

.fade-enter-from,
.fade-leave-from {
  opacity: 0;
}
</style>
