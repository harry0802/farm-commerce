<template>
  <li>
    <div>
      <!-- 他只有在第最近的日期出現 -->
      <p class="delivery-badge">
        <span>
          <Icon :icon="haveOderIcon" />
        </span>
        <span> {{ productState }} </span>
      </p>

      <!-- 只有即將出貨出現 -->
      <!-- <p class="delivery-badge">
          <span>

          </span>
          <span> 處理貨物中 </span>
        </p> -->

      <p class="item__title">
        <span>{{ date }}</span>
        <span>{{ quantity }}</span>
      </p>

      <p class="item__text">{{ haveOderItemText }}</p>
    </div>
  </li>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
  deadline: Boolean,
  deliveryTime: { type: String, default: "10:00 AM - 4:00 PM" },
  lastEdit: { type: String, default: "Tuesday, October 24 at 11:59 AM" },
  date: { type: String, default: "週一 , 10月1日" },
  quantity: { type: String, default: "一件商品" },
});

const haveOderIcon = computed(() =>
  props.deadline ? "iconoir:delivery-truck" : "fluent:clock-alarm-24-filled"
);

const productState = computed(() =>
  props.deadline ? "處理貨物中" : "即將到期"
);

const haveOderItemText = computed(() => {
  if (props.deadline) {
    return ` 配送時間：
          <span>${props.deliveryTime}</span>`;
  } else {
    return `最後編輯時間：
          <span>${props.lastEdit} </span>`;
  }
});
</script>
<style></style>
