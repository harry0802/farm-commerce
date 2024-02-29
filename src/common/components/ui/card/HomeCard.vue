<template>
  <div class=" max-w-[370px]">
    <div class="card">
      <div class="card-item relative rounded-lg bg-white p-4 py-10">
        <slot />
        <div class="card-Img-Border"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  position: relative;
  background-color: #afafaf;
  padding: 3px;
  clip-path: inset(0 round 10px);
  z-index: 1;
  overflow: hidden;
}



.card-Img-Border {
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  margin: auto;
  transform: rotate(40deg);
  z-index: -1;
  animation: rotateGradient 6s;
  animation-timing-function: cubic-bezier(0.11, 0, 0.5, 0);
}

.card-Img-Border::before {
  content: "";
  position: absolute;
  top: 55%;
  right: 50%;
  width: 100%;
  height: 100px;
  background-image: linear-gradient(#e4e4e4 0%, #fff 50%, #e4e4e4 100%);
  background-image: linear-gradient(rgba(228, 228, 228, 0) 0%,
      #e4e4e4 20%,
      #fff 60%,
      rgba(228, 228, 228, 0) 100%);

  z-index: -1;
}

@keyframes rotateGradient {
  0% {
    transform: rotate(40deg);
  }

  50% {
    transform: rotate(220deg);
  }
}
</style>
