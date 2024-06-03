<template>
  <dynamic-wrapper>
    <!-- 當為型態 2 時將會被隱藏 if -->
    <template #list>
      <component v-if="calcOrderState ? store.getshowList : !store.getshowList"
        :is="calcOrderState? DateProductList:DateBackground" />
      <date-list v-else />
    </template>
    <template #bottom>
      <date-dynamic-button-bar />
    </template>
  </dynamic-wrapper>
</template>

<script setup>
import DynamicWrapper from "../../ui/content/cartSideBar/DynamicWrapper.vue";
import DateBackground from "../../cartsidebar/cartDate/dateList/DateBackground.vue";
import DateList from "../../cartsidebar/cartDate/dateList/DateList.vue";
import DateDynamicButtonBar from "../../cartsidebar/cartDate/dateList/DateDynamicButtonBar.vue";
import DateProductList from "@/common/components/cartsidebar/cartDate/dateList/DateProductList.vue";
import { inject } from "vue";
const store = inject('store')
const { calcOrderState } = inject('orderStore')
</script>
