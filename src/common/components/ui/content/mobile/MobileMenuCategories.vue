<template>
  <div class="mobile-menu__categories">
    <MobileSubcategoryCard v-if="accountStore.isaAuthenticated">
      <Transition name="fade">
        <MobileShopHomeNext
          v-if="useRootStore.getSiderBarMenu"
          @click="setCurrentIndex('foryou')"
        />
        <MobileShopHomePrevious v-else v-model:currentIndex="currentIndex" />
      </Transition>
    </MobileSubcategoryCard>

    <MobileSubcategoryCard
      v-for="(product, i) in productData"
      :key="product.project"
    >
      <Transition name="fade">
        <MobileMenuSubcategorys
          v-if="useRootStore.getSiderBarMenu"
          v-bind="product"
          @click="setCurrentIndex(i)"
        />
        <MobileMenuCategoriesDetails
          v-else
          v-model:currentIndex="currentIndex"
          :project="product"
        />
      </Transition>
    </MobileSubcategoryCard>
  </div>
</template>

<script setup>
import MobileSubcategoryCard from "@/common/components/ui/card/MobileSubcategoryCard.vue";
import {
  MobileShopHomeNext,
  MobileMenuCategoriesDetails,
  MobileMenuSubcategorys,
  MobileShopHomePrevious,
} from "@/common/components/ui/content/mobile/index.js";
import { onMounted, inject, ref } from "vue";
const currentIndex = ref(null);

const useRootStore = inject("useRootStore");
const productData = inject("productData");
const accountStore = inject("accountStore");

const setCurrentIndex = (i) => (currentIndex.value = i);
onMounted(() => useRootStore.siderBarMenuInit());
</script>

<style scoped>
* {
  font-family: RiiT_F;
}

.fade-enter-active {
  transition: all 0.4s ease-in-out;
}

.fade-leave-active {
  display: none;
}

.fade-enter-from,
.fade-leave-from {
  opacity: 0;
}
</style>
