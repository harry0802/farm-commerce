<template>
  <li class="oder__item relative" @click="handleDateSelect">
    <button class="oder__item--btn py-8 px-4" :class="{ active: isSelected }">
      <div>
        <p class="item__title u-text-small">
          {{ props.date }}/{{ props.theweek }}
        </p>
        <p class="item__text">配送時間：{{ props.deliverywindow }}</p>
      </div>
      <!-- 當被點選才顯示 -->
      <Icon v-if="isSelected" icon="pixelarticons:check-double" />
    </button>
  </li>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { Icon } from "@iconify/vue";
const props = defineProps({
  date: String,
  deliverywindow: String,
  theweek: String,
  isSelected: Boolean,
});

const emit = defineEmits("select");

const handleDateSelect = () => {
  if (!props.isSelected) {
    emit("select", props.date, props.theweek);
  }
};
</script>

<style scoped>
* {
  font-family: Yagoinini;
  color: #0c1d00;
}

p {
  text-align: left;
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

.oder__item--btn {
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: #916cad;
  transition: 0.3s ease-out;
}

.oder__item--btn:hover {
  background: hsl(274, 30%, 60%);
}

.active.oder__item--btn {
  background: hsl(274, 30%, 60%);
}

.item__title {
  letter-spacing: 3px;
  color: #0c1d00;
}

.active.oder__item--btn .item__title {
  color: #f5c024;
}

.iconify {
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 100%;
  border: 3px dashed #5f2a62;
  padding: 2px;
  color: #52d053;
}</style>
