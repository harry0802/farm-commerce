<template>
  <div class="-mt-4">

    <svg width="100%" height="100%" viewBox="0 0 2000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
      overflow="auto" shape-rendering="auto" fill="#ffffff">
      <defs>
        <path id="wavepath"
          d="M 0 2000 0 500 Q 52.5 402 105 500 t 105 0 105 0 105 0 105 0 105 0 105 0 105 0 105 0 105 0 105 0 105 0  v1000 z" />
        <path id="motionpath" d="M -210 0 0 0" />
      </defs>
      <g>
        <use xlink:href="#wavepath" y="377" fill="#29B6F6">
          <animateMotion dur="5s" repeatCount="indefinite">
            <mpath xlink:href="#motionpath" />
          </animateMotion>
        </use>
      </g>
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  position: relative;

  background: transparent;
}

.cls {
  fill: currentColor;
  stroke: none;
  stroke-miterlimit: 10;
  stroke-width: 0.75px;
}
</style>
