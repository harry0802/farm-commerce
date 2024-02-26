<template>
  <p class=" autoProduce_text hidden place-content-center overflow-hidden sm:flex ">
    <span class="u-text-large" v-for="(tet, i) in currentText" :style="charStyles[i]" :key="currentText + i">
      {{ tet }}
    </span>
  </p>
</template>

<script setup>
import { onBeforeUnmount, ref, } from "vue";

const textArray = ["11111111", "2222", "333jjqweoi"];

let currentIndex = ref(0);
let currentText = ref([]);
let charStyles = ref([]);
let timer;

const loopAutoText = function () {
  currentIndex.value = (currentIndex.value + 1) % textArray.length;
};

const controlSpan = function () {
  let text = [];
  currentText.value = [];
  charStyles.value = [];
  text = textArray[currentIndex.value];

  for (let i = 0; i < text.length; i++) {
    currentText.value[i] = text[i];
    charStyles.value[i] = `animation-delay:${i * 0.05}s`;
  }
};

controlSpan();
loopAutoText();
timer = setInterval(() => {
  controlSpan();
  loopAutoText();
}, 3000);




onBeforeUnmount(() => {
  clearInterval(timer);
});

</script>

<style scoped>
span {
  color: white;
  font-family: cjkfonts;
  animation: landIn 0.8s ease-out both;
}

@keyframes landIn {
  from {
    opacity: 0;
    transform: translateY(-30%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
