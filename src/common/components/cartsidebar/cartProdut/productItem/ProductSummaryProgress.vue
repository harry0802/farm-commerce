<template>
  <div class="oder__progress px-4 pt-2 pb-4">
    <p class="mb-2">${{ feeTarget }}!</p>
    <transition>
      <div v-show="!hiddenProgress">
        <span class="progress__text">{{ deliveryCharge }}%</span>
        <div class="progress">
          <span class="progress__hidden" :style="calcHidden"></span>

          <span
            class="progress__ligth"
            v-for="(item, i) in colorArr"
            :key="item"
            :style="{ 'background-color': colorArr[i] }"
          ></span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
const colorArr = [
  "#cc0100",
  "#cf3200",
  "#ce3203",
  "#cc6502",
  "#ce9900",
  "#cdcb03",
  "#feff06",
  "#ffff65",
  "#fffdca",
  "#fff",
];
const props = defineProps({
  maxValue: Number,
  progressLength: Number,
});
const hiddenProgress = computed(() => deliveryCharge.value === 100);

const enterPrice = computed(() =>
  props.progressLength >= props.maxValue
    ? props.maxValue
    : props.progressLength > 0
    ? props.progressLength
    : 0
);

const deliveryCharge = computed(() => {
  const calcFloor = Math.floor((enterPrice.value / props.maxValue) * 100);
  return calcFloor >= 100 ? 100 : calcFloor;
});

const feeTarget = computed(() => {
  const calcfloor = Math.floor(props.maxValue - enterPrice.value);
  console.log(calcfloor);

  return calcfloor === 0
    ? "免除運費！"
    : calcfloor >= 0
    ? `在消費${calcfloor}元便可以免運!`
    : "";
});

const calcHidden = computed(() => {
  const schedule = Math.round(deliveryCharge.value);
  return {
    transform: `skew(-10deg) translate(${schedule}%)`,
  };
});
</script>

<style scoped>
* {
  font-family: GalmuriMono9;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 3px;
}
.oder__progress {
  margin: auto;
}

.progress {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  background: #000;
  border-radius: 30px;
  overflow: hidden;
  padding: 5px;
  transform: skew(-20deg);
}

.progress__hidden {
  position: absolute;
  height: 20px;
  width: 100%;
  right: 0;
  background: #000;
  transform: skew(-10deg) translate(90%);
  z-index: 1;
}

.progress__text {
  /* position: absolute; */
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 3px;
  z-index: 2;

  transform: skew(-20deg);
}

.progress__ligth {
  display: block;
  width: 100%;
  height: 100%;
  transform: skew(-20deg);
  /* border-radius: 30px; */
}
.progress__ligth:not(:first-of-type) {
  margin-left: 4px;
  border-radius: 2px;
}

@media only screen and (min-width: 780px) {
  .progress {
    height: 24px;
  }
  .progress__hidden {
    height: 24px;
  }
}

.progress-enter-active,
.progress-leave-active {
  transition: opacity 0.5s;
}
.progress-enter-from,
.progress-enter-to {
  opacity: 0;
}

.progress-leave-from,
.progress-leave-to {
  opacity: 1;
}
</style>
