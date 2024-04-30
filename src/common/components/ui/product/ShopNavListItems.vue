<template>
  <li class="">
    <RouterLink class="item--link " :class="{ active: isActive || currentId === productItem || isInclude }"
      :to="productItem" @click="
        handleClick(currentIndex)
        ">

      {{
        productItem
      }}
    </RouterLink>
    <div v-if="isActive || isInclude">
      <shop-side-nav-sublist v-for=" item in isSubItem" :key="item" :productSubItem="item" :currentId="currentId" />
    </div>
  </li>
</template>



<script setup>
import { defineProps, computed, watchEffect, inject } from "vue";
import ShopSideNavSublist from "../../ui/navigations/ShopSideNavSublist.vue";
import { useProduct } from '@/store/modules/product/useProduct.js'
const store = useProduct()
const props = defineProps({
  productItem: String,
  isSubItem: Array,
  isActive: Boolean,
  currentIndex: Number,
});

const currentId = inject('observerCurrentID')

const isInclude = computed(() => props.isSubItem.includes(currentId.value));
const isActive = computed(() => (store.shopUrlId === props.productItem || props.isSubItem.includes(store.shopUrlId)));

watchEffect(() => {
  if (isActive.value) {
    store.setCategoryIndex(props.currentIndex);
  }
});

function handleClick() {
  store.setCategoryIndex();
}

</script>

<style scoped>
a {
  font-family: SentyGoldSand;
}

.item--link {
  @apply text-color-primary-light pb-1
}

.active.item--link {
  font-weight: bold;
  @apply text-color-primary
}
</style>
