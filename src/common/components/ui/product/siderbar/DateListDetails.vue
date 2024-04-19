<template>
  <li @click="handleSelectionDay(orders)"
    class=" oder__item relative bg-color-eva-light-purple py-8 px-4 transition-colors duration-200 hover:bg-[#9d7ab8]"
    v-for="(orders, i) in  myorder  " :key="orders.clients_id">
    <button>
      <div class="text-left">
        <!-- 他只有在第最近的日期出現 -->
        <p v-if="i === 0"
          class="delivery-badge inline-flex  float-right  items-center border border-color-primary-light  bg-color-eva-dark-yellow rounded-xl px-2">
          <Icon class="text-color-primary-light" :icon="haveOderIcon" />
          <span class="ml-2  tracking-wider"> {{ productState }} </span>
        </p>
        <div class="float-none"></div>
        <!-- 只有即將出貨出現 -->
        <!-- <p
        class="delivery-badge delivery-badge inline-flex  items-center border border-color-primary-light  bg-color-eva-dark-yellow rounded-xl px-2">

        <Icon class="text-color-primary-light" icon="carbon:delivery" />

        <span class="ml-2  tracking-wider"> 配送進行... </span>
      </p> -->

        <p v-if="orders.order_date.date" class="item__title  tracking-widest ">
          <span class="u-text-small tracking-widest">{{ orders.order_date.dayOfWeek }}</span>
          <span class="u-text-small tracking-widest">{{ orders.order_date.date.slice(4) }}</span>
          <span class="ml-3 text-lg">({{ orders.products.length }}項)</span>
        </p>

        <p class="item__text mt-2 text-lg tracking-wide">
          <span class="">最後編輯</span>
          <span> ：{{ lastEditTrans(orders.order_date.date) }} 11 : 59 AM</span>
        </p>
      </div>
    </button>
  </li>
</template>

<script setup>
import { computed, inject, } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
  deadline: Boolean,
});

const { myorder, calcOrderState, handleSelectionDay } = inject('orderStore')

const haveOderIcon = computed(() =>
  props.deadline ? "iconoir:delivery-truck" : "fluent:clock-alarm-24-filled"
);

const productState = computed(() =>
  props.deadline ? "處理貨物中" : "即將到期"
);

// const haveOderItemText = computed(() => {
//   if (props.deadline) {
//     return ` 配送時間：
//           ${props.deliveryTime}`;
//   } else {
//     return `最後編輯：
//           ${props.lastEdit} `;
//   }
// });


const lastEditTrans = (day) => {
  let [m, d] = day.slice(5).split('/')
  return `${m} 月 ${+d - 1} 號`
}






</script>
<style scoped>
* {
  font-family: Yagoinini;
  color: #0c1d00;
}

.oder__item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  left: 0;
  bottom: 0;
  background: #52d053;
}
</style>
