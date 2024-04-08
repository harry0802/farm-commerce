<template>
  <!-- <ul v-if="!haveOder" class="create__oder-list"> -->
  <ul class="create__oder-list u-scroll-eva-ion text-color-eva-light-purple">
    <date-creat-oder-item v-for="(data, index) in createDate" :key="data.date" :date="data.date"
      :theweek="data.dayOfWeek" :isSelected="index === selectedDateIndex"
      @select="selectDate(index, data.date, data.dayOfWeek)" />

  </ul>
</template>

<script setup>
import DateCreatOderItem from "../../../ui/content/cartSideBar/DateCreatOderItem.vue";
import { onMounted, ref } from "vue";
import { createDate } from "@/Plugins/day.js";

const selectedDateIndex = ref(-1);
const clickedItemTitle = ref("");
const selectDate = (index, date, theweek) => {
  const monthDay = date.slice(5);
  clickedItemTitle.value = `${monthDay}/${theweek}`;
  selectedDateIndex.value = index; // 当日期项被选中时更新 selectedDateIndex 的值
};

onMounted(() => {
  createDate;
});
</script>

<style scoped>
.create__oder-list {
  position: absolute;
  top: 0;
  height: 100%;
  padding-bottom: 97px;
  width: 100%;
}
</style>
