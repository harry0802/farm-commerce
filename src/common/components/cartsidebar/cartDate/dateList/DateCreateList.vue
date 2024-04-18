<template>
  <!-- <ul v-if="!haveOder" class="create__oder-list"> -->
  <ul class="create__oder-list u-scroll-eva-ion ">
    <date-creat-oder-item v-for="(data, index) in workDay.workDayList" :key="data.date" :date="data.date"
      :theweek="data.dayOfWeek" :isSelected="index === selectedDateIndex"
      @update:selectWorkDay="selectDate(index, data.date, data.dayOfWeek)" />
  </ul>
</template>


<script setup>

import DateCreatOderItem from "../../../ui/content/cartSideBar/DateCreatOderItem.vue";
import { ref, toRefs } from "vue";
import { inject } from "vue";
const store = inject('store')
const selectedDateIndex = ref(-1);
const clickedItemTitle = ref("");
const { currentDay, workDay } = toRefs(store)


const selectDate = (index, date, theweek) => {
  const monthDay = date.slice(5);
  clickedItemTitle.value = `${monthDay}/${theweek}`;
  selectedDateIndex.value = index;
  currentDay.value.currentWorkDay = clickedItemTitle.value
  currentDay.value.selectionIndex = selectedDateIndex.value
};



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
