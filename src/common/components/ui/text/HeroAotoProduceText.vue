<template>
  <p class=" autoProduce_text hidden place-content-center overflow-hidden sm:flex ">
    <span class="text-white  text-4xl" v-for="(propaganda, i) in currentText" :style="charStyles[i]" :key="currentText">
      {{ propaganda }}
    </span>
  </p>
</template>

<script setup>
import { onBeforeUnmount, ref, } from "vue";

const textArray2 = [
  { id: 'A', text: '迎接自然的懷抱' },
  { id: 'B', text: '品味鄉村的魅力' },
  { id: 'C', text: '尋找心靈的寧靜' },
  { id: 'D', text: '與大自然對話' },
  { id: 'E', text: '感受生活的節奏' }
];

// 要循環的文本在於 currentText
let currentIndex = ref(0);
let currentText = ref([]);
let charStyles = ref([]);
let timer;

const loopAutoText = () => {
  currentIndex.value = (currentIndex.value + 1) % textArray2.length;
};

const controlSpan = function () {
  let text = [];
  currentText.value = [];
  charStyles.value = [];
  text = textArray2[currentIndex.value].text;

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
