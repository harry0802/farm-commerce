<template>
  <transition>
    <div v-if="propup" :class="calcPropupClass">
      <slot></slot>
    </div>
  </transition>
</template>

<script setup>
import { computed, ref, defineProps, watchEffect } from "vue";
const propup = ref(false);

const props = defineProps({
  oderUpState: Boolean,
});

const calcPropupClass = computed(() =>
  props.oderUpState ? "oderSuccessful" : "oderAlert"
);

watchEffect(() => {
  if (props.oderUpState) {
    setTimeout(() => {
      propup.value = false;
    }, 3000);
  }
});
</script>

<style scoped>
.oderAlert {
  background: #f00;
}

.oderSuccessful {
  background: #0f0;
}

.fade-slide-up-enter-active,
.fade-slide-up-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-slide-up-enter,
.fade-slide-up-leave-to

/* .fade-slide-up-leave-active 在 <2.1.8 中可用 */
  {
  opacity: 0;
  transform: translateY(-20px);
  /* 向上滑动 */
}
</style>
